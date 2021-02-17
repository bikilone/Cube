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


var text = document.getElementsByClassName('text')[0];
box.addEventListener('mousemove', throttle(hoverTimeout, function(e) {
    var id = e.target.id;
    var classNameBox;
    var classNameText;
    switch(id) {
        case 'h':
            classNameBox = 'rotate-h';
            classNameText = 'show-hetzel';
            break;
        case 'e':
            classNameBox = 'rotate-e';
            classNameText = 'show-entertainment';
            break;
        case 'a':
            classNameBox = 'rotate-a';
            classNameText = 'show-architecture';
            break;
    }
    if(!classNameBox)
        return;
    handleMouseOver(classNameBox, classNameText);
}, false));


function handleMouseOver(classToAdd, classToAddText) {
        if (eventRunning) return;
        eventRunning = true;
        addClassToBox(classToAdd);     
        addClassToText(classToAddText);
}

function addClassToBox(classNotToRemove) {
    box.classList.remove('rotate-e', 'rotate-a', 'rotate-h');
    box.classList.add(classNotToRemove);
    setTimeout(() => {
        box.classList.remove(classNotToRemove);
        eventRunning = false;
    }, animationTime);
}

function addClassToText(classNotToRemove) {
    text.classList.remove('show-entertainment', 'show-architecture', 'show-hetzel');
    text.classList.add(classNotToRemove);
    setTimeout(() => {
        text.classList.remove(classNotToRemove);
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
