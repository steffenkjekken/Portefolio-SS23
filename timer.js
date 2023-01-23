function Timer() {
    var counter = 4;
    var myTimer = setInterval(function() {
      document.getElementById("timer").innerHTML = counter;
      counter--;
      if (counter < 0) {
        clearInterval(myTimer);
        window.location="index.html";
      }

      if (counter < 1) {
        document.getElementById("second").innerHTML = "second"
      }
      
    
    }, 1000);
  }

Timer();