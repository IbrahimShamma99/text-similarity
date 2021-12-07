"use strict";


const EventEmitter = require("events");

class MyEvent extends EventEmitter {}

const SbEvent = new MyEvent();

SbEvent.on("close", function () {
  process.emit("exit");
});

module.exports = SbEvent;
