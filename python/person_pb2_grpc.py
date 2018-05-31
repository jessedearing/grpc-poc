# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import person_pb2 as person__pb2


class PersonSenderStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.SendPerson = channel.unary_unary(
        '/person.PersonSender/SendPerson',
        request_serializer=person__pb2.PersonRequest.SerializeToString,
        response_deserializer=person__pb2.PersonResponse.FromString,
        )


class PersonSenderServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def SendPerson(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_PersonSenderServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'SendPerson': grpc.unary_unary_rpc_method_handler(
          servicer.SendPerson,
          request_deserializer=person__pb2.PersonRequest.FromString,
          response_serializer=person__pb2.PersonResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'person.PersonSender', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
