const colors = require('colors');
const figlet = require('figlet');

console.log("This is the magic of npm colors".rainbow);
figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
})