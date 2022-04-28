// Scroll to SKill
// $(window).scroll(function() {
// 	var hT = $('#skill').offset().top,
// 		hH = $('#skill').outerHeight(),
// 		wH = $(window).height(),
// 		wS = $(this).scrollTop();
// 	var flag;
// 	// if (wS > (hT+hH-wH)){
// 	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
// 		flag = true;
// 	}
// 	if (flag){
// 		document.getElementById('management-bar').style.animation = "management-fill 2.5s forwards";
// 		document.getElementById('estimation-bar').style.animation = "estimation-fill 2.5s forwards";
// 		document.getElementById('research-bar').style.animation = "research-fill 2.5s forwards";
// 	}

//  });

$(window).scroll(function(){
	var myElement = document.getElementById('skill');
	var bounding = myElement.getBoundingClientRect();
	var myElementHeight = myElement.offsetHeight;
	var myElementWidth = myElement.offsetWidth;

	if (bounding.top >= -myElementHeight 
		&& bounding.left >= -myElementWidth
		&& bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
		&& bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
			document.getElementById('management-bar').style.animation = "management-fill 2.5s forwards";
			document.getElementById('estimation-bar').style.animation = "estimation-fill 2.5s forwards";
			document.getElementById('research-bar').style.animation = "research-fill 2.5s forwards";
	} 
	else {

		document.getElementById('management-bar').style.animation = "none";
		document.getElementById('estimation-bar').style.animation = "none";
		document.getElementById('research-bar').style.animation = "none";
	}
});


(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	particlesJS("home", {
		"particles": {
			"number": {
				"value": 140,
				"density": {
					"enable": true,
					"value_area": 700
				}
			},
			"color": {
				"value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
		return false;
	});

	/*--/ Star ScrollTop /--*/
	// $('.scrolltop-mf').on("click", function () {
	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	}, 1000);
	// });

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 20)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 70,
			loop: true,
			backDelay: 1100,
			backSpeed: 20
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

	
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


// Skill tag
var skills = [
	{"header" : "Language and OS",
		"captions" : [
		"Window",
		"Python",
		"C/C++",
		"Bash Script",
		"Linux"
		],
		"values" : [
		0.75,
		0.6,
		0.7,
		0.6,
		0.5
		]
	},
  ];
  
  var pentagonIndex = 0;
  var valueIndex = 0;
  var width = 0;
  var height = 0;
  var radOffset = Math.PI/2;
  var sides = 5; // Number of sides in the polygon
  var theta = 2 * Math.PI/sides; // radians per section
  
  function getXY(i, radius) {
	return {"x": Math.cos(radOffset +theta * i) * radius*width + width/2,
	  "y": Math.sin(radOffset +theta * i) * radius*height + height/2};
  }
  
  var hue = [];
  var hueOffset = 25;
  
  for (var s in skills) {
	$(".skill-set").append('<div class="pentagon"><canvas class="pentCanvas"/></div>');
	hue[s] = (hueOffset + s * 255/skills.length) % 255;
  }
  
  $(".pentagon").each(function(index){
	width = $(this).width();
	height = $(this).height();
	var ctx = $(this).find('canvas')[0].getContext('2d');
	ctx.canvas.width = width;
	ctx.canvas.height = height;
	ctx.font="20px Monospace";
	ctx.textAlign="center";
	
	/*** LABEL ***/
	color = "hsl("+hue[pentagonIndex]+", 100%, 50%)";
	ctx.fillStyle = "hsl(90, 70%, 45%)";
	ctx.fillText(skills[pentagonIndex].header, width/2, 15);
  
	ctx.font="15px Monospace";   
  
	/*** PENTAGON BACKGROUND ***/
	for (var i = 0; i < sides; i++) {
	  // For each side, draw two segments: the side, and the radius
	  ctx.beginPath();
	  xy = getXY(i, 0.3);
	  ctx.fillStyle = "hsl(165, 70%, 35%)";
	  ctx.strokeStyle = "hsl(165, 70%, 25%)";
	  ctx.moveTo(0.5*width, 0.5*height); //center
	  ctx.lineTo(xy.x, xy.y);
	  xy = getXY(i+1, 0.3);
	  ctx.lineTo(xy.x, xy.y);
	  xy = getXY(i, 0.37);
	  console.log();
	  ctx.fillText(skills[ pentagonIndex].captions[valueIndex],xy.x, xy.y +5);
	  valueIndex++;
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	}
	
	valueIndex = 0;
	ctx.beginPath();
	ctx.fillStyle = "rgba(245, 71, 71, 0.6)";
	ctx.lineWidth = 5;
	var value = skills[pentagonIndex].values[valueIndex];
	xy = getXY(i, value * 0.3);
	ctx.moveTo(xy.x,xy.y);
	/*** SKILL GRAPH ***/
	for (var i = 0; i < sides; i++) {
	  xy = getXY(i, value * 0.3);
	  ctx.lineTo(xy.x,xy.y);
	  valueIndex++;
	  value = skills[pentagonIndex].values[valueIndex];
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
	valueIndex = 0;  
	pentagonIndex++;
  });
  
  
