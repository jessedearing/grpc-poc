"use strict";

var messages = require('./person_pb.js');
var service = require('./person_grpc_pb.js');

var grpc = require('grpc');

function main() {
  var client = new service.PersonSenderClient('localhost:3001', grpc.credentials.createInsecure());

  var person = new messages.PersonRequest();
  person.setFirstname('Jesse');
  person.setLastname('Dearing');
  person.setEmail('jessedearing@invisionapp.com');
  person.setIsemployee(true);

  client.sendPerson(person, (err, response) => {
    console.log(response.getOk());
  });
}

main();
