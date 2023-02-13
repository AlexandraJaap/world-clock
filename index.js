function updateTime() {
  //Salzburg
  let salzburgElement = document.querySelector("#salzburg");
  let salzburgDateElement = salzburgElement.querySelector(".date");
  let salzburgTimeElement = salzburgElement.querySelector(".time");
  let salzburgTime = moment().tz("Europe/Vienna");

  salzburgDateElement.innerHTML = salzburgTime.format("MMMM Do YYYY");
  salzburgTimeElement.innerHTML = salzburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Dubai
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
