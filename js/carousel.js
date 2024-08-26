$(document).ready(function () {

    //Hide all elements
    $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)").hide();
    $("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2)").hide();
    $("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)").hide();
    $("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(2)").hide();

    $("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(2) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(4) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(5) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(6) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(7) > div:nth-child(2)").hide();
    $("body > div:nth-child(7) > div:nth-child(8) > div:nth-child(2)").hide();

    $("body > div:nth-child(13) > div:nth-child(1) > div:nth-child(2)").hide();
    $("body > div:nth-child(13) > div:nth-child(2) > div:nth-child(2)").hide();
    $("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(2)").hide();
    $("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(2)").hide();

    //Button triggers
    $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(3) > div:nth-child(4) > div:nth-child(2)").slideToggle();
    });


    $("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(2) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(2) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(4) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(4) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(5) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(5) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(5) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(6) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(6) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(6) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(7) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(7) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(7) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(7) > div:nth-child(8) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(7) > div:nth-child(8) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(7) > div:nth-child(8) > div:nth-child(2)").slideToggle();
    });


    $("body > div:nth-child(13) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(13) > div:nth-child(1) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(13) > div:nth-child(1) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(13) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(13) > div:nth-child(2) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(13) > div:nth-child(2) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(2)").slideToggle();
    });

    $("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)").click(function(){
        $("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(2)").stop(true);
        $("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(2)").slideToggle();
    });
});