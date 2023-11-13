var slidesIndex = 1;
showDivs(slidesIndex);

function plusDivs(n){
    showDivs(slidesIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slidesIndex = 1};
    if (n < 1) { slidesIndex = x.length};
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slidesIndex-1].style.display = "block";
}