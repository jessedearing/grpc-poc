"use strict";

var messages = require('./person_pb.js');
var service = require('./person_grpc_pb.js');
var faker = require('faker');

var grpc = require('grpc');

function sendRequestLoop(client) {
  var person = new messages.PersonRequest();
  person.setFirstname(faker.name.firstName());
  person.setLastname(faker.name.lastName());
  person.setEmail(faker.internet.email());
  person.setIsemployee(faker.random.boolean());

  client.sendPerson(person, (err, response) => {
    console.log(response.getOk());
  });
  setTimeout(function() {
    sendRequestLoop(client);
  }.bind(this), 1000);
}

function main() {
  var client = new service.PersonSenderClient('localhost:3001', grpc.credentials.createInsecure());
  sendRequestLoop(client);
}

main();
