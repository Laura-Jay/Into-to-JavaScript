"use strict"; // turns strict mode on

let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log("The days of the week are:");

for (let fullDayName of daysOfWeek) {
  let shortDayName = fullDayName.slice(0, 3);
  console.log(`- ${shortDayName.toUpperCase()}: ${fullDayName}`);
}
