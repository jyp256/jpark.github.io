$(document).ready(function () {
    $(".index_cont1 > div:nth-child(2)").hide();
    $(".index_cont2 > div:nth-child(2)").hide();
    $(".index_cont3 > div:nth-child(2)").hide();
    $(".index_cont4 > div:nth-child(2)").hide();

    //Research
    $(".index_cont1 > img:nth-child(1)").on("mouseenter", function () {
        $(".index_cont1 > div:nth-child(2)").stop(); 
        $(".index_cont1 > div:nth-child(2)").fadeIn();
    });

    $(".index_cont1").on("mouseleave",function(){   
        $(".index_cont1 > div:nth-child(2)").fadeOut();
    });

    //Teaching
    $(".index_cont2 > img:nth-child(1)").on("mouseenter", function () {
        $(".index_cont2 > div:nth-child(2)").stop(); 
        $(".index_cont2 > div:nth-child(2)").fadeIn();
    });

    $(".index_cont2").on("mouseleave",function(){   
        $(".index_cont2 > div:nth-child(2)").fadeOut();
    });

    //Data
    $(".index_cont3 > img:nth-child(1)").on("mouseenter", function () {
        $(".index_cont3 > div:nth-child(2)").stop(); 
        $(".index_cont3 > div:nth-child(2)").fadeIn();
    });

    $(".index_cont3").on("mouseleave",function(){   
        $(".index_cont3 > div:nth-child(2)").fadeOut();
    });

    //CV
    $(".index_cont4 > img:nth-child(1)").on("mouseenter", function () {
        $(".index_cont4 > div:nth-child(2)").stop(); 
        $(".index_cont4 > div:nth-child(2)").fadeIn();
    });

    $(".index_cont4").on("mouseleave",function(){   
        $(".index_cont4 > div:nth-child(2)").fadeOut();
    });
});