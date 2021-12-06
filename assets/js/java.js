var clickon= document.querySelector("#submit1");

var clickon1a= document.querySelector("#submit1a");
var clickon1b= document.querySelector("#submit1b");
var clickon1c= document.querySelector("#submit1c");
var clickon1d= document.querySelector("#submit1d");

var clickon2a= document.querySelector("#submit2a");
var clickon2b= document.querySelector("#submit2b");
var clickon2c= document.querySelector("#submit2c");
var clickon2d= document.querySelector("#submit2d");

var clickon3a= document.querySelector("#submit3a");
var clickon3b= document.querySelector("#submit3b");
var clickon3c= document.querySelector("#submit3c");
var clickon3d= document.querySelector("#submit3d");

var clickon4a= document.querySelector("#submit4a");
var clickon4b= document.querySelector("#submit4b");
var clickon4c= document.querySelector("#submit4c");
var clickon4d= document.querySelector("#submit4d");

var clickon5a= document.querySelector("#submit5a");
var clickon5b= document.querySelector("#submit5b");
var clickon5c= document.querySelector("#submit5c");
var clickon5d= document.querySelector("#submit5d");
var highScoreView= document.querySelector("#highScoreView");
var submit8a= document.querySelector("#submit8a");


var submitButton= document.querySelector("#submit6");
var nameInput = document.querySelector("#formGroupExampleInput");

let score = 0;
localStorage.getItem(score);


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
 
        if (--timer < 0) {
            timer = duration;
            window.alert("Time is up! Sorry, you lose.");
            localStorage.clear();
            window.location.reload();
        }
    }, 1000);
};


window.onload = function () {
    var secondscounter = 60 * 1.25,
        display = document.querySelector('#countdowntimer');
    startTimer(secondscounter, display);
    card1.hidden = false;
    card2.hidden = true;
    card3.hidden = true;
    card4.hidden = true;
    card5.hidden = true;
    card6.hidden = true;
    card7.hidden = true;
    card8.hidden = true;
};

clickon.addEventListener("click", function() {
    card1.hidden = true;
    card2.hidden = false;
});

clickon1c.addEventListener("click", function() {
    window.alert("Correct! You are a genius!")
    card2.hidden = true;
    card3.hidden = false;
    card4.hidden = true;
    card5.hidden = true;
    card6.hidden = true;
    card7.hidden = true;
    card8.hidden = true;
    score++;
  });

  clickon1a.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon1b.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon1d.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
});

clickon2b.addEventListener("click", function() {
    window.alert("Correct! You are a genius!")
    card2.hidden = true;
    card3.hidden = true;
    card4.hidden = false;
    card5.hidden = true;
    card6.hidden = true;
    card7.hidden = true;
    card8.hidden = true;
    score++;
  });

  clickon2a.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon2c.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon2d.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
});

clickon3d.addEventListener("click", function() {
    window.alert("Correct! You are a genius!")
    card2.hidden = true;
    card3.hidden = true;
    card4.hidden = true;
    card5.hidden = false;
    card6.hidden = true;
    card7.hidden = true;
    card8.hidden = true;
    score++;
  });

  clickon3a.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon3b.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon3c.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
});

clickon4c.addEventListener("click", function() {
    window.alert("Correct! You are a genius!")
    card2.hidden = true;
    card3.hidden = true;
    card4.hidden = true;
    card5.hidden = true;
    card6.hidden = false;
    card7.hidden = true;
    card8.hidden = true;
    score++;
  });

  clickon4a.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon4b.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon4d.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
});

clickon5d.addEventListener("click", function() {
    window.alert("Correct! You are a genius!")
    card2.hidden = true;
    card3.hidden = true;
    card4.hidden = true;
    card5.hidden = true;
    card6.hidden = true;
    card7.hidden = false;
    card8.hidden = true;
    score++;

  });

  clickon5a.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  clickon5b.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });
  clickon5c.addEventListener("click", function() {
    window.alert("Incorrect. Please try again!")
  });

  highScoreView.addEventListener("click", function() {
    card1.hidden = true;
    card2.hidden = true;
    card3.hidden = true;
    card4.hidden = true;
    card5.hidden = true;
    card6.hidden = true;
    card7.hidden = true;
    card8.hidden = false;
    window.localStorage.getItem('user');
    window.localStorage.getItem('score');
    clearInterval(timer);

  });

submit8a.addEventListener("click", function() {
  window.location.reload();
});

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var user = {
        nameInput: nameInput.value.trim(),
    };
  
    localStorage.setItem("user", JSON.stringify(user)); 
    localStorage.setItem("score", JSON.stringify(score));
    document.getElementById("formGroupExampleInput").value='Your Name Here';
    });

  
