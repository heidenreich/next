
Parse.initialize("mNOaXfcJoseEvxjpNp5ZvVgQ5JE7UUy9PPco2bqX", "1p2LtfEWOxeL0Hd9Ud0fVYKRTgc6vrc4XpWrrUyH");



var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});




var DataPoint = Parse.Object.extend("DataPoint")

var NextData = Parse.Collection.extend({
  model: DataPoint
})

var data = new DataPoint

data.save({
  temperature: fahrenheit,
  light: lightLevel
})