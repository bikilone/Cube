var front = document.getElementsByClassName('front')[0];
var left = document.getElementsByClassName('left')[0];
var top = document.getElementsByClassName('top')[0];

function print(val) {
    console.log(val);
}

front.addEventListener('mouseenter', function() {
    console.log('front');
} );
left.addEventListener('mouseenter', function() {
    console.log('left');
} );
top.addEventListener('mouseenter', function() {
    console.log('top');
} );