var typed = new Typed('.typing', {
    strings: ["WebSites", "Softwares", "apps"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});
let teamSectionOffset = $("#team").offset().top;
let serviceSectionOffset = $("#services").offset().top;

$(window).scroll(function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 300) {
        $(".navbar").css({ "background-color": "white", "box-shadow": "0 10px 30px -8px rgba(0, 0, 0, 0.3)", "padding": "10px" });
        $(".nav-link").css("color", "black");
        $(".navbar-brand img").attr("src", "images/logo-dark.png");
        if (scrollTop > teamSectionOffset - 400) {
            $(".team-item").addClass("team-animation")
            if (scrollTop > serviceSectionOffset - 400) {
                $(".icon-1,.icon-2,.icon-3,.icon-4,.icon-5,.icon-6,.down-cnt,.ani-1,.ani-2").css("animation-play-state", "running");

            }
        }
    }

    else {
        $(".navbar").css({ "background-color": "transparent", "box-shadow": "none", "padding": "15px" });
        $(".nav-link").css("color", "white");
        $(".navbar-brand img").attr("src", "images/logo-light.png");

    }

})

$(".nav-link").click(function () {
    let currentLink = $(this).attr("href");
    let secOffset = $(currentLink).offset().top;
    $("body", "html").animate({ scrollTop: secOffset }, 1000);

})
$(document).ready(function () {
    $(".loadingScreen").fadeOut(1500);
})


