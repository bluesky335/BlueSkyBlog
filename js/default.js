var menuisopen = false; //菜单的打开状态
var blurTimer = null;
var blur = 80;
var targetB = 0;
var winWidth = 0;

$(document).ready(function() {
    $("body").click(function(event) {
        if(menuisopen) {
            openMenu(); //如果菜单没关闭，则关闭菜单
        }
    });
    $("#menu-button").click(function(event) {
        openMenu();
        return false;
    });
    $(window).resize(function() {

        winWidth = $(window).width();
        setBgDiv();
        if(winWidth >= 768) {
            if(menuisopen) {
                openMenu(); //如果菜单没关闭，则关闭菜单
            }
            $(".menuitem").css('opacity', '1').attr('class', 'menuitem-l');

            // $(".menuitem").css({'background-color':'rgb(71, 190, 249)','color':'white','text-align':'center'});
        }else {
            $(".menuitem-l").css('opacity', '0').attr('class', 'menuitem');
        }
    });
    $(window).resize();
});

function setBgDiv(){
    var coverHeight = winWidth * (9.0 / 16.0);
    if(coverHeight > 500) {
        coverHeight = 500;
    }

       if(coverHeight / winWidth < 9.0 / 16.0) {
           var imagepositiony = (winWidth*1.1 * (9.0 / 16.0) - coverHeight) / 2.0 * -1;
           $(".bgdiv").css({ "background-size": "110% auto", "background-position-y": imagepositiony,"background-position-x": 0});
       } else {
           $(".bgdiv").css({ "background-size": "auto 110%", "background-position-x": 0,"background-position-y": 0});
       }
       $("#header-cover,.bgdiv").css('height', coverHeight);
}

function openMenu() {
    if(!menuisopen) {
        $(".header-cover-title").css({
            'bottom': $(".header-cover-title").height() * -1
        }, 600);
        $("#menu-button-icon").attr('class', 'glyphicon glyphicon-remove');
        $(".header-title").css({
            "height": 200
        }, 600);
        $(".menuitem").css({
            "opacity": 1
        }, 1200);
        setBlur(20);
    } else {
        $(".header-cover-title").css({
            'bottom': 40
        }, 600);
        $("#menu-button-icon").attr('class', 'glyphicon glyphicon-list');
        $(".header-title").css({
            "height": 40
        }, 600);
        if(winWidth < 768) {
            $(".menuitem").css({
                "opacity": 0
            }, 400);
        }
        setBlur(80);
    }
    menuisopen = !menuisopen;
}

function setBlur(b) {

    $(".bgdiv").css("filter", "brightness(" + b + "%)");
    $(".bgdiv").css("-webkit-filter", "brightness(" + b + "%)");
    $(".bgdiv").css("-moz-filter", "brightness(" + b + "%)");
    $(".bgdiv").css("-ms-filter", "brightness(" + b + "%)");

}
