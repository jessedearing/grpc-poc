package main

import (
	"log"
	"net"
	"os"
	"os/signal"
	"runtime/pprof"
	"syscall"

	"golang.org/x/net/context"

	"google.golang.org/grpc"

	"github.com/jessedearing/grpc-poc/golang/person"
)

const (
	port = ":3001"
)

type server struct{}

func (s *server) SendPerson(ctx context.Context, in *person.PersonRequest) (*person.PersonResponse, error) {
	log.Println(in)
	res := &person.PersonResponse{
		Ok: true,
	}

	return res, nil
}

func main() {
	sigchan := make(chan os.Signal)
	go func() {
		for _ = range sigchan {
			ps := pprof.Profiles()
			for _, pro := range ps {
				pro.WriteTo(os.Stderr, 2)
			}
		}
	}()
	signal.Notify(sigchan, syscall.SIGUSR1)

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatal(err)
	}

	s := grpc.NewServer()

	person.RegisterPersonSenderServer(s, &server{})

	s.Serve(lis)
}
