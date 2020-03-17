package models

import (
	"encoding/json"
	"fmt"
	"github.com/go-redis/redis"
	"github.com/jwma/jump-jump/internal/app/db"
	"github.com/jwma/jump-jump/internal/app/utils"
	"log"
	"time"
)

const RoleUser = 1
const RoleAdmin = 2

var Roles = map[int]string{
	RoleUser:  "user",
	RoleAdmin: "admin",
}

type User struct {
	Username    string    `json:"username"`
	Role        int       `json:"role"`
	RawPassword string    `json:"-"`
	Password    []byte    `json:"password"`
	Salt        []byte    `json:"salt"`
	CreateTime  time.Time `json:"create_time"`
}

func (u *User) IsAdmin() bool {
	return u.Role == RoleAdmin
}

type ShortLink struct {
	Id          string    `json:"id"`
	Url         string    `json:"url"`
	Description string    `json:"description"`
	IsEnable    bool      `json:"is_enable"`
	CreatedBy   string    `json:"created_by"`
	CreateTime  time.Time `json:"create_time"`
	UpdateTime  time.Time `json:"update_time"`
}

type UpdateShortLinkParameter struct {
	Url         string `json:"url" binding:"required"`
	Description string `json:"description"`
	IsEnable    bool   `json:"is_enable"`
}

func (s *ShortLink) key() string {
	return fmt.Sprintf("link:%s", s.Id)
}

func (s *ShortLink) GenerateId() error {
	client := db.GetRedisClient()

	for true {
		s.Id = utils.RandStringRunes(6)
		_, err := client.Get(s.key()).Result()
		if err == redis.Nil {
			return nil
		}
		if err != nil {
			log.Println(err)
			return err
		}
	}

	return nil
}

func (s *ShortLink) Save(isUpdate bool) error {
	if s.Id == "" {
		return fmt.Errorf("id错误")
	}
	if s.Url == "" {
		return fmt.Errorf("请填写url")
	}
	if s.CreatedBy == "" {
		return fmt.Errorf("未设置创建者，请通过接口创建短链接")
	}

	if !isUpdate {
		s.CreateTime = time.Now()
	}
	s.UpdateTime = time.Now()
	c := db.GetRedisClient()
	j, _ := json.Marshal(s)
	// 保存短链接
	c.Set(s.key(), j, 0)
	// 保存用户的短链接记录，保存到创建者及全局
	record := redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: s.Id,
	}
	c.ZAdd(fmt.Sprintf("links:%s", s.CreatedBy), record)
	c.ZAdd("links", record)

	return nil
}

func (s *ShortLink) Get() error {
	if s.Id == "" {
		return fmt.Errorf("短链接不存在")
	}

	c := db.GetRedisClient()
	rs, err := c.Get(s.key()).Result()
	if err != nil {
		log.Printf("fail to get short Link with Key: %s, error: %v\n", s.key(), err)
		return fmt.Errorf("短链接不存在")
	}

	err = json.Unmarshal([]byte(rs), s)
	if err != nil {
		log.Printf("fail to unmarshal short Link, Key: %s, error: %v\n", s.key(), err)
		return fmt.Errorf("短链接不存在")
	}

	return nil
}

func (s *ShortLink) Update(u *UpdateShortLinkParameter) error {
	s.Url = u.Url
	s.Description = u.Description
	s.IsEnable = u.IsEnable

	return s.Save(true)
}

func (s *ShortLink) Delete() {
	c := db.GetRedisClient()

	// 删除短链接本身
	c.Del(s.key())
	// 删除用户的短链接记录及全局短链接记录
	c.ZRem(fmt.Sprintf("links:%s", s.CreatedBy), s.Id)
	c.ZRem("links", s.Id)

	// 删除访问历史
	keys, _ := c.Keys(fmt.Sprintf("history:%s:*", s.Id)).Result()
	if len(keys) > 0 {
		c.Del(keys...)
	}
}

type RequestHistory struct {
	Link *ShortLink `json:"-"`
	Url  string     `json:"url"` // 由于短链接的目标连接可能会被修改，可以在访问历史记录中记录一下当前的目标连接
	IP   string     `json:"ip"`
	UA   string     `json:"ua"`
	Time time.Time  `json:"time"`
}

func NewRequestHistory(link *ShortLink, IP string, UA string) *RequestHistory {
	return &RequestHistory{Link: link, IP: IP, UA: UA, Url: link.Url}
}
