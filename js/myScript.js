
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

function pathExp() {
	window.location.href = "/experience.html";
}

function pathSkill() {
	window.location.href = "/skill.html";
}

function pathBlog() {
	window.location.href = "/myblog.html";
}

function pathProject() {
	window.location.href = "/project.html";
}

function clickCPlus() {
	var x = document.getElementById("cplus").innerHTML;
	document.getElementById("demo").innerHTML = x;
}

function clickCSharp() {
	var x = document.getElementById("csharp").innerHTML;
	document.getElementById("demo").innerHTML = x;
}

function clickPython() {
	var x = document.getElementById("python").innerHTML;
	document.getElementById("demo").innerHTML = x;
}
function clickBash() {
	var x = document.getElementById("bash").innerHTML;
	document.getElementById("demo").innerHTML = x;
}
function clickTest() {
	var x = document.getElementById("testing").innerHTML;
	document.getElementById("demo").innerHTML = x;
}
function clickSoft() {
	var x = document.getElementById("soft").innerHTML;
	document.getElementById("demo").innerHTML = x;
}
function clickEnglish() {
	var x = document.getElementById("english").innerHTML;
	document.getElementById("demo").innerHTML = x;
}

// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
 
    document.onkeydown = function (e) {
 
        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }
 
        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }