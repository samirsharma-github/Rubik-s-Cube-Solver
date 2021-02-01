function solveEdge8(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "orangewhite") || (colorOfCubes(i, j, k) == "whiteorange")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 0 && j == 2 && k == 1) {
                        if (b["back"] == "white") {
                            toTurn = "L U L' U' B' U' B U' L U L' U' B' U' B U";
                        }
                    }
                    if (i == 1 && j == 0 && k == 2) {
                        if (b["front"] == "orange") {
                            toTurn = "U' L U L' U' B' U' B U";
                        }
                        if (b["front"] == "white") {
                            toTurn = "B' U' B U L U L' U'";
                        }
                    }
                    if (i == 2 && j == 1 && k == 2) {
                        if (b["right"] == "orange") {
                            toTurn = "L U L' U' B' U' B U";
                        }
                        if (b["right"] == "white") {
                            toTurn = "U B' U' B U L U L' U'";
                        }
                    }
                    if (i == 1 && j == 2 && k == 2) {
                        if (b["back"] == "orange") {
                            toTurn = "U L U L' U' B' U' B U";
                        }
                        if (b["back"] == "white") {
                            toTurn = "U U B' U' B U L U L' U'";
                        }
                    }
                    if (i == 0 && j == 1 && k == 2) {
                        if (b["left"] == "orange") {
                            toTurn = "U U L U L' U' B' U' B U";
                        }
                        if (b["left"] == "white") {
                            toTurn = "U' B' U' B U L U L' U'";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}