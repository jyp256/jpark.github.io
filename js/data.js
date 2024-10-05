$(document).ready(function () {
    $("div.panel-body:nth-child(2)").hide();
    $("div.panel-body:nth-child(4)").hide();
    $("div.panel-body:nth-child(6)").hide();
    $("div.panel-body:nth-child(8)").hide();

    $("a.list-group-item:nth-child(1) > button:nth-child(1)").click(function(){
        $("div.panel-body:nth-child(2)").stop(true);
        $("div.panel-body:nth-child(2)").slideToggle();
    });

    $("a.list-group-item:nth-child(3) > button:nth-child(1)").click(function(){
        $("div.panel-body:nth-child(4)").stop(true);
        $("div.panel-body:nth-child(4)").slideToggle();
    });

    $("a.list-group-item:nth-child(5) > button:nth-child(1)").click(function(){
        $("div.panel-body:nth-child(6)").stop(true);
        $("div.panel-body:nth-child(6)").slideToggle();
    });

    $("a.list-group-item:nth-child(7) > button:nth-child(1)").click(function(){
        $("div.panel-body:nth-child(8)").stop(true);
        $("div.panel-body:nth-child(8)").slideToggle();
    });
});