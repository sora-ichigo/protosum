.PHONY: protogen
protogen:
	# generate go and ruby code.
	protoc --go_out=go/lib --ruby_out=ruby/lib ./proto/*
	# generate nodejs
	npx grpc_tools_node_protoc --plugin=./node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts --js_out=import_style=commonjs,binary:nodejs/lib --grpc_out=grpc_js:nodejs/lib --ts_out=grpc_js:nodejs/lib -I ./proto ./proto/*.proto
