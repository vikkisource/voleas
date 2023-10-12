	  
	  	$(document).ready(function(){
	  		$(".demomenu").click(function(){
	  			$(".vo-menus").toggle(2000);
	  		});
	  		});
	  	function popup() {
			document.getElementById('popup-section').style.display="block";
		}
		function popupclose() {
			document.getElementById('popup-section').style.display="none";
		}
		function popupvideoclose() {
			document.getElementById('popupvideo-section').style.display="none";
		}
  
  function popupvideo() {
			document.getElementById('popupvideo-section').style.display="block";
		}

// Set the date we're counting down to
var countDownDate = new Date("May 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  
  document.getElementById("days").innerHTML =days;
  document.getElementById("hour").innerHTML=hours;
  document.getElementById("minu").innerHTML=minutes;
  document.getElementById("second").innerHTML=seconds;  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
