var popup = document.getElementById('mpopupBox');
var popupLink = document.getElementById("mpopupLink");
var close = document.getElementsByClassName("close")[0];
var side = document.getElementById("side");
var main = document.getElementById("main");
var slideIndex = 1;

popupLink.onclick = function () {
    popup.style.display = "block";
    document.getElementById('modal-text').innerHTML = quote();
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
    message.innerHTML = quote();
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

function quote() {
    var obj = JSON.parse('{"quotes": [ "“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.” ~Dr. Seuss", "“Do what you feel in your heart to be right, for you’ll be criticized anyway.” ~Eleanor Roosevelt", "“To find yourself, think for yourself.” ~Socrates", "“Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.” ~Albert Einstein", "“You only live once, but if you do it right, once is enough.” ~Mae West", "“Be the change that you wish to see in the world.” ~Mahatma Gandhi", "“No one can make you feel inferior without your consent.” ~Eleanor Roosevelt", "“Always forgive your enemies; nothing annoys them so much.” ~Oscar Wilde", "“I have not failed. I’ve just found 10,000 ways that won’t work.” ~Thomas A. Edison", "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.” ~Dr. Seuss"]}')
    var x = Math.floor((Math.random() * 10));
    // console.log(obj.quotes[x]);   
    return obj.quotes[x];
}