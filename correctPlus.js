function correctPlus(myCube) {
    let toTurn = "";
    let Aligned = checkAlignent(myCube);
    if ((Aligned == 0) || (Aligned == 1)) {
        return ["U", false];
    }
    if (Aligned == 2) {
        if ((upperEdges[0][4] == true) && (upperEdges[2][4] == true)) {
            toTurn = "B U U B' U' B U' B' U' U' R U U R' U' R U' R' U'";
        }
        if ((upperEdges[1][4] == true) && (upperEdges[3][4] == true)) {
            toTurn = "R U U R' U' R U' R' U' U' F U U F' U' F U' F' U'";
        }
        if ((upperEdges[3][4] == true) && (upperEdges[0][4] == true)) {
            toTurn += "B U U B' U' B U' B' U'";
        }
        if ((upperEdges[0][4] == true) && (upperEdges[1][4] == true)) {
            toTurn += "L U U L' U' L U' L' U'";
        }
        if ((upperEdges[1][4] == true) && (upperEdges[2][4] == true)) {
            toTurn += "F U U F' U' F U' F' U'";
        }
        if ((upperEdges[2][4] == true) && (upperEdges[3][4] == true)) {
            toTurn += "R U U R' U' R U' R' U'";
        }
    }
    if (Aligned == 4) {
        print("all alignments corrent");
    }
    return [toTurn, true];
}

function checkAlignent(myCube) {
    let a = 0
    let correctAlign = 0
    for (let c = 0; c < 4; ++c) {
        edg = upperEdges[c];
        a += 1;
        i = edg[0];
        j = edg[1];
        k = edg[2];
        b = myCube[i][j][k];
        if (a == 1) {
            if (b["front"] == "red") {
                correctAlign += 1;
                edg[4] = true;
            } else {
                edg[4] = false;
            }
        }
        if (a == 2) {
            if (b["right"] == "yellow") {
                correctAlign += 1;
                edg[4] = true;
            } else {
                edg[4] = false;
            }
        }
        if (a == 3) {
            if (b["back"] == "orange") {
                correctAlign += 1;
                edg[4] = true;
            } else {
                edg[4] = false;
            }
        }
        if (a == 4) {
            if (b["left"] == "white") {
                correctAlign += 1;
                edg[4] = true;
            } else {
                edg[4] = false;
            }
        }
    }
    return correctAlign;
}