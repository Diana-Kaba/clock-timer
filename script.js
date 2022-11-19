"use strict";
let dateInFuture = new Date(2023, 0, 1, 10, 32, 4);
let t;
function timer() {
  // Установить дату и время текущего момента
  let date = new Date().getTime();
  // Разница в милисекундах между текущей и будущей датой
  let ms = dateInFuture - date;
  // Подсчет разницы времени в днях, часах, минутах и секундах
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  // Показать результат в теге с id="time"
  document.getElementById("time").innerHTML =
    "Осталось: " +
    days +
    " дней " +
    hours +
    " часов " +
    minutes +
    " минут " +
    seconds +
    " cекунд ";
  // Если время истекло, показать сообщение
  if (ms < 0) {
    clearInterval(t);
    document.getElementById("time").innerHTML = "Время истекло!";
  }
  t = setInterval(timer, 1000);
}

function startTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("timer").innerHTML =
    hours + ":" + minutes + ":" + seconds; // Выбор элемента документа по его id = "time1"
  setInterval(startTime, 1000);
}
