import "./styles/index.scss";

var H = document.getElementsByClassName('front')[0];
var E = document.getElementsByClassName('bottom')[0];
var A = document.getElementsByClassName('left')[0];
var box = document.getElementsByClassName('box')[0];
var hetzel = document.getElementsByClassName('hetzel')[0];
var entertainment = document.getElementsByClassName('entertainment')[0];
var architecture = document.getElementsByClassName('architecture')[0];

H.addEventListener('mouseover', function() {
    addClassToBox('rotate-h');
    handleShowClass(hetzel);
});
E.addEventListener('mouseover', function() {
    addClassToBox('rotate-e');
    handleShowClass(entertainment);
});
A.addEventListener('mouseover', function() {
    addClassToBox('rotate-a');
    handleShowClass(architecture);
});

function addClassToBox(classNotToRemove) {
    box.classList.remove('rotate-e', 'rotate-a', 'rotate-h');
    box.classList.add(classNotToRemove);
    setTimeout(() => {
        box.classList.remove(classNotToRemove);
    }, 5500);
}

function handleShowClass(textToShow) {
    var texts = [hetzel, entertainment, architecture];
    texts.forEach(function(text) {
        if (text === textToShow) {
            text.classList.add('show');
        } else {
            text.classList.remove('show');
        }
    })
}