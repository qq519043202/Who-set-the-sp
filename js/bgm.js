var pause = false;
var icon ;
$("div[id=bgm] #pause").click(function () {
    icon = $(this).find("i");
    if (!pause) {
        Crafty.audio.pause(bgm);
        pause = true;
        icon.removeClass("fa-pause");
        icon.addClass("fa-play");
    }
    else {
        Crafty.audio.unpause(bgm);
        pause = false;
        icon.removeClass("fa-play");
        icon.addClass("fa-pause");
    }
});

$("div[id=bgm] #next").click(function () {
    Crafty.audio.stop(bgm);
    if (bgm == "bgm") {
        bgm = "bgm2";
    }
    else if (bgm == "bgm2") {
        bgm = "bgm";
    }
    Crafty.audio.play(bgm, -1, 0.5);
    icon.removeClass("fa-play");
    icon.addClass("fa-pause");
});