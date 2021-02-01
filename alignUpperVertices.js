function upperVerticesSolver(myCube) {
    let toTurn = "";
    let val = checkUpperVerticeCorrect(myCube);
    while (val == 0) {
        toTurn = "R U U R' U' R U' R' L' U' U' L U L' U L";
        return [toTurn, false];
    }
    while (val == 1) {
        if (upperVertices[0][4] == true) {
            toTurn = "B U U B' U' B U' B' F' U' U' F U F' U F "
        }
        if (upperVertices[1][4] == true) {
            toTurn = "L U U L' U' L U' L' R' U' U' R U R' U R"
        }
        if (upperVertices[2][4] == true) {
            toTurn = "F U U F' U' F U' F' B' U' U' B U B' U B"
        }
        if (upperVertices[3][4] == true) {
            toTurn = "R U U R' U' R U' R' L' U' U' L U L' U L"
        }
        return [toTurn, false];
    }

    if (val == 2) {
        if ((upperVertices[2][4] == true) && (upperVertices[0][4] == true)) {

            corner = upperVertices[1];
            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "yellow")) {
                toTurn = "F U U F' U' F U' F' B' U' U' B U B' U B L U U L' U' L U' L' R' U' U' R U R' U R";
            }

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "red")) {
                toTurn = "B U U B' U' B U' B' F' U' U' F U F' U F R U U R' U' R U' R' L' U' U' L U L' U L";
            }
        }
        if ((upperVertices[1][4] == true) && (upperVertices[3][4] == true)) {
            corner = upperVertices[0];
            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "white")) {
                toTurn = "R U U R' U' R U' R' L' U' U' L U L' U L F U U F' U' F U' F' B' U' U' B U B' U B";
            }


            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "red")) {
                toTurn = "L U U L' U' L U' L' R' U' U' R U R' U R B U U B' U' B U' B' F' U' U' F U F' U F";
            }
        }
        if ((upperVertices[3][4] == true) && (upperVertices[0][4] == true)) {
            corner = upperVertices[1];

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "yellow")) {
                toTurn = "R U U R' U' R U' R' L' U' U' L U L' U L R U U R' U' R U' R' L' U' U' L U L' U L";
            }

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "red")) {
                toTurn = "R U U R' U' R U' R' L' U' U' L U L' U L";
            }
        }
        if ((upperVertices[1][4] == true) && (upperVertices[0][4] == true)) {
            corner = upperVertices[2];

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "orange")) {
                toTurn = "B U U B' U' B U' B' F' U' U' F U F' U F B U U B' U' B U' B' F' U' U' F U F' U F";
            }

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "yellow")) {
                toTurn = "B U U B' U' B U' B' F' U' U' F U F' U F ";
            }
        }
        if ((upperVertices[1][4] == true) && (upperVertices[2][4] == true)) {
            corner = upperVertices[3];

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "white")) {
                toTurn = "L U U L' U' L U' L' R' U' U' R U R' U R L U U L' U' L U' L' R' U' U' R U R' U R";
            }

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "orange")) {
                toTurn = "L U U L' U' L U' L' R' U' U' R U R' U R";
            }
        }
        if ((upperVertices[3][4] == true) && (upperVertices[2][4] == true)) {
            corner = upperVertices[0];
            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "red")) {
                toTurn = "F U U F' U' F U' F' B' U' U' B U B' U B F U U F' U' F U' F' B' U' U' B U B' U B";
            }

            if ((myCube[corner[0]][corner[1]][corner[2]]["top"] == "white")) {
                toTurn = "F U U F' U' F U' F' B' U' U' B U B' U B";
            }
        }
        return [toTurn, false];
    }
    if (val == 4) {

    }
}

function checkUpperVerticeCorrect(myCube) {
    let g = 0;
    let correctAlignedVertexCount = 0;
    for (let c = 0; c < 3; ++c) {
        g += 1
        let vertex = upperVertices[c];
        let i = vertex[0];
        let j = vertex[1];
        let k = vertex[2];
        let b = myCube[i][j][k];
        if (g == 1) {
            if (b["front"] == "red") {
                vertex[4] = true;
                correctAlignedVertexCount += 1;
            } else {
                vertex[4] = false;
            }
        }
        if (g == 2) {
            if (b["front"] == "red") {
                vertex[4] = true;
                correctAlignedVertexCount += 1;
            } else {
                vertex[4] = false;
            }
        }
        if (g == 3) {
            if (b["back"] == "orange") {
                vertex[4] = true;
                correctAlignedVertexCount += 1;
            } else {
                vertex[4] = false;
            }
        }
        if (g == 4) {
            if (b["back"] == "orange") {
                vertex[4] = true;
                correctAlignedVertexCount += 1;
            } else {
                vertex[4] = false;
            }
        }
    }
    return correctAlignedVertexCount;
}