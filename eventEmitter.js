import { EventEmitter } from 'events';
//  Event System 
class MyEmitters extends EventEmitter {
  constructor() {
    super();
  }

  emitEvent(eventName, data) {
    this.emit(eventName, data);
  }

  onEvent(eventName, callback) {
    this.on(eventName, callback);
  }
}

const eventEmitter = new MyEmitters();

export default eventEmitter;