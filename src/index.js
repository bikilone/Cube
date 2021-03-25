import "./styles/index.scss";
import { throttle } from 'throttle-debounce';
import { hoverTimeout, automaticTimeout, animations} from './constants';

var eventRunning = false;
var eventId = -1;
var body = document.getElementsByTagName('body')[0];
var container = document.getElementsByClassName('mouse-container')[0];
window.addEventListener('load', function() {
    body.classList.remove('preload');
    init(); 
})

function init() {
    body.addEventListener('mousemove', throttle(hoverTimeout, handleEvent, false));
    body.addEventListener('click', handleEvent);
    setDate();
}

function handleEvent(e) {
        var id = e.target.id;
        if (!id || eventRunning) return;
        var classNameBox = animations[id].forwards;
        handleMouseOver(false, classNameBox);
        setEvent();
       
        container.addEventListener('mouseleave', function() {
            console.log('leave')
            setTimeout(() => {
                if(eventRunning) {
                    handleMouseOver(true);
                    resetEvent();
                }
            }, hoverTimeout);
        });
        setTimeout(
            automaticReset, automaticTimeout, eventId);
    }

function automaticReset(evId) {
    // reset event only if there is one
    // and if matches the event
    if (evId !== -1 && evId === eventId) {
        handleMouseOver(true);
        resetEvent();
    }
}

function handleMouseOver(remove, classToAdd) {
    if(!remove) {
        removeAllClasses();
        body.classList.add(classToAdd);   
   }
   else {
       removeAllClasses();
    }
}

function removeAllClasses() {
    body.classList.remove(animations.e.forwards, animations.a.forwards,animations.h.forwards);
}

function setEvent() {
    eventRunning = true;
    eventId = Math.floor(Math.random() * 100000);
}

function resetEvent() {
    eventRunning = false;
    eventId = -1;
}

function setDate(){
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("date").innerHTML = n;
}
