var request = require('request');


var five = require("johnny-five"),board, photoresistor;

board = new five.Board();

board.on("ready", function() {

  // create a new temp sensor instance
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 5000
  });

  // create a new photoresistor hardware instance
  photoresistor = new five.Sensor({
    pin: "A1",
    freq: 5000,

  });

  board.repl.inject({
    pot: photoresistor
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    var lightLevel = this.value;
    console.log("the light level is "+ lightLevel);
    request.post('http://tiny-pizza-server.herokuapp.com/collections/weather')
  });

  // "data" get the current reading from the temperature sensor
  sensor.on("data", function() {
    var voltage = this.value * 0.004882814;
    var celsius = (voltage - 0.5) * 100;
    var fahrenheit = celsius * (9 / 5) + 32;
    console.log(celsius + "°C", fahrenheit + "°F");


  });

  // request.post('http://tiny-pizza-server.herokuapp.com/collections/weather')

});









