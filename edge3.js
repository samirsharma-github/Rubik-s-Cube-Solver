function solveEdge3(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "orangegreen") || (colorOfCubes(i, j, k) == "greenorange")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 1 && j == 2 && k == 0) {
                        if (b["back"] == "green") {
                            toTurn = "B' D L' D'";
                        }
                    }
                    if (i == 0 && j == 1 && k == 0) {
                        if (b["left"] == "orange") {
                            toTurn = "L L U B B";
                        }
                        if (b["left"] == "green") {
                            toTurn = "L B";
                        }
                    }
                    if (i == 0 && j == 0 && k == 1) {
                        if (b["front"] == "orange") {
                            toTurn = "L L B";
                        }
                        if (b["front"] == "green") {
                            toTurn = "L' U B B";
                        }
                    }
                    if (i == 2 && j == 0 && k == 1) {
                        if (b["front"] == "orange") {
                            toTurn = "F' U' F U' B B";
                        }
                        if (b["front"] == "green") {
                            toTurn = "R U' R' B B";
                        }
                    }
                    if (i == 2 && j == 2 && k == 1) {
                        if (b["back"] == "orange") {
                            toTurn = "B'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B U' L' B";
                        }
                    }
                    if (i == 0 && j == 2 && k == 1) {
                        if (b["back"] == "orange") {
                            toTurn = "B";
                        }
                        if (b["back"] == "green") {
                            toTurn = "L U B B";
                        }
                    }
                    if (i == 1 && j == 0 && k == 2) {
                        if (b["front"] == "orange") {
                            toTurn = "U U B B";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U L' B";
                        }
                    }
                    if (i == 2 && j == 1 && k == 2) {
                        if (b["right"] == "orange") {
                            toTurn = "U' B B";
                        }
                        if (b["right"] == "green") {
                            toTurn = "U U L' B";
                        }
                    }
                    if (i == 1 && j == 2 && k == 2) {
                        if (b["back"] == "orange") {
                            toTurn = "B B";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U' L' B";
                        }
                    }
                    if (i == 0 && j == 1 && k == 2) {
                        if (b["left"] == "orange") {
                            toTurn = "D L L D'";
                        }
                        if (b["left"] == "green") {
                            toTurn = "L' B";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}