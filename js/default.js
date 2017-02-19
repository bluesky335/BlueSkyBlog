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
        var coverHeight = winWidth * (9.0 / 16.0);
        if(coverHeight > 400) {
            coverHeight = 400;
            $(".bgdiv").css({
                "background-position-y": (winWidth * (9.0 / 16.0) - 400) / 2 * -1
            });
        }
        $("#header-cover,.bgdiv").css('height', coverHeight);
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
