/* Text counter 
* https://codepen.io/dmcreis/pen/VLLYPo
* Dosis v1.2
* Design_mylife
*/
$(function () {
    "use strict";
var a = 0;
$(window).scroll(function () {

    var oTop = $('.fact-col').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
        a = 1;
    }
});
});