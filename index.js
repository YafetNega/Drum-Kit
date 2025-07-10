document.querySelectorAll("button.w").forEach(function (button){
    button.addEventListener("click", function () {
        var w = new Audio("sounds/tom-1.mp3");
        w.play();
    });
});

document.querySelectorAll("button.a").forEach(function (button){
    button.addEventListener("click", function () {
        var a = new Audio("sounds/tom-2.mp3");
        a.play();
    });
});

document.querySelectorAll("button.s").forEach(function (button){
    button.addEventListener("click", function () {
        var s = new Audio("sounds/tom-3.mp3");
        s.play();
    });
});

document.querySelectorAll("button.d").forEach(function (button){
    button.addEventListener("click", function () {
        var d = new Audio("sounds/tom-4.mp3");
        d.play();
    });
});

document.querySelectorAll("button.j").forEach(function (button){
    button.addEventListener("click", function () {
        var j = new Audio("sounds/snare.mp3");
        j.play();
    });
});

document.querySelectorAll("button.k").forEach(function (button){
    button.addEventListener("click", function () {
        var k = new Audio("sounds/crash.mp3");
        k.play();
    });
});

document.querySelectorAll("button.l").forEach(function (button){
    button.addEventListener("click", function () {
        var l = new Audio("sounds/kick-bass.mp3");
        l.play();
    });
});