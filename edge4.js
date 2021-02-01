function solveEdge4(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "whitegreen") || (colorOfCubes(i, j, k) == "greenwhite")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 0 && j == 1 && k == 0) {
                        if (b["left"] == "green") {
                            toTurn = "L L U B L' B'";
                        }
                    }
                    if (i == 0 && j == 0 && k == 1) {
                        if (b["front"] == "white") {
                            toTurn = "L' U B L' B'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "L";
                        }
                    }
                    if (i == 2 && j == 0 && k == 1) {
                        if (b["front"] == "white") {
                            toTurn = "F' U L L F";
                        }
                        if (b["front"] == "green") {
                            toTurn = "F F L F F";
                        }
                    }
                    if (i == 2 && j == 2 && k == 1) {
                        if (b["back"] == "white") {
                            toTurn = "B U B' U U L L";
                        }
                        if (b["back"] == "green") {
                            toTurn = "R' U R U L L";
                        }
                    }
                    if (i == 0 && j == 2 && k == 1) {
                        if (b["back"] == "white") {
                            toTurn = "B' U' B L L";
                        }
                        if (b["back"] == "green") {
                            toTurn = "L'";
                        }
                    }
                    if (i == 1 && j == 0 && k == 2) {
                        if (b["front"] == "white") {
                            toTurn = "U L L";
                        }
                        if (b["front"] == "green") {
                            toTurn = "F' L F";
                        }
                    }
                    if (i == 2 && j == 1 && k == 2) {
                        if (b["right"] == "white") {
                            toTurn = "U U L L";
                        }
                        if (b["right"] == "green") {
                            toTurn = "U F' L F";
                        }
                    }
                    if (i == 1 && j == 2 && k == 2) {
                        if (b["back"] == "white") {
                            toTurn = "U' L L";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U U F' L F";
                        }
                    }
                    if (i == 0 && j == 1 && k == 2) {
                        if (b["left"] == "white") {
                            toTurn = "L L";
                        }
                        if (b["left"] == "green") {
                            toTurn = "U' F' L F";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}