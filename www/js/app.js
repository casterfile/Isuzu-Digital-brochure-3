var isReferencesShow = false;

var Model = {

	score : 0,
	touch : false,
	tempArr : [],
	summaryBoolean : true,
	prevP : null,
	nextP : null,

	addImage : function(path, id, x, y, dur, props) {
		var img = document.createElement('img');
		$(img).hide();
		img.id = id;
		img.src = path;
		setTimeout(function(evt){
			$(img).show();
		}, 100);
		$(img).load(function(evt){
			$(img).css({"left":(x - (this.width / 2)) + "px", "top":(y - (this.height / 2)) + "px"});
			if(dur) {
				Model.addTweenFrom(img, dur, props);
			}
		});
		$("#container").append(img);
	},

	addText : function(txt, id, clss, x, y, dur, props) {
		var p = document.createElement('p');
		$(p).text(txt);
		p.id = id;
		$(p).hide();
		setTimeout(function(){
			$(p).show();
		}, 100);
		$(p).addClass(clss);
		$(p).css({"left":(x - 250) + "px", "top":y + "px"});
		if(dur) {
			Model.addTweenFrom(p, dur, props);
		}
		$("#container").append(p);
	},

	addDiv : function(id, clss, x, y, dur, props) {
		var div = document.createElement('div');
		div.id = id;
		$(div).addClass(clss);
		$(div).hide();
		setTimeout(function(){
			$(div).show();
		}, 100);
		$(div).css({"left":(x - 10) + "px", "top":(y - 10) + "px"});
		if(dur) {
			Model.addTweenFrom(div, dur, props);
		}
		$("#container").append(div);
	},

	addButton : function(id, x, y, w, h) {
		var btn = document.createElement('div');
		btn.id = id;
		$(btn).css({"left":x+"px", "top":y+"px", "width":w+"px", "height":h+"px"});
		$("#container").append(btn);
	},

	addTweenFrom : function(obj, dur, props) {
		TweenMax.from(obj, dur, props);
	},

	addTweenTo: function(obj, dur, props) {
		TweenMax.to(obj, dur, props);
	},

	insertLineTransition : function(path, x, y, w, h, dur, trans){
		var div = document.createElement('div');
		div.style.visibility = "hidden";
		setTimeout(function(){
			div.style.visibility = "visible";
		}, 100);
		div.style.overflow = "hidden";
		div.style.left = x + "px";
		div.style.top = y + "px";
		div.style.width = w + "px";
		div.style.height = h + "px";
		if((dur) && (trans)){
			Model.addTweenFrom(div, dur, trans);
		}
		var img = document.createElement("img");
		img.src = path;
		$(div).append(img);
		$("#container").append(div);
	}

}

var View = {

	page1_0 : function() {
		Controller.removePage();
		Model.addImage("images/Tracks/Scene1/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Tracks/Scene1/button1.png", "NextPage1", 140, 190,.5, {delay:1, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Tracks/Scene1/button2.png", "NextPage2", 822, 570,.5, {delay:1, alpha:0, ease:Power2.easeIn});
		Controller.page1_0Handler();
	},


	// Tracks Functionality
	page1_1 : function() {
		Controller.removePage();
		Model.addImage("images/Tracks/Scene2/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Tracks/Scene2/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Tracks/Scene2/menu.png", "NextPageMenu", 900, 40, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Tracks/Scene2/button2.png", "", 575, 405, .5, {delay:1, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Model.addImage("images/Tracks/Scene2/button1.png", "NSeries", 437, 354, .5, {delay:1, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Controller.page1_1Handler();
		Controller.homapage();
		Controller.tracksMenu();
	},

	page1_2 : function() {
		Controller.removePage();
		Model.addImage("images/Tracks/Scene3/bg.png", "", 512, 384, .5, {scaleX:1, scaleY:1});
		Model.addImage("images/Tracks/Scene3/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Tracks/Scene3/menu.png", "", 960, 50, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Tracks/Scene3/label.png", "NSeries", 240, 260, .5, {delay:1, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Controller.tracks();
		Controller.page1_1Handler();
	},

	page1_3 : function() {
		Controller.removePage();
		Model.addImage("images/Tracks/Scene4/bg.png", "", 512, 384);
		Model.addImage("images/Tracks/Scene4/track.png", "img-1", 100, 384);
		Model.addImage("images/Tracks/Scene4/track.png", "img-2", 912, 384);
		Model.addImage("images/Tracks/Scene4/track.png", "img-3", 512, 384);
		Model.addImage("images/Tracks/Scene4/screen.png", "", 512, 384);
		Model.addImage("images/Tracks/Scene4/logo.png", "homepage", 100, 40);
		Model.addImage("images/Tracks/Scene4/menu.png", "NextPageMenu", 960, 50);

		var sliderArr = [$("#img-1"), $("#img-2"), $("#img-3")];
		var sliderIndex = 1;
		var zIndex = 100;
		var slide1 = 0;
		var slide2 = 0;
		var imageWidth = 716;

		TweenMax.to(sliderArr[1], .1, {scaleX:1, scaleY:1, "left":512 - (imageWidth/2) + "px", alpha:1, ease:Power2.easeIn});
		TweenMax.to(sliderArr[1], 0, {delay:.1, "z-index":zIndex});
		TweenMax.to(sliderArr[0], .1, {scaleX:.8, "left":0 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
		TweenMax.to(sliderArr[2], .1, {scaleX:.8, "left":1024 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});

		function sliderLeftHandler(evt) {
			sliderIndex--;
			if(sliderIndex == -1) {
				sliderIndex = 2;
			}
			zIndex++;
			if(sliderIndex == 0) {
				slide1 = 2;
				slide2 = 1;
			}else if(sliderIndex == 1) {
				slide1 = 0;
				slide2 = 2;
			}else if(sliderIndex == 2) {
				slide1 = 1;
				slide2 = 0;
			}
			TweenMax.to(sliderArr[sliderIndex], .5, {scaleX:1, scaleY:1, "left":512 - (imageWidth/2) + "px", alpha:1, ease:Power2.easeIn});
			TweenMax.to(sliderArr[sliderIndex], 0, {delay:.3, "z-index":zIndex});
			TweenMax.to(sliderArr[slide1], .5, {scaleX:.8, "left":0 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
			TweenMax.to(sliderArr[slide2], .5, {scaleX:.8, "left":1024 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
		}

		function sliderRightHandler(evt) {
			sliderIndex++;
			if(sliderIndex == 3) {
				sliderIndex = 0;
			}
			zIndex++;
			if(sliderIndex == 0) {
				slide1 = 2;
				slide2 = 1;
			}else if(sliderIndex == 1) {
				slide1 = 0;
				slide2 = 2;
			}else if(sliderIndex == 2) {
				slide1 = 1;
				slide2 = 0;
			}
			TweenMax.to(sliderArr[sliderIndex], .5, {scaleX:1, scaleY:1, "left":512 - (imageWidth/2) + "px", alpha:1, ease:Power2.easeIn});
			TweenMax.to(sliderArr[sliderIndex], 0, {delay:.3, "z-index":zIndex});
			TweenMax.to(sliderArr[slide1], .5, {scaleX:.8, "left":0 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
			TweenMax.to(sliderArr[slide2], .5, {scaleX:.8, "left":1024 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
		}
		Controller.tracks();
		Controller.tracksMenu();

		Model.prevP = sliderLeftHandler;
		Model.nextP = sliderRightHandler;

	},

	// Cars Functionality
	page2_1 : function() {
		Controller.removePage();
		Model.addImage("images/Cars/Scene1/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Cars/Scene1/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Cars/Scene1/menu.png", "", 900, 40, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene1/menucenter.png", "", 512, 384, .5, {delay:1, alpha:0, scaleX:0, scaleY:0,ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene1/button1.png", "Mu-x", 685, 350, .5, {delay:1, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Controller.page2_1Handler();
		Controller.homapage();
	},

	page2_2 : function() {
		Controller.removePage();
		Model.addImage("images/Cars/Scene2/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Cars/Scene2/car1.png", "img-1", 0, 384);
		Model.addImage("images/Cars/Scene2/car1.png", "img-2", 512, 384);
		Model.addImage("images/Cars/Scene2/car3.png", "img-3", 1024, 384);
		Model.addImage("images/Cars/Scene2/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Cars/Scene2/menu.png", "PriceList", 960, 50, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene2/lable1.png", "info", 750, 690, .5, {delay:1, alpha:0,ease:Power2.easeOut});



		var sliderArr = [$("#img-1"), $("#img-2"), $("#img-3")];
		var sliderIndex = 1;
		var zIndex = 100;
		var slide1 = 0;
		var slide2 = 0;
		var imageWidth = 1024;

		TweenMax.to(sliderArr[1], .1, {scaleX:1, scaleY:1, "left":512 - (imageWidth/2) + "px", alpha:1, ease:Power2.easeIn});
		TweenMax.to(sliderArr[1], 0, {delay:.1, "z-index":zIndex});
		TweenMax.to(sliderArr[0], .1, {scaleX:.8, "left":0 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
		TweenMax.to(sliderArr[2], .1, {scaleX:.8, "left":1024 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});

		function sliderLeftHandler(evt) {
			sliderIndex--;
			if(sliderIndex == -1) {
				sliderIndex = 2;
			}
			zIndex++;
			if(sliderIndex == 0) {
				slide1 = 2;
				slide2 = 1;
			}else if(sliderIndex == 1) {
				slide1 = 0;
				slide2 = 2;
			}else if(sliderIndex == 2) {
				slide1 = 1;
				slide2 = 0;
			}
			TweenMax.to(sliderArr[sliderIndex], .5, {scaleX:1, scaleY:1, "left":512 - (imageWidth/2) + "px", alpha:1, ease:Power2.easeIn});
			TweenMax.to(sliderArr[sliderIndex], 0, {delay:.3, "z-index":zIndex});
			TweenMax.to(sliderArr[slide1], .5, {scaleX:.8, "left":0 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
			TweenMax.to(sliderArr[slide2], .5, {scaleX:.8, "left":1024 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
		}

		function sliderRightHandler(evt) {
			sliderIndex++;
			if(sliderIndex == 3) {
				sliderIndex = 0;
			}
			zIndex++;
			if(sliderIndex == 0) {
				slide1 = 2;
				slide2 = 1;
			}else if(sliderIndex == 1) {
				slide1 = 0;
				slide2 = 2;
			}else if(sliderIndex == 2) {
				slide1 = 1;
				slide2 = 0;
			}
			TweenMax.to(sliderArr[sliderIndex], .5, {scaleX:1, scaleY:1, "left":512 - (imageWidth/2) + "px", alpha:1, ease:Power2.easeIn});
			TweenMax.to(sliderArr[sliderIndex], 0, {delay:.3, "z-index":zIndex});
			TweenMax.to(sliderArr[slide1], .5, {scaleX:.8, "left":0 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
			TweenMax.to(sliderArr[slide2], .5, {scaleX:.8, "left":1024 - (imageWidth/2) + "px", scaleY:.8, alpha:.5, ease:Power2.easeIn});
		}
		

		Model.prevP = sliderLeftHandler;
		Model.nextP = sliderRightHandler;

		Controller.page2_2Handler();
		Controller.cars();
	},

	page2_3 : function() {
		Controller.removePage();
		Model.addImage("images/Cars/Scene3/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Cars/Scene3/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Cars/Scene3/menu.png", "", 960, 50, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene3/label.png", "Mu-x", 490, 360, .5);
		Controller.page2_3Handler();
		Controller.cars();
	},

	page2_4 : function() {
		Controller.removePage();
		Model.addImage("images/Cars/Scene4/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Cars/Scene4/car.png", "", 512, 384, .5, {delay:1,scaleX:0, scaleY:0,ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene4/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Cars/Scene4/menu.png", "PriceList", 960, 50, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene4/label.png", "info", 850, 660, .5, {scaleX:1.5, scaleY:1.5});
		Controller.page2_4Handler();
		Controller.cars();
	},

	page2_5 : function() {
		Controller.removePage();
		Model.addImage("images/Cars/Scene5/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Cars/Scene5/car.png", "", 512, 310, .5, {delay:1,scaleX:0, scaleY:0,ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene5/logo.png", "homepage", 100, 40, .5, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Cars/Scene5/menu.png", "PriceList", 960, 50, .5, {delay:1.5, ease:Power2.easeOut});
		Model.addImage("images/Cars/Scene5/label.png", "infoback", 50, 660, .5, {scaleX:1.5, scaleY:1.5});
		Controller.page2_5Handler();
		Controller.cars();
	}


}

var Controller = {

	
	

	initialize : function() {
		document.addEventListener('touchmove', function(e){ e.preventDefault(); });
		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		if (isiPad) {
			Model.touch = true;
		}
		View.page1_0();
		Controller.gestureHandler();

		 
	},

	removePage : function() {
		while(parent.document.getElementById("container").childNodes.length > 0) {
			parent.document.getElementById("container").removeChild(parent.document.getElementById("container").childNodes[0]);
		}
	},

	homapage : function() {
		if(Model.touch) {
			$("#homepage").bind("touchend", function(evt){
				View.page1_0();
			});
		}else{
			$("#homepage").bind("mouseup", function(evt){
				View.page1_0();
			});
		}
	},

	tracks : function() {
		if(Model.touch) {
			$("#homepage").bind("touchend", function(evt){
				View.page1_1();
			});
			$("#NextPageMenu").bind("touchend", function(evt){
				View.page1_2();
			});
		}else{
			$("#homepage").bind("mouseup", function(evt){
				View.page1_1();
			});
			$("#NextPageMenu").bind("mouseup", function(evt){
				View.page1_2();
			});
		}
	},

	cars : function() {
		if(Model.touch) {
			$("#homepage").bind("touchend", function(evt){
				View.page2_1();
			});
			$("#NextPageMenu").bind("touchend", function(evt){
				View.page2_3();
			});
		}else{
			$("#homepage").bind("mouseup", function(evt){
				View.page2_1();
			});
			$("#NextPageMenu").bind("mouseup", function(evt){
				View.page2_3();
			});
		}
	},

	tracksMenu : function() {
		if(Model.touch) {
			$("#NextPageMenu").bind("touchend", function(evt){
				View.page1_2();
			});
		}else{
			$("#NextPageMenu").bind("mouseup", function(evt){
				View.page1_2();
			});
		}
	},

	page1_0Handler : function() {
		if(Model.touch) {
			$("#NextPage1").bind("touchend", function(evt){
				View.page2_1();
			});

			$("#NextPage2").bind("touchend", function(evt){
				View.page1_1();
			});
		}else{
			$("#NextPage1").bind("mouseup", function(evt){
				View.page2_1();
			});
			$("#NextPage2").bind("mouseup", function(evt){
				View.page1_1();
			});
		}
	},

	page1_1Handler : function() {
		if(Model.touch) {
			$("#NSeries").bind("touchend", function(evt){
				View.page1_3();
			});
		}else{
			$("#NSeries").bind("mouseup", function(evt){
				View.page1_3();
			});
		}
	},

	page2_1Handler : function() {
		if(Model.touch) {
			$("#Mu-x").bind("touchend", function(evt){
				View.page2_2();
			});
		}else{
			$("#Mu-x").bind("mouseup", function(evt){
				View.page2_2();
			});
		}
	},

	page2_2Handler : function() {
		if(Model.touch) {
			$("#PriceList").bind("touchend", function(evt){
				View.page2_3();
			});
			$("#info").bind("touchend", function(evt){
				View.page2_4();
			});
		}else{
			$("#PriceList").bind("mouseup", function(evt){
				View.page2_3();
			});
			$("#info").bind("mouseup", function(evt){
				View.page2_4();
			});
		}
	},

	page2_3Handler : function() {
		if(Model.touch) {
			$("#Mu-x").bind("touchend", function(evt){
				View.page2_2();
			});
		}else{
			$("#Mu-x").bind("mouseup", function(evt){
				View.page2_2();
			});
		}
	},

	page2_4Handler : function() {
		if(Model.touch) {
			$("#info").bind("touchend", function(evt){
				View.page2_5();
			});
			$("#PriceList").bind("touchend", function(evt){
				View.page2_3();
			});
		}else{
			$("#info").bind("mouseup", function(evt){
				View.page2_5();
			});
			$("#PriceList").bind("mouseup", function(evt){
				View.page2_3();
			});
		}
	},

	page2_5Handler : function() {
		if(Model.touch) {
			$("#infoback").bind("touchend", function(evt){
				View.page2_4();
			});
			$("#PriceList").bind("touchend", function(evt){
				View.page2_3();
			});
		}else{
			$("#infoback").bind("mouseup", function(evt){
				View.page2_4();
			});
			$("#PriceList").bind("mouseup", function(evt){
				View.page2_3();
			});
		}
	},
	


	lastPageHandler : function() {
		var eventStr = "mouseup";
		if(Model.touch) {
			eventStr = "touchend";
		}
		$("#gsk_btn").bind(eventStr, function(){
			View.page5();
			document.getElementById("click").play();
		});
		$("#syn_btn1").bind(eventStr, function(){
			View.page6();
			document.getElementById("click").play();
		});
		$("#syn_btn2").bind(eventStr, function(){
			View.page7();
			document.getElementById("click").play();
		});
		$("#syn_btn3").bind(eventStr, function(){
			View.page1();
			document.getElementById("click").play();
		});
	},



	gestureHandler : function() {
		$(function() {      
	      $("#container").swipe( {
	        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	          if(direction == "left") {
	   //        	sliderLeftHandler();
	          	if(Model.nextP && (typeof Model.nextP == "function")){
					Model.nextP();
				}
	          }else if(direction == "right"  && Model.prevP != null) {
	   //        	sliderRightHandler();
	          	if(Model.prevP && (typeof Model.prevP == "function")){
					Model.prevP(); 
				}
	          }
	        },
	        threshold:0,
	        fingers:'all'
	      });
	    });
	}

}






