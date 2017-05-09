(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {
/* scroll function */
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// $('ul.mr-auto li').ul.li.a.addClass('nav-item');
// $(ul.mr-auto).ul.li.a.addClass('nav-link');

//set up ScrollMagic
// var controller = new ScrollMagic.Controller({
// 	globalSceneOptions: {
// 		triggerHook: "onLeave"
// 	}
// });
//
// //pin the navigation
// var pin = new ScrollScene({
// 	triggerElement: '#nav',
// }).setPin('#nav').addTo(controller);

// PIN THE NAV WITH SCROLL MAGIC
var controller = new ScrollMagic.Controller();
var containerScene = new ScrollMagic.Scene({
				// offset: 154,
				offset: 214,
        // triggerElement: '#target'
        // duration: 500
    })
    .setPin('#nav')
    // .addIndicators()
    .addTo(controller);


    // Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
 });

 // Add slideUp animation to Bootstrap dropdown when collapsing.
 $('.dropdown').on('hide.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
 });

});

$(".carousel-item").ready(function(){
    $("img").addClass("animated fadeIn");
    $("h3").addClass("animated fadeInDown");
    $(".carousel-caption > p").addClass("animated fadeInLeft");
    $(".carousel-caption > h6").addClass("animated fadeInUp");
});

},{}]},{},[1])