
PROTO_FILE=$(shell find ./proto -name '*.proto')
GRPC_GATEWAY_PATH="${PWD}/vendor/github.com/grpc-ecosystem/grpc-gateway"
GOOGLEAPIS_PATH="${PWD}/plugins/googleapis"

.PHONY: protogen
protogen: clean setup 
	# generate ruby code.
	bundle exec grpc_tools_ruby_protoc \
		--ruby_out=ruby/lib \
		--grpc_out=ruby/lib \
		--grpc-gateway_out=./go/lib \
		-I ${GRPC_GATEWAY_PATH} \
		-I ${GOOGLEAPIS_PATH} \
		-I ./proto \
		${PROTO_FILE}
	# generate go code.
	protoc \
		--go_out=./go/lib \
		--go-grpc_out=./go/lib \
		--grpc-gateway_out=./go/lib \
		-I ${GRPC_GATEWAY_PATH}/ \
		-I ${GOOGLEAPIS_PATH} \
		-I . \
		${PROTO_FILE}
	# generate nodejs
	npx grpc_tools_node_protoc \
		--plugin=./node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts \
		--js_out=import_style=commonjs,binary:nodejs/lib \
		--grpc_out=grpc_js:nodejs/lib \
		--grpc-gateway_out=./go/lib \
		--ts_out=grpc_js:nodejs/lib \
		-I ${GRPC_GATEWAY_PATH}/ \
		-I ${GOOGLEAPIS_PATH} \
		-I ./proto \
		${PROTO_FILE}


.PHONY: setup
setup:
	go mod vendor
	go generate ./tools.go
	bundle install
	npm install

.PHONY: clean
clean:
	rm -rf go/lib/*
	rm -rf nodejs/lib/*
