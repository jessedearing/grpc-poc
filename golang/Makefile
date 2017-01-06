all: person/person.pb.go client/client server/server

person/person.pb.go:
	protoc --go_out=plugins=grpc:person person.proto

server/server:
	cd server && go build

client/client:
	cd client && go build

clean:
	rm client/client
	rm server/server
	rm person/person.pb.go
