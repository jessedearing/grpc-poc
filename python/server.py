import grpc
import person_pb2
import person_pb2_grpc
from concurrent import futures
import time

class PersonServer(person_pb2_grpc.PersonSenderServicer):
    def SendPerson(self, request, context):
        print(request)
        response = person_pb2.PersonResponse()
        response.ok = True
        return response

server = grpc.server(futures.ThreadPoolExecutor(max_workers=5))
person_pb2_grpc.add_PersonSenderServicer_to_server(PersonServer(), server)

server.add_insecure_port(':3001')
server.start()

try:
    while True:
        time.sleep(86400)
except KeyboardInterrupt:
    server.stop(0)
