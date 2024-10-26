$(document).ready(function () {

    // Publications
    $("body > div:nth-child(3) >").each(function (index) {
        var adjust = index + 1;
        $("body > div:nth-child(3) > div:nth-child(" + adjust + ") >div:nth-child(2)").hide();
        if ($("body > div:nth-child(3) > div:nth-child(" + adjust + ") >div:nth-child(2)").contents().length != 1) {
            $("body > div:nth-child(3) > div:nth-child(" + adjust + ") > div:nth-child(1) > button:nth-child(1)").click(function () {
                $("body > div:nth-child(3) > div:nth-child(" + adjust + ") > div:nth-child(2)").stop(true);
                $("body > div:nth-child(3) > div:nth-child(" + adjust + ") > div:nth-child(2)").slideToggle();
            });
        }
    });

    // Working Papers
    $("body > div:nth-child(7) >").each(function (index) {
        var adjust = index + 1;
        $("body > div:nth-child(7) > div:nth-child(" + adjust + ") >div:nth-child(2)").hide();
        if ($("body > div:nth-child(7) > div:nth-child(" + adjust + ") >div:nth-child(2)").contents().length != 1) {
            $("body > div:nth-child(7) > div:nth-child(" + adjust + ") > div:nth-child(1) > button:nth-child(1)").click(function () {
                $("body > div:nth-child(7) > div:nth-child(" + adjust + ") > div:nth-child(2)").stop(true);
                $("body > div:nth-child(7) > div:nth-child(" + adjust + ") > div:nth-child(2)").slideToggle();
            });
        }
    });

    // Works in progress
    $("body > div:nth-child(13) >").each(function (index) {
        var adjust = index + 1;
        $("body > div:nth-child(13) > div:nth-child(" + adjust + ") >div:nth-child(2)").hide();
        if ($("body > div:nth-child(13) > div:nth-child(" + adjust + ") >div:nth-child(2)").contents().length != 1) {
            $("body > div:nth-child(13) > div:nth-child(" + adjust + ") > div:nth-child(1) > button:nth-child(1)").click(function () {
                $("body > div:nth-child(13) > div:nth-child(" + adjust + ") > div:nth-child(2)").stop(true);
                $("body > div:nth-child(13) > div:nth-child(" + adjust + ") > div:nth-child(2)").slideToggle();
            })
        }
    });
});