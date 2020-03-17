package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/jwma/jump-jump/internal/app/db"
	"github.com/jwma/jump-jump/internal/app/models"
	"github.com/jwma/jump-jump/internal/app/repository"
	"github.com/jwma/jump-jump/internal/app/utils"
	"net/http"
	"strings"
)

type loginForm struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Login(c *gin.Context) {
	f := &loginForm{}
	err := c.BindJSON(f)
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"msg":  "用户名或密码错误",
			"code": 4999,
			"data": nil,
		})
		return
	}

	repo := repository.NewUserRepository(db.GetRedisClient())
	u, err := repo.FindOneByUsername(strings.TrimSpace(f.Username))
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"msg":  "用户名或密码错误",
			"code": 4999,
			"data": nil,
		})
		return
	}

	dk, _ := utils.EncodePassword([]byte(f.Password), u.Salt)
	if string(u.Password) != string(dk) {
		c.JSON(http.StatusOK, gin.H{
			"msg":  "用户名或密码错误",
			"code": 4999,
			"data": nil,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"msg":  "ok",
		"code": 0,
		"data": gin.H{
			"token": utils.GenerateJWT(u.Username),
		},
	})
}

func GetUserInfoAPI() gin.HandlerFunc {
	return Authenticator(func(c *gin.Context, user *models.User) {
		c.JSON(http.StatusOK, gin.H{
			"msg":  "",
			"code": 0,
			"data": gin.H{
				"username": user.Username,
				"role":     user.Role,
			},
		})
	})
}

func LogoutAPI() gin.HandlerFunc {
	return Authenticator(func(c *gin.Context, user *models.User) {
		c.JSON(http.StatusOK, gin.H{
			"msg":  "",
			"code": 0,
			"data": nil,
		})
	})
}
