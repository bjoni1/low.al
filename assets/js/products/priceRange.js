//noUiSlider
window.addEventListener("load", start, false);

var slider;
var minDisplay;
var maxDisplay;

function start(){
    slider = document.getElementById("priceRange");
    minDisplay = document.getElementById("minDisplay");
    maxDisplay = document.getElementById("maxDisplay");

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        margin: 5,
        range: {
            'min': 0,
            'max': 100
        }
    });

    slider.noUiSlider.on("update", updateTextDisplay);
    minDisplay.addEventListener("change", updateSliderDisplay, false);
    maxDisplay.addEventListener("change", updateSliderDisplay, false);
}

function updateTextDisplay(){
    minDisplay.value = slider.noUiSlider.get()[0];
    maxDisplay.value = slider.noUiSlider.get()[1];
}

function updateSliderDisplay(){
    slider.noUiSlider.set([minDisplay.value, maxDisplay.value]);
}
