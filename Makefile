.PHONY: protogen
protogen: setup
	# generate ruby code.
	bundle exec grpc_tools_ruby_protoc \
		--ruby_out=ruby/lib \
		--grpc_out=ruby/lib \
		-I ./proto \
		proto/**/*.proto
	# generate go code.
	protoc \
		--ruby_out=ruby/lib \
		--go_out=./go/lib \
		--go-grpc_out=./go/lib \
		-I ./proto \
		proto/**/*.proto
	# generate nodejs
	npx grpc_tools_node_protoc \
		--plugin=./node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts \
		--js_out=import_style=commonjs,binary:nodejs/lib \
		--grpc_out=grpc_js:nodejs/lib \
		--ts_out=grpc_js:nodejs/lib \
		-I ./proto \
		proto/**/*.proto

.PHONY: setup
setup:
	go generate ./tools.go
	bundle install
	npm install
