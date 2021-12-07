"use strict";

import EventEmitter from "events";

class MyEvent extends EventEmitter {}

const SbEvent = new MyEvent();

SbEvent.on("close", function () {
  process.emit("exit");
});

export default SbEvent;
