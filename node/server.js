"use strict";

var messages = require('./person_pb.js');
var service = require('./person_grpc_pb.js');

var grpc = require('grpc');

function sendPerson(call, callback) {
  var person = {
    firstName: call.request.getFirstname(),
    lastName: call.request.getLastname(),
    email: call.request.getEmail(),
    isEmployee: call.request.getIsemployee(),
  };
  console.log(person);
  var reply = new messages.PersonResponse();
  reply.setOk(true);
  callback(null, reply);
}

function main() {
  var server = new grpc.Server();

  server.addService(service.PersonSenderService, {sendPerson: sendPerson});
  server.bind('127.0.0.1:3001', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
