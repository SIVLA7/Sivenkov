$(document).ready(function () {
    //mobile menu open/close
    (function ($) {
        var menuBtnOpen = $(".js-burger"),
            parent = $(".header");
    
        menuBtnOpen.click(function () {
            parent.toggleClass("open");
            $("body").toggleClass("over");
        });
    })(jQuery);
    
    //burger btn
    $(".menu").on('click',function(){
        $(this).find(".hambergerIcon").toggleClass("open1");
    });
    //end mobile menu open/close
});

