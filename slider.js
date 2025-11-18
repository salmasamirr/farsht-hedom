// slider.js
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    
    // Hide all slides
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].classList.add("active");
}

//Auto slide every 5 seconds (optional)
setInterval(function() {
    plusDivs(1);
}, 10000);