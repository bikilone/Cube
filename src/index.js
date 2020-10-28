import "./styles/index.scss";

var H = document.getElementsByClassName('front')[0];
var E = document.getElementsByClassName('bottom')[0];
var A = document.getElementsByClassName('left')[0];
var box = document.getElementsByClassName('box')[0];
var hetzel = document.getElementsByClassName('hetzel')[0];
var entertainment = document.getElementsByClassName('entertainment')[0];
var architecture = document.getElementsByClassName('architecture')[0];
var aImg = document.querySelector('.architecture img');
var hImg = document.querySelector('.hetzel img');
var eImg = document.querySelector('.entertainment img');
var eventRunning = false;
setTimeout(() => { 
    architecture.style.width = aImg.offsetWidth + 'px';
    hetzel.style.width = hImg.offsetWidth + 'px';
    entertainment.style.width = eImg.offsetWidth + 'px';
}, 0);
// var perspective = document.getElementsByClassName('perspectives')[0];
// var pA = document.getElementsByClassName('perspective-a')[0];
// var pH = document.getElementsByClassName('perspective-h')[0];
// var pE = document.getElementsByClassName('perspective-e')[0];

H.addEventListener('mouseover', function() {
    if(eventRunning) return;
    eventRunning = true;
    addClassToBox('rotate-h');
    handleShowClass(hetzel);
});
E.addEventListener('mouseover', function() {
    if(eventRunning) return;
    eventRunning = true;
    addClassToBox('rotate-e');
    handleShowClass(entertainment);
});
A.addEventListener('mouseover', function() {
    if(eventRunning) return;
    eventRunning = true;
    addClassToBox('rotate-a');
    handleShowClass(architecture);
});

function addClassToBox(classNotToRemove) {
    box.classList.remove('rotate-e', 'rotate-a', 'rotate-h');
    box.classList.add(classNotToRemove);
    setTimeout(() => {
        box.classList.remove(classNotToRemove);
        eventRunning = false;
    }, 5000);
}

function handleShowClass(textToShow) {
    var texts = [hetzel, entertainment, architecture];
    texts.forEach(function(text) {
        if (text === textToShow) {
            text.classList.add('show');
            setTimeout(() => {
                text.classList.remove('show');
            }, 4500);
        } else {
            text.classList.remove('show');
        }
    })
}