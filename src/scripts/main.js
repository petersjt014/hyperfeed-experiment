import request from '/request';
import hyperfeed from '/hyperfeed';
import hyperdrive from '/hyperdrive';
import hyperdiscovery from '/hyperdiscovery';

function testThings() {

  dateStr = "Date: " + new Date();
  document.getElementById('tester').innerHTML = dateStr;
  console.log(dateStr);
}

function otherThing(){

  console.log('[wip]')
}
