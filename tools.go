// +build tools

package tools

import (
	// Tools we use during development.
	_ "google.golang.org/grpc/cmd/protoc-gen-go-grpc"
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"
)

//go:generate go build -v -o=./bin/protoc-gen-go-grpc google.golang.org/grpc/cmd/protoc-gen-go-grpc
//go:generate go build -v -o=./bin/protoc-gen-go google.golang.org/protobuf/cmd/protoc-gen-go
