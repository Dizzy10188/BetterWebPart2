var popup = document.getElementById('mpopupBox');
var popupLink = document.getElementById("mpopupLink");
var close = document.getElementsByClassName("close")[0];
var side = document.getElementById("side");
var main = document.getElementById("main");
var slideIndex = 1;
let myRequest = new Request("./text.json");

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

function openSidebar() {
    side.style.width = "250px";
    main.style.marginLeft = "250px";
}

function closeSidebar() {
    side.style.width = "0";
    main.style.marginLeft = "0";
}

showSlides(slideIndex);

function slides(x) {
    showSlides(slideIndex += x);
}

function currentSlide(x) {
    showSlides(slideIndex = x);
}

function showSlides(x) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var img_circle = document.getElementsByClassName("img_circle");
    if (x > slides.length) { slideIndex = 1 }
    if (x < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < img_circle.length; i++) {
        img_circle[i].className = img_circle[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    img_circle[slideIndex - 1].className += " active";
}

fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.quotes)
    })