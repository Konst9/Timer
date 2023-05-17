let timerId = setInterval(() => {
    alert("Прошла 1 минута");
  }, 60000);
  
  function circle2() {
    var canvas = document.getElementById("circle");
    var obCanvas = canvas.getContext("2d");
  
    obCanvas.beginPath();
    obCanvas.arc(150, 75, 60, 0, 3.5 * Math.PI, false);
    obCanvas.lineWidth = 2;
    obCanvas.strokeStyle = "white";
    obCanvas.stroke();
  }
  circle2();
  
  var min = 5;
  const start = 1.5 * Math.PI;
  
  var deadLine = new Date(new Date().getTime() + min * 60 * 1000);
  document.getElementById("btn").onclick = function () {
    var countdown = setInterval(function () {
      var currentTime = new Date().getTime();
      var timer = deadLine - currentTime;
      var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
      var secundes = Math.floor((timer % (1000 * 60)) / 1000);
      var timeSec = min * 60 - (minutes * 60 + secundes);
      var TS = 2 / (min * 60);
      var circleSec = 1.5 + TS * timeSec;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      secundes = secundes < 10 ? "0" + secundes : secundes;
      document.getElementById("deadline-timer").innerHTML =
        minutes + ":" + secundes;
      if (timer < 0) {
        clearInterval(countdown);
        document.getElementById("deadline-timer").innerHTML = "00:00";
        clearInterval(timerId);
      }
      function circle() {
        var canvas = document.getElementById("circle");
        var obCanvas = canvas.getContext("2d");
  
        obCanvas.beginPath();
        obCanvas.arc(150, 75, 60, start, circleSec * Math.PI, false);
        obCanvas.lineWidth = 4;
        obCanvas.strokeStyle = "green";
        obCanvas.stroke();
      }
      circle();
    });
  };
  