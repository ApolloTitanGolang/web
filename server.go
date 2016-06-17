// web stuff
// source
// https://drive.google.com/folderview?id=0B22KXlqHz6ZNfjNXTzk1U3JHUkJ6VjJ3dnJKNzVtNjRUM3Q2WFNqWGI2Q3RadERqUlVrOEU&usp=sharing


package main

import (
	"io"
	"net/http"
)

type MyHandler int

func (h MyHandler) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	io.WriteString(res, "Hello World 2")
	io.WriteString(res, req.RequestURI)
}

func main() {
	var h MyHandler
	http.ListenAndServe(":8080", h)
}
