.DEFAULT_GOAL := help
all: person/person.pb.go client/client server/server

.PHONY: grpc
grpc: person/person.pb.go ## Compile structs from protobuf file

person/person.pb.go:
	protoc --go_out=plugins=grpc:person person.proto

.PHONY: server
server: server/server ## Build the server

server/server: server/*.go
	cd server && go build

.PHONY: client
client: client/client ## Build the client

client/client: client/*.go
	cd client && go build

.PHONY: clean
clean: ## Remove all the files generated
	rm client/client
	rm server/server
	rm person/person.pb.go

.PHONY: help
help: ## Display this help message
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_\/-]+:.*?## / {printf "\033[34m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | \
		sort | \
		grep -v '#'
