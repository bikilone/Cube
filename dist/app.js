var H = document.getElementsByClassName('front')[0];
var E = document.getElementsByClassName('bottom')[0];
var A = document.getElementsByClassName('left')[0];
var box = document.getElementsByClassName('box')[0];
var hetzel = document.getElementsByClassName('hetzel')[0];
var entertainment = document.getElementsByClassName('entertainment')[0];
var architecture = document.getElementsByClassName('architecture')[0];

H.addEventListener('mouseover', function() {
    box.classList.remove('rotate-e', 'rotate-a');
    box.classList.add('rotate-h');
    hetzel.classList.add('show');
});
E.addEventListener('mouseover', function() {
    box.classList.remove('rotate-h', 'rotate-a');
    box.classList.add('rotate-e');
});
A.addEventListener('mouseover', function() {
    box.classList.remove('rotate-e', 'rotate-h');
    box.classList.add('rotate-a');
});