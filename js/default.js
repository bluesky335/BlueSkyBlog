
var menuisopen = false; //菜单的打开状态
var blurTimer = null;
var blur = 80;
var targetB = 0;
var winWidth = 0;
var winHeight = 0;
var menuAlpha = 0.6;

$(document).ready(function() {

        winWidth = $(window).width();
        winHeight = $(window).height();
    $("body").click(function(event) {
        if(menuisopen) {
            openMenu(); //如果菜单没关闭，则关闭菜单
        }
    });
    $("#header-cover").mouseenter(function(event) {
        $(".bgdiv").css('background-size', '103%');
    });
    $("#header-cover").mouseleave(function(event) {
        $(".bgdiv").css('background-size', '100%');
    });
    $("#menu-button").click(function(event) {
        openMenu();
        return false;
    });

    $("#bsk-pay").mouseenter(function(event) {
            $("#bsk-pay-code-img").css({"top":$(this).offset().top-440,"display":"block","opacity":0});
        $("#bsk-pay-code-img").animate({"top":$(this).offset().top-420,"opacity":1}, 200);
    });
    $("#bsk-pay").mouseleave(function(event) {
            $("#bsk-pay-code-img").stop().animate({"top":$(this).offset().top-440,"opacity":0}, 200,function (){
                $("#bsk-pay-code-img").css({"top":$(this).offset().top-440,"display":"none","opacity":0});
            });
    });

    $(window).scroll(function(event) {
        if (!menuisopen) {
            var alpha = $(document).scrollTop()/($(".bgdiv").height()-50);
            alpha=alpha>menuAlpha?menuAlpha:alpha;
            $(".header-title").css('background-color', 'rgba(0,0,0,'+alpha+')');
        }
    });
    $(document).mousemove(function(e){
           var ypercent = (e.pageX- winWidth/2)/(winWidth/2);
           var xpercent = (e.pageY-winHeight/2)/(winHeight/2)*-1;
           $("#transform3d").css('transform',"perspective(600px) rotateY("+((3*ypercent)*(1))+"deg) rotateX("+((3*xpercent)*(1))+"deg)");
           $("#transform3d").css('webkit-transform',"perspective(600px) rotateY("+((3*ypercent)*(1))+"deg) rotateX("+((3*xpercent)*(1))+"deg)");
           $("#transform3d").css('box-shadow',(3*ypercent*(-1))+"px "+(3*xpercent*(1))+"px 20px rgba(0,0,0,0.5)");
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
        if (winWidth<=410) {
            $("h1").css("font-size","25px");
            $("h4").css("font-size","15px");
            $("h5").css("font-size","13px");
            $(".header-cover-title").css({
                'bottom': 15
            }, 600);
        }else {

                $("h1").css("font-size","");
                $("h4").css("font-size","");
                $("h5").css("font-size","");
                $(".header-cover-title").css({
                    'bottom': 40
                }, 600);
        }
    });
    $(window).resize();
});

function setBgDiv(){
    var coverHeight = winWidth * (9.0 / 16.0);
    if(coverHeight > 500) {
        coverHeight = 500;
    }
  $("#header-cover,.bgdiv").css('height', coverHeight);
}

function openMenu() {
    if(!menuisopen) {

        $(".header-title").css('background-color', 'rgba(0,0,0,'+menuAlpha+')');
        $(".header-cover-title").css({
            'bottom': $(".header-cover-title").height() * -1
        }, 600);
        $("#menu-button-icon").attr('class', 'glyphicon glyphicon-remove');
        var h = $(".bgdiv").height()-$(document).scrollTop();
        if (h>170) {
            $(".header-title").css({
                "height": h
            }, 600);
        }else {
            $(".header-title").css({
                "height": 200
            }, 600);
        }

        $(".menuitem").css({
            "opacity": 1
        }, 1200);
        setBlur(20);
    } else {

        var alpha = $(document).scrollTop()/($(".bgdiv").height()-50);
        alpha=alpha>menuAlpha?menuAlpha:alpha;
        $(".header-title").css('background-color', 'rgba(0,0,0,'+alpha+')');


        if (winWidth<=410) {
            $(".header-cover-title").css({
                'bottom': 15
            }, 600);
        }else {
            $(".header-cover-title").css({
                'bottom': 40
            }, 600);
        }
        $("#menu-button-icon").attr('class', 'glyphicon glyphicon-list');
        $(".header-title").css({
            "height": 50
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

    // $(".bgdiv").css("filter", "brightness(" + b + "%)");
    // $(".bgdiv").css("-webkit-filter", "brightness(" + b + "%)");
    // $(".bgdiv").css("-moz-filter", "brightness(" + b + "%)");
    // $(".bgdiv").css("-ms-filter", "brightness(" + b + "%)");

}
