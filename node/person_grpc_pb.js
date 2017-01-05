// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var person_pb = require('./person_pb.js');

function serialize_person_PersonRequest(arg) {
  if (!(arg instanceof person_pb.PersonRequest)) {
    throw new Error('Expected argument of type person.PersonRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_person_PersonRequest(buffer_arg) {
  return person_pb.PersonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_person_PersonResponse(arg) {
  if (!(arg instanceof person_pb.PersonResponse)) {
    throw new Error('Expected argument of type person.PersonResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_person_PersonResponse(buffer_arg) {
  return person_pb.PersonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PersonSenderService = exports.PersonSenderService = {
  sendPerson: {
    path: '/person.PersonSender/SendPerson',
    requestStream: false,
    responseStream: false,
    requestType: person_pb.PersonRequest,
    responseType: person_pb.PersonResponse,
    requestSerialize: serialize_person_PersonRequest,
    requestDeserialize: deserialize_person_PersonRequest,
    responseSerialize: serialize_person_PersonResponse,
    responseDeserialize: deserialize_person_PersonResponse,
  },
};

exports.PersonSenderClient = grpc.makeGenericClientConstructor(PersonSenderService);
