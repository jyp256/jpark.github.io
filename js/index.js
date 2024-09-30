$(document).ready(function () {
    $(".container-fluid > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").hide();
    $(".container-fluid > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)").hide();
    $("div.row:nth-child(3) > div:nth-child(1) > div:nth-child(2)").hide();
    $("div.row:nth-child(3) > div:nth-child(2) > div:nth-child(2)").hide();

    $(".container-fluid > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)").on("mouseenter", function () {
        $(".container-fluid > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").fadeIn();
    })

});