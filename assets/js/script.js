	var streams = [];
	var fadeInterval = 1.6;
	var symbolSize = 15;

	function setup() {
	  var cnv = createCanvas(250, window.innerHeight); //window.innerHeight
	  // centerCanvas();
	  cnv.parent('bit-rain');
	  background(255, 255, 255, 0);

	  var x = 0;
	  for (var i = 0; i <= width / symbolSize; i++) {
	    var stream = new Stream();
	    stream.generateSymbols(x, random(-2000, 0));
	    streams.push(stream);
	    x += symbolSize;
	  }

	  textFont('Consolas');
	  textSize(symbolSize);
	}

	// function centerCanvas() {
	//   var x = (windowWidth - width) / 2;
	//   var y = (windowHeight - height) / 2;
	//   cnv.position(x, y);
	// }

	function draw() {
		clear();
	  background(255, 255, 255, 16.5);
	  streams.forEach(function(stream) {
	    stream.render();
	  });
	}

	function Symbol(x, y, speed, first, opacity) {
	  this.x = x;
	  this.y = y;
	  this.value;
	  this.speed = speed;
	  this.first = first;
	  this.opacity = opacity;
	  this.switchInterval = round(random(2, 25));
	  this.setToRandomSymbol = function() {
	    var charType = round(random(0, 5));
	    if (frameCount % this.switchInterval == 0) {
	      if (charType > 1) {
	        // set it to Katakana
	        this.value = //round(random(0,1));
	        String.fromCharCode(
	          0x30A0 + round(random(0, 96))
	        );
	      } else {
	        // set it to numeric
	        this.value = round(random(0,9)); //round(random(0,1));
	      }
	    }
	  }
	  this.rain = function() {
	    this.y = (this.y >= height) ? 0 : this.y += this.speed;
	  }
	}

	function Stream() {
	  this.symbols = [];
	  this.totalSymbols = round(random(5, 60));
	  this.speed = random(2, 10);
	  this.generateSymbols = function(x, y) {
	    var opacity = 255;
	    var first = round(random(0, 4)) == 1;
	    for (var i =0; i <= this.totalSymbols; i++) {
	      symbol = new Symbol(x, y, this.speed, first, opacity);
	      symbol.setToRandomSymbol();
	      this.symbols.push(symbol);
	      opacity -= (255 / this.totalSymbols) / fadeInterval;
	      y -= symbolSize;
	      first = false;
	    }
	  }
	  this.render = function() {
	    this.symbols.forEach(function(symbol) {
	      if (symbol.first) {
	        fill(140, 255, 170, symbol.opacity);
	      } else {
	        fill(0, 255, 70, symbol.opacity);
	      }
	      text(symbol.value, symbol.x, symbol.y);
	      symbol.rain();
	      symbol.setToRandomSymbol();
	    });
	  }
	}


 $(document).ready(function() {

 	// $("#post-desc").hide();
 	console.log("Elementary, my dear.");

 	$("#click").click(function(){
 		$(".intro").hide();
 		// $(".intro").fadeOut(1000);
 		$("#click").hide();
 		// $("#post-desc").show();
 		$("#cloud").hide();
 		$("#post-desc").fadeIn(3000);
 		$("#cloud img").attr("src","assets/images/cloud.png");
 		$("#cloud").fadeIn(1000);
 		$("#bit-rain").fadeIn(3000);
 		$("#cloud").css("top", 10);
 		$("canvas").css("background-image", "linear-gradient(#0A5471, #427264)");
 		$("body").css("height", 7000);
 		$("#card1").css("display", "flex");
 		$("#card2").css("display", "flex");
 		goMovie(60);
 	})

 	$(window).scroll(function() {
 		var $height = $(window).scrollTop();
 	  if($height > 378) {
 	  		$("#bit-rain").appendTo("#new-dest");
 			$("#bit-rain").css("position", "fixed");
 			$("#bit-rain").css("top", 50);
 			$("#bit-rain").css("left", "41.7%"); //works only for mac fullscreen
 			$("#bit-rain").css("transform", "translateX(-50%)");
 		} else {
 			$("#bit-rain").appendTo("#introduction");
 			// $("#introduction").css("display", "flexbox");
 			$("#bit-rain").css("transform", "translateX(-30%)");
 			$("#bit-rain").css("position", '');
 			$("#bit-rain").css("top", '');
 			$("#bit-rain").css("left", '');

 		}
 		// } else if ($height <= 375) {
 		// 	$("#bit-rain").css("position", "absolute");
 		// 	$("#bit-rain").css("top", "54.2%");
 		// }
 	});

 	function moveCloud() {

 	}





 	


// 	const distanceToNextImage = -450;
// 	let currentImageNumber = 0;

// 	$("#lightbox").hide()

// 	$(".item").click(function() {
// 		currentImageNumber = parseInt($(this).attr("id"), 10); 
// 		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
// 		$("#lightbox").show();
// 	});


// 	$("#right").click(function() {
// 		currentImageNumber += 1;
// 		currentImageNumber %= 9;
// 		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
// 	})

// 	$("#left").click(function() {
// 		currentImageNumber -= 1;
// 		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
// 	})


	
// 	// OTHER CODE
// 	// This closes the lightbox when you click on the overlay or the x.
// 	$("#overlay, #close").click(function() {
// 		$("#lightbox").hide();
// 	})
// });
//// console.log(typeof can_w);


	var canvas = document.getElementById('particle-system'),
	   can_w = parseInt(canvas.getAttribute('width')),
	   can_h = parseInt(canvas.getAttribute('height')),
	   ctx = canvas.getContext('2d');

	var ball = {
	      x: 0,
	      y: 0,
	      vx: 0,
	      vy: 0,
	      r: 0,
	      alpha: 1,
	      phase: 0
	   },
	   ball_color = {
	       r: 5,
	       g: 155,
	       b: 255
	   },
	   R = 3.5,
	   balls = [],
	   alpha_f = 0.03,
	   alpha_phase = 0,
	    
	// Line
	   link_line_width = 0.8,
	   dis_limit = 260,
	   add_mouse_point = true,
	   mouse_in = false,
	   mouse_ball = {
	      x: 0,
	      y: 0,
	      vx: 0,
	      vy: 0,
	      r: 0,
	      type: 'mouse'
	   };

	// Random speed
	function getRandomSpeed(pos){
	    var  min = -1,
	       max = 1;
	    switch(pos){
	        case 'top':
	            return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
	            break;
	        case 'right':
	            return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
	            break;
	        case 'bottom':
	            return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
	            break;
	        case 'left':
	            return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
	            break;
	        default:
	            return;
	            break;
	    }
	}
	function randomArrayItem(arr){
	    return arr[Math.floor(Math.random() * arr.length)];
	}
	function randomNumFrom(min, max){
	    return Math.random()*(max - min) + min;
	}
	console.log(randomNumFrom(0, 10));
	// Random Ball
	function getRandomBall(){
	    var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
	    switch(pos){
	        case 'top':
	            return {
	                x: randomSidePos(can_w),
	                y: -R,
	                vx: getRandomSpeed('top')[0],
	                vy: getRandomSpeed('top')[1],
	                r: R,
	                alpha: 1,
	                phase: randomNumFrom(0, 10)
	            }
	            break;
	        case 'right':
	            return {
	                x: can_w + R,
	                y: randomSidePos(can_h),
	                vx: getRandomSpeed('right')[0],
	                vy: getRandomSpeed('right')[1],
	                r: R,
	                alpha: 1,
	                phase: randomNumFrom(0, 10)
	            }
	            break;
	        case 'bottom':
	            return {
	                x: randomSidePos(can_w),
	                y: can_h + R,
	                vx: getRandomSpeed('bottom')[0],
	                vy: getRandomSpeed('bottom')[1],
	                r: R,
	                alpha: 1,
	                phase: randomNumFrom(0, 10)
	            }
	            break;
	        case 'left':
	            return {
	                x: -R,
	                y: randomSidePos(can_h),
	                vx: getRandomSpeed('left')[0],
	                vy: getRandomSpeed('left')[1],
	                r: R,
	                alpha: 1,
	                phase: randomNumFrom(0, 10)
	            }
	            break;
	    }
	}
	function randomSidePos(length){
	    return Math.ceil(Math.random() * length);
	}

	// Draw Ball
	function renderBalls(){
	    Array.prototype.forEach.call(balls, function(b){
	       if(!b.hasOwnProperty('type')){
	           ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
	           ctx.beginPath();
	           ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
	           ctx.closePath();
	           ctx.fill();
	       }
	    });
	}

	// Update balls
	function updateBalls(){
	    var new_balls = [];
	    Array.prototype.forEach.call(balls, function(b){
	        b.x += b.vx;
	        b.y += b.vy;
	        
	        if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
	           new_balls.push(b);
	        }
	        
	        // alpha change
	        b.phase += alpha_f;
	        b.alpha = Math.abs(Math.cos(b.phase));
	        // console.log(b.alpha);
	    });
	    
	    balls = new_balls.slice(0);
	}

	// Draw lines
	function renderLines(){
	    var fraction, alpha;
	    for (var i = 0; i < balls.length; i++) {
	        for (var j = i + 1; j < balls.length; j++) {
	           
	           fraction = getDisOf(balls[i], balls[j]) / dis_limit;
	            
	           if(fraction < 1){
	               alpha = (1 - fraction).toString();

	               ctx.strokeStyle = 'rgba(130,150,255,'+alpha+')';
	               ctx.lineWidth = link_line_width;
	               
	               ctx.beginPath();
	               ctx.moveTo(balls[i].x, balls[i].y);
	               ctx.lineTo(balls[j].x, balls[j].y);
	               ctx.stroke();
	               ctx.closePath();
	           }
	        }
	    }
	}

	// calculate distance between two points
	function getDisOf(b1, b2){
	    var  delta_x = Math.abs(b1.x - b2.x),
	       delta_y = Math.abs(b1.y - b2.y);
	    
	    return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
	}

	// add balls if there a little balls
	function addBallIfy(){
	    if(balls.length < 20){
	        balls.push(getRandomBall());
	    }
	}

	// Render
	function render(){
	    ctx.clearRect(0, 0, can_w, can_h);
	    
	    renderBalls();
	    
	    renderLines();
	    
	    updateBalls();
	    
	    addBallIfy();
	    
	    window.requestAnimationFrame(render);
	}

	// Init Balls
	function initBalls(num){
	    for(var i = 1; i <= num; i++){
	        balls.push({
	            x: randomSidePos(can_w),
	            y: randomSidePos(can_h),
	            vx: getRandomSpeed('top')[0],
	            vy: getRandomSpeed('top')[1],
	            r: R,
	            alpha: 1,
	            phase: randomNumFrom(0, 10)
	        });
	    }
	}
	// Init Canvas
	function initCanvas(){
	    canvas.setAttribute('width', window.innerWidth);
	    canvas.setAttribute('height', window.innerHeight);
	    
	    can_w = parseInt(canvas.getAttribute('width'));
	    can_h = parseInt(canvas.getAttribute('height'));
	}
	window.addEventListener('resize', function(e){
	    console.log('Window Resize...');
	    initCanvas();
	});

	function goMovie(balls){
	    initCanvas();
	    initBalls(balls);
	    window.requestAnimationFrame(render);
	}
	goMovie(40);

	// Mouse effect
	canvas.addEventListener('mouseenter', function(){
	    console.log('mouseenter');
	    mouse_in = true;
	    balls.push(mouse_ball);
	});
	canvas.addEventListener('mouseleave', function(){
	    console.log('mouseleave');
	    mouse_in = false;
	    var new_balls = [];
	    Array.prototype.forEach.call(balls, function(b){
	        if(!b.hasOwnProperty('type')){
	            new_balls.push(b);
	        }
	    });
	    balls = new_balls.slice(0);
	});
	canvas.addEventListener('mousemove', function(e){
	    var e = e || window.event;
	    console.log(e);
	    mouse_ball.x = e.screenX; //e.pageX;
	    mouse_ball.y = e.screenY - 115;//e.pageY;
	});

});















