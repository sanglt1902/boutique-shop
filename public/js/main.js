!function(){"use strict";var mobileMenuOutsideClick=function(){$(document).click(function(e){var container=$("#fh5co-offcanvas, .js-fh5co-nav-toggle");container.is(e.target)||0!==container.has(e.target).length||$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-fh5co-nav-toggle").removeClass("active"))})},offcanvasMenu=function(){$("#page").prepend('<div id="fh5co-offcanvas" />'),$("#page").prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');var clone1=$(".menu-1 > ul").clone();$("#fh5co-offcanvas").append(clone1);var clone2=$(".menu-2 > ul").clone();$("#fh5co-offcanvas").append(clone2),$("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown"),$("#fh5co-offcanvas").find("li").removeClass("has-dropdown"),$(".offcanvas-has-dropdown").mouseenter(function(){$(this).addClass("active").find("ul").slideDown(500,"easeOutExpo")}).mouseleave(function(){$(this).removeClass("active").find("ul").slideUp(500,"easeOutExpo")}),$(window).resize(function(){$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-fh5co-nav-toggle").removeClass("active"))})},burgerMenu=function(){$("body").on("click",".js-fh5co-nav-toggle",function(event){var $this=$(this);$("body").hasClass("overflow offcanvas")?$("body").removeClass("overflow offcanvas"):$("body").addClass("overflow offcanvas"),$this.toggleClass("active"),event.preventDefault()})},contentWayPoint=function(){var i=0;$(".animate-box").waypoint(function(direction){"down"!==direction||$(this.element).hasClass("animated-fast")||(i++,$(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(k){var el=$(this);setTimeout(function(){var effect=el.data("animate-effect");"fadeIn"===effect?el.addClass("fadeIn animated-fast"):"fadeInLeft"===effect?el.addClass("fadeInLeft animated-fast"):"fadeInRight"===effect?el.addClass("fadeInRight animated-fast"):el.addClass("fadeInUp animated-fast"),el.removeClass("item-animate")},100*k,"easeInOutExpo")})},100))},{offset:"85%"})},dropdown=function(){$(".has-dropdown").mouseenter(function(){$(this).find(".dropdown").css("display","block").addClass("animated-fast fadeInUpMenu")}).mouseleave(function(){$(this).find(".dropdown").css("display","none").removeClass("animated-fast fadeInUpMenu")})},goToTop=function(){$(".js-gotop").on("click",function(event){return event.preventDefault(),$("html, body").animate({scrollTop:$("html").offset().top},500,"easeInOutExpo"),!1}),$(window).scroll(function(){$(window).scrollTop()>200?$(".js-top").addClass("active"):$(".js-top").removeClass("active")})},loaderPage=function(){$(".fh5co-loader").fadeOut("slow")},counterWayPoint=function(){$("#fh5co-counter").length>0&&$("#fh5co-counter").waypoint(function(direction){"down"!==direction||$(this.element).hasClass("animated")||(setTimeout(counter,400),$(this.element).addClass("animated"))},{offset:"90%"})},sliderMain=function(){$("#fh5co-hero .flexslider").flexslider({animation:"fade",slideshowSpeed:5e3,directionNav:!0,start:function(){setTimeout(function(){$(".slider-text").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")},500)},before:function(){setTimeout(function(){$(".slider-text").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")},500)}}),$("#fh5co-hero .flexslider .slides > li"),$(window).resize(function(){$("#fh5co-hero .flexslider .slides > li")})},contactForm=function(){$("#contactForm").length>0&&$("#contactForm").validate({rules:{fname:"required",lname:"required",email:{required:!0,email:!0},message:{required:!0,minlength:5}},messages:{fname:"Please enter your firstname",lname:"Please enter your lastname",email:"Please enter a valid email address",message:"Please enter a message"},submitHandler:function(form){var $submit=$(".submitting");$.ajax({type:"POST",url:"php/sendEmail.php",data:$(form).serialize(),beforeSend:function(){$submit.css("display","block").text("Submitting...")},success:function(msg){"OK"==msg?($("#form-message-warning").hide(),setTimeout(function(){$("#contactForm").fadeOut()},1e3),setTimeout(function(){$("#form-message-success").fadeIn()},1400)):($("#form-message-warning").html(msg),$("#form-message-warning").fadeIn(),$submit.css("display","none"))},error:function(){$("#form-message-warning").html("Something went wrong. Please try again."),$("#form-message-warning").fadeIn(),$submit.css("display","none")}})}})};$(function(){mobileMenuOutsideClick(),offcanvasMenu(),burgerMenu(),contentWayPoint(),sliderMain(),dropdown(),goToTop(),loaderPage(),counterWayPoint(),contactForm()})}();