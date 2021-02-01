function makePlus(myCube) {
    let totalFaceUp = 0;
    let toTurn = "";
    for (let p = 0; p < 4; ++p) {
        edg = upperEdges[p];
        i = edg[0];
        j = edg[1];
        k = edg[2];
        b = myCube[i][j][k];
        console.log(b["top"]);
        if (b["top"] == "blue") {
            totalFaceUp += 1;
            edg[3] = true;
        }
    }
    console.log(totalFaceUp);
    console.log(totalFaceUp);
    console.log(totalFaceUp);
    console.log(totalFaceUp);
    console.log(totalFaceUp);
    console.log(totalFaceUp);
    console.log(totalFaceUp);
    if (totalFaceUp == 0) {
        toTurn = "F R U R' U' F' B L U L' U' B' F R U R' U' F'";
    }
    if (totalFaceUp == 2) {
        if ((upperEdges[0][3] == true) && (upperEdges[2][3] == true)) {
            toTurn = "R B U B' U' R'";
        }
        if ((upperEdges[1][3] == true) && (upperEdges[3][3] == true)) {
            toTurn = "F R U R' U' F'";
        }
        if ((upperEdges[1][3] == true) && (upperEdges[2][3] == true)) {
            toTurn = "L F U F' U' F U F' U' L'";
        }
        if ((upperEdges[2][3] == true) && (upperEdges[3][3] == true)) {
            toTurn = "F R U R' U' R U R' U' F'";
        }
        if ((upperEdges[3][3] == true) && (upperEdges[0][3] == true)) {
            toTurn = "R B U B' U' B U B' U' R'";
        }
        if ((upperEdges[0][3] == true) && (upperEdges[1][3] == true)) {
            toTurn = "B L U L' U' L U L' U' B'";
        }
    }
    return toTurn;
}