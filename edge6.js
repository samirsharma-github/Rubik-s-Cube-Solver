function solveEdge6(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "redyellow") || (colorOfCubes(i, j, k) == "yellowred")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 2 && j == 0 && k == 1) {
                        if (b["front"] == "yellow") {
                            toTurn = "F' U' F U R U R' U F' U' F U R U R' U'";
                        }
                    }
                    if (i == 2 && j == 2 && k == 1) {
                        if (b["back"] == "red") {
                            toTurn = "R' U' R U B U B' U' U' F' U' F U R U R' U'";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "B U B' U' R' U' R U F' U' F U R U R' U'";
                        }
                    }
                    if (i == 0 && j == 2 && k == 1) {
                        if (b["back"] == "red") {
                            toTurn = "L U L' U' B' U' B U U F' U' F U R U R' U'";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "B' U' B U L U L' U' F' U' F U R U R' U'";
                        }
                    }
                    if (i == 1 && j == 0 && k == 2) {
                        if (b["front"] == "red") {
                            toTurn = "U R U R' U' F' U' F U";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "U U F' U' F U R U R' U'";
                        }
                    }
                    if (i == 2 && j == 1 && k == 2) {
                        if (b["right"] == "red") {
                            toTurn = "U U R U R' U' F' U' F U";
                        }
                        if (b["right"] == "yellow") {
                            toTurn = "U' F' U' F U R U R' U'";
                        }
                    }
                    if (i == 1 && j == 2 && k == 2) {
                        if (b["back"] == "red") {
                            toTurn = "U' R U R' U' F' U' F U";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "F' U' F U R U R' U'";
                        }
                    }
                    if (i == 0 && j == 1 && k == 2) {
                        if (b["left"] == "red") {
                            toTurn = "R U R' U' F' U' F U";
                        }
                        if (b["left"] == "yellow") {
                            toTurn = "U F' U' F U R U R' U'";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}