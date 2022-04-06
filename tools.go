// +build tools

package tools

import (
	// Tools we use during development.
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway"
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2"
	_ "google.golang.org/api/servicecontrol/v2"
	_ "google.golang.org/grpc/cmd/protoc-gen-go-grpc"
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"
)

//go:generate go build -v -o=./gobin/protoc-gen-go-grpc google.golang.org/grpc/cmd/protoc-gen-go-grpc
//go:generate go build -v -o=./gobin/protoc-gen-go google.golang.org/protobuf/cmd/protoc-gen-go
//go:generate go build -v -o=./gobin/protoc-gen-grpc-gateway github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway
//go:generate go build -v -o=./gobin/protoc-gen-openapiv2 github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2
