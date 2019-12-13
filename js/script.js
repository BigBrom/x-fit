
$(document).ready(function(){
    
    var burger = $('.burger'),
        top_nav = $('.top_nav'),
        play = $('.video_play'),
        controller = new ScrollMagic.Controller();

    burger.click(function() {
        burger.toggleClass('open')
        top_nav.toggleClass('open')
    })

    if(play) {
        play.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    $('.animate').each(function(){
        var tween = TweenMax.from($(this), 1, {autoAlpha: 0, ease:Power3.easeOut})
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .8,
            reverse: 0
        })
        .setTween(tween)
        .addTo(controller)
    })



})