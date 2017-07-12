// import request from '/request';
// import hyperfeed from '/hyperfeed';
// import hyperdrive from '/hyperdrive';
// import hyperdiscovery from '/hyperdiscovery';

import debug from 'debug';
const log = debug('app:log');

if (ENV !== 'production') {

  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}


function testThings() {

  dateStr = "Date: " + new Date();
  document.getElementById('tester').innerHTML = dateStr;
  console.log(dateStr);
}

function otherThing(){

  console.log('[wip]');
}

function sayHi(name){
  return "Hi " + name + ", it's currently " + new Date();
}

const result1 = sayHi('sam');
