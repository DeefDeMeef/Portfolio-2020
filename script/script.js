$(function () {
    console.log("ready!");
    const body = document.body,
        scrollWrap = document.getElementsByClassName("smooth-blocks")[0],
        height = scrollWrap.getBoundingClientRect().height - 1,
        speed = 0.4;

    var offset = 0;

    body.style.height = Math.floor(height) + "px";

    function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed;

        var scroll = "translateY(-" + offset + "px) translateZ(0)";
        scrollWrap.style.transform = scroll;

        callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll();

    $(function () {
        var elements = $(".textA, .img").toArray();
        $(window).scroll(function () {
            elements.forEach(function (item) {
                if ($(this).scrollTop() >= $(item).offset().top - 400) {
                    $(item).addClass("reveal");
                }
            });
        });
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - 400) {
                $(item).addClass("reveal");
            }
        });
    });
});