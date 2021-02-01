var myCube = [
    [
        [{ "front": "red", "top": "", "bottom": "green", "back": "", "left": "white", "right": "" },
            { "front": "red", "top": "", "bottom": "", "back": "", "left": "white", "right": "" },
            { "front": "red", "top": "blue", "bottom": "", "back": "", "left": "white", "right": "" }
        ],
        [{ "front": "", "top": "", "bottom": "green", "back": "", "left": "white", "right": "" },
            { "front": "", "top": "", "bottom": "", "back": "", "left": "white", "right": "" },
            { "front": "", "top": "blue", "bottom": "", "back": "", "left": "white", "right": "" }
        ],
        [{ "front": "", "top": "", "bottom": "green", "back": "orange", "left": "white", "right": "" },
            { "front": "", "top": "", "bottom": "", "back": "orange", "left": "white", "right": "" },
            { "front": "", "top": "blue", "bottom": "", "back": "orange", "left": "white", "right": "" }
        ]
    ],
    [
        [{ "front": "red", "top": "", "bottom": "green", "back": "", "left": "", "right": "" },
            { "front": "red", "top": "", "bottom": "", "back": "", "left": "", "right": "" },
            { "front": "red", "top": "blue", "bottom": "", "back": "", "left": "", "right": "" }
        ],
        [{ "front": "", "top": "", "bottom": "green", "back": "", "left": "", "right": "" },
            { "front": "", "top": "", "bottom": "", "back": "", "left": "", "right": "" },
            { "front": "", "top": "blue", "bottom": "", "back": "", "left": "", "right": "" }
        ],
        [{ "front": "", "top": "", "bottom": "green", "back": "orange", "left": "", "right": "" },
            { "front": "", "top": "", "bottom": "", "back": "orange", "left": "", "right": "" },
            { "front": "", "top": "blue", "bottom": "", "back": "orange", "left": "", "right": "" }
        ]
    ],
    [
        [{ "front": "red", "top": "", "bottom": "green", "back": "", "left": "", "right": "yellow" },
            { "front": "red", "top": "", "bottom": "", "back": "", "left": "", "right": "yellow" },
            { "front": "red", "top": "blue", "bottom": "", "back": "", "left": "", "right": "yellow" }
        ],
        [{ "front": "", "top": "", "bottom": "green", "back": "", "left": "", "right": "yellow" },
            { "front": "", "top": "", "bottom": "", "back": "", "left": "", "right": "yellow" },
            { "front": "", "top": "blue", "bottom": "", "back": "", "left": "", "right": "yellow" }
        ],
        [{ "front": "", "top": "", "bottom": "green", "back": "orange", "left": "", "right": "yellow" },
            { "front": "", "top": "", "bottom": "", "back": "orange", "left": "", "right": "yellow" },
            { "front": "", "top": "blue", "bottom": "", "back": "orange", "left": "", "right": "yellow" }
        ]
    ]
]



function giveMaterial(color) { return new THREE.MeshBasicMaterial({ color: color }); }
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
const geometry1 = new THREE.BoxGeometry(0, 1, 1);
const geometry2 = new THREE.BoxGeometry(1, 0, 1);
const geometry3 = new THREE.BoxGeometry(1, 1, 0);

var cubes = [];

for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
        var material = new THREE.MeshBasicMaterial({
            color: myCube[2][i][2 - j]["right"]
        });
        var cube = new THREE.Mesh(geometry1, material);
        cube.material.needUpdate = true;
        cube.position.set(1.51, 1 - j, 1 - i);
        cubes.push(cube);


        var material = new THREE.MeshBasicMaterial({
            color: myCube[0][i][2 - j]["left"]
        });
        var cube = new THREE.Mesh(geometry1, material);
        cube.material.needUpdate = true;
        cube.position.set(-1.51, 1 - j, 1 - i);
        cubes.push(cube);


        var material = new THREE.MeshBasicMaterial({
            color: myCube[2 - i][j][2]["top"]
        });
        var cube = new THREE.Mesh(geometry2, material);
        cube.material.needUpdate = true;
        cube.position.set(1 - i, 1.51, 1 - j);
        cubes.push(cube);


        var material = new THREE.MeshBasicMaterial({
            color: myCube[2 - i][j][0]["bottom"]
        });
        var cube = new THREE.Mesh(geometry2, material);
        cube.material.needUpdate = true;
        cube.position.set(1 - i, -1.51, 1 - j);
        cubes.push(cube);


        var material = new THREE.MeshBasicMaterial({
            color: myCube[2 - i][0][2 - j]["front"]
        });
        var cube = new THREE.Mesh(geometry3, material);
        cube.material.needUpdate = true;
        cube.position.set(1 - i, 1 - j, 1.51);
        cubes.push(cube);


        var material = new THREE.MeshBasicMaterial({
            color: myCube[2 - i][2][2 - j]["back"]
        });
        var cube = new THREE.Mesh(geometry3, material);
        cube.material.needUpdate = true;
        cube.position.set(1 - i, 1 - j, -1.51);
        cubes.push(cube);
    }
}
for (let i = 0; i < 54; ++i) {
    scene.add(cubes[i]);
}

function colorOfCubes(i, j, k) {
    let color = "";
    color += myCube[i][j][k]["front"];
    color += myCube[i][j][k]["bottom"];
    color += myCube[i][j][k]["left"];
    color += myCube[i][j][k]["right"];
    color += myCube[i][j][k]["top"];
    color += myCube[i][j][k]["back"];
    return color;
}

function update(myCube) {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            cube = cubes[6 * j + 18 * i];
            cube.material.color.set(myCube[2][i][2 - j]["right"]);


            cube = cubes[6 * j + 18 * i + 1];
            cube.material.color.set(myCube[0][i][2 - j]["left"]);


            cube = cubes[6 * j + 18 * i + 2];
            cube.material.color.set(myCube[2 - i][j][2]["top"]);


            cube = cubes[6 * j + 18 * i + 3];
            cube.material.color.set(myCube[2 - i][j][0]["bottom"]);


            cube = cubes[6 * j + 18 * i + 4];
            cube.material.color.set(myCube[2 - i][0][2 - j]["front"]);


            cube = cubes[6 * j + 18 * i + 5];
            cube.material.color.set(myCube[2 - i][2][2 - j]["back"]);
        }
    }
}
var edges = [
    (1, 0, 0),
    (2, 1, 0),
    (1, 2, 0),
    (0, 1, 0),
    (0, 0, 1),
    (2, 0, 1),
    (2, 2, 1),
    (0, 2, 1),
    (1, 0, 2),
    (2, 1, 2),
    (1, 2, 2),
    (0, 1, 2)
]
var vertices = [
        (0, 0, 0),
        (2, 0, 0),
        (2, 2, 0),
        (0, 2, 0),
        (0, 0, 2),
        (2, 0, 2),
        (2, 2, 2),
        (0, 2, 2),
    ]
    // update()

var upperEdges = [
    [1, 0, 2, false, false],
    [2, 1, 2, false, false],
    [1, 2, 2, false, false],
    [0, 1, 2, false, false]
]
var upperVertices = [
    [0, 0, 2, false, false],
    [2, 0, 2, false, false],
    [2, 2, 2, false, false],
    [0, 2, 2, false, false]
]