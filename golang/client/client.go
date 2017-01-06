package main

import (
	"context"
	"log"
	"math/rand"
	"time"

	"github.com/icrowley/fake"
	"github.com/jessedearing/grpc-poc/golang/person"
	"google.golang.org/grpc"
)

const (
	host = "localhost:3001"
)

func main() {
	conn, err := grpc.Dial(host, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	client := person.NewPersonSenderClient(conn)

	for {
		p := &person.PersonRequest{
			FirstName:  fake.FirstName(),
			LastName:   fake.LastName(),
			Email:      fake.EmailAddress(),
			IsEmployee: rand.Intn(1) == 1,
		}

		response, err := client.SendPerson(context.Background(), p)
		if err != nil {
			log.Fatal(err)
		}

		log.Println(response)
		time.Sleep(1 * time.Second)
	}
}
