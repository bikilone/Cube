import "./styles/index.scss";
import { throttle } from 'throttle-debounce';

var hoverTimeout = 1000;
var animationTime = 5000;

var H = document.getElementsByClassName('h-side')[0];
var E = document.getElementsByClassName('e-side')[0];
var A = document.getElementsByClassName('a-side')[0];

var box = document.getElementsByClassName('box')[0];
var hetzel = document.getElementsByClassName('hetzel')[0];
var entertainment = document.getElementsByClassName('entertainment')[0];
var architecture = document.getElementsByClassName('architecture')[0];
var eventRunning = false;

box.addEventListener('mousemove', throttle(hoverTimeout, function(e) {
    var id = e.target.id;
    var className;
    switch(id) {
        case 'h':
            className = 'rotate-h';
            break;
        case 'e':
            className = 'rotate-e';
            break;
        case 'a':
                className = 'rotate-a';
                break;
    }
    if(!className)
        return;
    handleMouseOver(className)
}, false));


function handleMouseOver(classToAdd) {
        if (eventRunning) return;
        eventRunning = true;
        addClassToBox(classToAdd);     
}

function addClassToBox(classNotToRemove) {
    box.classList.remove('rotate-e', 'rotate-a', 'rotate-h');
    box.classList.add(classNotToRemove);
    setTimeout(() => {
        box.classList.remove(classNotToRemove);
        eventRunning = false;
    }, animationTime);
}

function handleShowClass(textToShow) {
    var texts = [hetzel, entertainment, architecture];
    texts.forEach(function(text) {
        if (text === textToShow) {
            text.classList.add('show');
            setTimeout(() => {
                text.classList.remove('show');
            }, animationTime * 0.8);
        } else {
            text.classList.remove('show');
        }
    })
}
