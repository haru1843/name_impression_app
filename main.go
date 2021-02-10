package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// Impression : 受ける印象
type Impression struct {
	Feminine  float32 `gorm:"not null"`
	Masculine float32 `gorm:"not null"`
}

// NameInfo : テーブル構造の定義
type NameInfo struct {
	gorm.Model
	Name string `gorm:"size:256;not null"`
	Impression
}

func (info NameInfo) String() string {
	return fmt.Sprintf("[%s]'s info - (Feminine:%d, Masculine:%d)",
		info.Name, info.Feminine, info.Masculine)
}

// --- ハンドラ系の関数 ---
func apiNotFound(c *gin.Context) {
	c.String(http.StatusNotFound, "Invalid end-point.")
}

// gormにてDBに接続する
func gormConnect() *gorm.DB {
	DBMS := "mysql"
	USER := "haru1843"
	PASS := "aGaPux4BETz3"
	DBNAME := "random_name_table"

	CONNECT := USER + ":" + PASS + "@/" + DBNAME + "?parseTime=true"
	db, err := gorm.Open(DBMS, CONNECT)

	if err != nil {
		panic(err.Error())
	}
	return db
}

func main() {
	db := gormConnect()
	db.AutoMigrate(&NameInfo{})
	defer db.Close()

	router := gin.Default()

	// ミドルウェアの使用
	router.Use(getMiddlewareFunc())
	router.Use(static.Serve("/", static.LocalFile("./client/build/", true)))

	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "hello, world",
			})
		})
		api.GET("/user", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "user!!",
			})
		})
	}
	// router.GET("/api", func(c *gin.Context) {
	// 	c.JSON(http.StatusOK, gin.H{
	// 		"message": "hello, world",
	// 	})
	// })

	router.NoRoute(func(c *gin.Context) {
		if strings.HasPrefix(c.Request.URL.Path, "/api") {
			// APIのNotFoundErrorへ振り分け
			apiNotFound(c)
		} else {
			// c.HTML(http.StatusOK, "index.html", gin.H{})
			// c.HTML(http.StatusOK, static.LocalFile("./client/build/", true), gin.H{})
			// c.HTML(http.StatusOK, "index.html", gin.H{})
			// c.HTML(http.StatusOK, "./client/build/index.html", gin.H{})
			c.File("./client/build/index.html")
		}
	})

	router.Run()

	// http.HandleFunc("/", indexHandler)

	// port := os.Getenv("PORT")
	// if port == "" {
	// 	port = "8080"
	// 	log.Printf("Defaulting to port %s", port)
	// }

	// log.Printf("Listening on port %s", port)
	// if err := http.ListenAndServe(":"+port, nil); err != nil {
	// 	log.Fatal(err)
	// }
}

// func indexHandler(w http.ResponseWriter, r *http.Request) {
// 	if r.URL.Path != "/" {
// 		http.NotFound(w, r)
// 		return
// 	}
// 	fmt.Fprint(w, "Hello, world!")
// }

func getMiddlewareFunc() gin.HandlerFunc {
	return func(c *gin.Context) {
		log.Println("before logic")
		c.Next()
		log.Println("after logi")
	}
}
