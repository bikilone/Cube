var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var front = document.getElementsByClassName('front')[0];
// var left = document.getElementsByClassName('left')[0];
// var top = document.getElementsByClassName('top')[0];

// function print(val) {
//     console.log(val);
// }

// front.addEventListener('mouseenter', function() {
//     console.log('front');
// } );
// left.addEventListener('mouseenter', function() {
//     console.log('left');
// } );
// top.addEventListener('mouseenter', function() {
//     console.log('top');
// } );

var loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"./model/cube.obj",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.log(err)
		console.error( 'An error happened' );
	}
);


// Alternatively, to parse a previously loaded JSON structure
// var object = loader.parse( a_json_object );

// scene.add( object );