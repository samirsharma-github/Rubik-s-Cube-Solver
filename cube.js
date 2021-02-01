var anglex = 0;
var angley = 90;
var rad = Math.PI / 180;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.5,
    1000
);
var drag = false;
var dx = 0,
    dy = 0;
var x, y;

function cordinates(event) {
    var x1 = event.clientX;
    var y1 = event.clientY;
    if (
        (onmouseup = function() {
            drag = false;
            dx = 0;
            dy = 0;
        })
    );
    if (
        (onmousedown = function() {
            drag = true;
            x = event.clientX;
            y = event.clientY;
        })
    );
    if (drag == true) {
        dx = x - x1;
        dy = y - y1;
    }
    x = x1;
    y = y1;
}

camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
camera.updateProjectionMatrix();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(3, 3, 3);

function giveMaterial(color) { return new THREE.MeshBasicMaterial({ color: color }); }
var material = giveMaterial("black");
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);