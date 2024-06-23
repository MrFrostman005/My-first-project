var buttonmap = document.getElementById("open-map");
var buttonmap2 = document.getElementById("open-map2")
var close = document.getElementById("map-close");
var map = document.querySelector(".modal-map");
var img = document.querySelector(".map-img");
var iframe = document.querySelector(".map-iframe");

buttonmap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");

});

buttonmap2.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");

});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});

window.addEventListener("click", function(evt) {
    if (evt.target === map) {
        evt.preventDefault();
        console.log("Closing modal");
        map.classList.remove("modal-show");
    }
});

iframe.addEventListener("error", function() {
    iframe.style.display = "none";
    fallbackMap.style.display = "block";
});