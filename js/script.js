window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.opacity = "1 ";
    } else {
        document.getElementById("myBtn").style.opacity = "0 ";
    }
}

function topFunction() {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
}