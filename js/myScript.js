
// Automatic Slideshow - change image every 3 seconds
//var myIndex = 0;
//carousel();
//
//function carousel() {
//  var i;
//  var x = document.getElementsByClassName("mySlides");
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
//  }
//  myIndex++;
//  if (myIndex > x.length) {myIndex = 1}
//  x[myIndex-1].style.display = "block";
//  setTimeout(carousel, 2000);
//}
const words = ["Hi, I am Tran Anh Kiet.", "Welcome to my site.", "Nice to meet you!"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 70);
	};
	loopDeleting();
};

typingEffect();

// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("userImage");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}

function runclick() {
	window.location.href = "http://google.com.vn";
}

function pathSkill() {
	window.location.href = "/skill.html";
}