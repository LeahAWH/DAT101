"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
var sum = 2 + 3 * (2 - 4) * 6;
printOut("Sum: " + sum);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
var milimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
var sumPart2 = milimeters / millPrInch;
printOut("25m + 34cm = " + milimeters + " mm");
printOut("25m + 34cm = " + sumPart2.toFixed(2) + " in");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3, part3Hours = 12, part3Minutes = 14, part3Seconds = 45;
const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut("Total minutes: " + part3Answer + " min");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalMinutes4 = 6322.52;
let remainder;

let totalDays4 = totalMinutes4 / (24 * 60);
let days4 = Math.floor(totalDays4);

remainder = totalDays4 - days4;

let totalHours4 = remainder * 24;
let hours4 = Math.floor(totalHours4);

remainder = totalHours4 - hours4;

let totalMinutesLeft = remainder * 60;
let minutes4 = Math.floor(totalMinutesLeft);

remainder = totalMinutesLeft - minutes4;

let totalSeconds = remainder * 60;
let seconds4 = Math.floor(totalSeconds);

printOut("Total time: " + days4 + " days, " + hours4 + " hours, " + minutes4 + " minutes, " + seconds4   + " seconds.");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let nokRate = 76 / 8.6;
let usdRate = 8.6 / 76;
let dollars = 54;
let nok = Math.round(dollars * nokRate);
let usd = Math.round(nok * usdRate);
printOut(dollars + " USD = " + nok + " NOK");
printOut(nok + " NOK = " + usd + " USD");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";

printOut(text.length);
printOut(text.charAt(19));
printOut(text.substring(35, 43));
printOut(text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(5 > 3);
printOut(7 >= 7);
printOut("a" > "b");
printOut("1" < "a");
printOut("2500" < "abcd");
printOut("arne" !== "thomas");
printOut(2 === 5);
printOut(!("abcd" > "bcd"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(Number("254"));
printOut(Number("57.23"));
printOut(Number("25 kroner"));
printOut(parseInt("254"));
printOut(parseFloat("57.23"));
printOut(parseInt("25 kroner"));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;

printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays10 = 131;

let weeks = Math.floor(totalDays10 / 7);
let days = totalDays10 % 7;

printOut(weeks);
printOut(days);
printOut(newLine);