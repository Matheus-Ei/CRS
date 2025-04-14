const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");

const dayEnter = lines[0].split(" ")[1];
const dayOut = lines[2].split(" ")[1];

const timeEnter = lines[1].split(" : ");
const timeOut = lines[3].split(" : ");

class ConvertSecond {
  static day (value) {
    return value * 24 * 60 * 60;
  }

  static hour (value) {
    return value * 60 * 60;
  } 

  static minute (value){
    return value * 60;
  } 
}

class ConvertBack {
  static day (value) {
    const numbDays = Math.floor((value / 60 / 60 / 24));
    const intSecondsDay = ConvertSecond.day(numbDays);
    const reatDays = value - intSecondsDay;

    return { retValue: numbDays, reatribute: reatDays };
  };

  static hour (value) {
    const numbHours = Math.floor((value / 60 / 60));
    const intSecondsHour = ConvertSecond.hour(numbHours);
    const reatHour = value - intSecondsHour;

    return { retValue: numbHours, reatribute: reatHour };
  };

  static minute (value) {
    const numbMinute = Math.floor((value / 60));
    const intSecondsMin = ConvertSecond.minute(numbMinute);
    const reatMinute = value - intSecondsMin;

    return { retValue: numbMinute, reatribute: reatMinute };
  };
}

const secondsEnter =
  ConvertSecond.day(Number(dayEnter)) +
  ConvertSecond.hour(Number(timeEnter[0])) +
  ConvertSecond.minute(Number(timeEnter[1])) +
  Number(timeEnter[2]);

const secondsOut =
  ConvertSecond.day(Number(dayOut)) +
  ConvertSecond.hour(Number(timeOut[0])) +
  ConvertSecond.minute(Number(timeOut[1])) +
  Number(timeOut[2]);

const secondsDiff = secondsOut - secondsEnter;

const { retValue: days, reatribute: reatDays } = ConvertBack.day(secondsDiff)
const { retValue: hour, reatribute: reatHour } = ConvertBack.hour(reatDays)
const { retValue: minute, reatribute: seconds } = ConvertBack.minute(reatHour)

console.log(`${days} dia(s)`)
console.log(`${hour} hora(s)`)
console.log(`${minute} minuto(s)`)
console.log(`${seconds} segundo(s)`)
