


const moment = require('moment');
const chalk = require('chalk');






let hour = 60 * 60 * moment().format("H");
let minute = 60 * moment().format("m");
let second = moment().format("s");
let totalSeconds = hour + minute + parseInt(second);



console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");
console.log("It is the " + chalk.magenta(moment().format("DDD")) + " day of the year.");
console.log("It is " + chalk.green( totalSeconds ) + " into the day.");


if (moment().isDST()) {
  console.log("It" + chalk.yellow(" is ") + "daylight savings time.");
}
else {
  console.log("It is not daylight savings time.");
}




if (moment().isLeapYear()) {
  console.log("It is leap year ");
}
else {
  console.log("It" + chalk.red(" is not ")+ "a leap year");
}

// console.log("it is a " + moment().format;);
