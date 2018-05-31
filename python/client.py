import grpc
import person_pb2
import person_pb2_grpc
from faker import Faker
import time

chan = grpc.insecure_channel("localhost:3001")
stub = person_pb2_grpc.PersonSenderStub(chan)

faker = Faker()

while True:
    req = person_pb2.PersonRequest()
    req.firstName = faker.first_name()
    req.lastName = faker.last_name()
    req.email = faker.email()
    req.isEmployee = faker.boolean()

    resp = stub.SendPerson(req)
    print(resp)
    time.sleep(2)

