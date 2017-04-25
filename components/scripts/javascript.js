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
				// offset: 394,
				offset: 214,
        // triggerElement: '#target'
        // duration: 500
    })
    .setPin('#nav')
    // .addIndicators()
    .addTo(controller);

});
