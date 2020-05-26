var popup = document.getElementById('mpopupBox');
var popupLink = document.getElementById("mpopupLink");
var close = document.getElementsByClassName("close")[0];

popupLink.onclick = function () {
    popup.style.display = "block";
}

close.onclick = function () {
    popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

function toast() {
    var message = document.getElementById("toast-message");
    message.className = "show";
    setTimeout(function () {
        message.className = message.className.replace("show", "");
    }, 3000);
}

var side = document.getElementById("side");
var main = document.getElementById("main");

function openSidebar() {
    side.style.width = "250px";
    main.style.marginLeft = "250px";
}

function closeSidebar() {
    side.style.width = "0";
    main.style.marginLeft = "0";
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}