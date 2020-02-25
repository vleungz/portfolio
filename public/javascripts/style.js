$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.9, // show, when scrolled 10% into view
    offset: 50, // move trigger to center of element
    reverse:false //only do once
})
    .setClassToggle("#reveal1", "visible") // add class to reveal
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.9,
    offset: 50, // move trigger to center of element
    reverse: false // only do once
})
    .setClassToggle("#reveal2", "visible") // add class toggle
    .addTo(controller);

var scene22 = new ScrollMagic.Scene({
    triggerElement: "#trigger2-2",
    triggerHook: 0.9,
    offset: 50, // move trigger to center of element
    reverse: false // only do once
})
    .setClassToggle("#reveal2-2", "visible") // add class toggle
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.9,
    offset: 50, // move trigger to center of element
    reverse: false // only do once
})
    .setClassToggle("#reveal3", "visible") // add class toggle
    .addTo(controller);