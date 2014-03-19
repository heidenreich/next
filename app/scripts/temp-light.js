var request = require('request');

var five = require("johnny-five");

board = new five.Board();

lightLevel = 0

fahrenheit = 0

board.on("ready", function() {

  // create a new temp sensor instance
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 1000
  });

  // create a new photoresistor hardware instance
  photoresistor = new five.Sensor({
    pin: "A1",
    freq: 1000,

  });

  board.repl.inject({
    pot: photoresistor
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    lightLevel = this.value;
    console.log("the light level is "+ lightLevel);
  });

  // "data" get the current reading from the temperature sensor
  sensor.on("data", function() {
    voltage = this.value * 0.004882814;
    celsius = ((voltage - 0.5) * 100).toFixed(2);
    fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
    console.log(celsius + "°C", fahrenheit + "°F");


  });

});

// setInterval(function() {
//   request.post({
//     url: 'http://tiny-pizza-server.herokuapp.com/collections/weather',
//     form:{
//       lightIntensity: lightLevel,
//       temperature: fahrenheit,
//       location: 'lecture hall',
//       time: Date.now()
//     }
//   });
// }, 10000);








