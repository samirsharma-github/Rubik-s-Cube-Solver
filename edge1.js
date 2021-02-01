function solveEdge1(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "redgreen") || (colorOfCubes(i, j, k) == "greenred")) {
                    if (i == 1 && j == 0 && k == 0) {
                        if (b["front"] == "green") {
                            toTurn = "D R F"
                        }
                    }
                    if (i == 2 && j == 1 && k == 0) {
                        if (b["right"] == "red") {
                            toTurn = "D'";
                        }
                        if (b["right"] == "green") {
                            toTurn = "R F";
                        }
                    }
                    if (i == 1 && j == 2 && k == 0) {
                        if (b["back"] == "red") {
                            toTurn = "D D";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B R D'";
                        }
                    }
                    if (i == 0 && j == 1 && k == 0) {
                        if (b["left"] == "red") {
                            toTurn = "D";
                        }
                        if (b["left"] == "green") {
                            toTurn = "L' F'";
                        }
                    }
                    if (i == 0 && j == 0 && k == 1) {
                        if (b["front"] == "red") {
                            toTurn = "F'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "L D";
                        }
                    }
                    if (i == 2 && j == 0 && k == 1) {
                        if (b["front"] == "red") {
                            toTurn = "F";
                        }
                        if (b["front"] == "green") {
                            toTurn = "R' D'";
                        }
                    }
                    if (i == 2 && j == 2 && k == 1) {
                        if (b["back"] == "red") {
                            toTurn = "B' D D";
                        }
                        if (b["back"] == "green") {
                            toTurn = "R D'";
                        }
                    }
                    if (i == 0 && j == 2 && k == 1) {
                        if (b["back"] == "red") {
                            toTurn = "B D D";
                        }
                        if (b["back"] == "green") {
                            toTurn = "L' D";
                        }
                    }
                    if (i == 1 && j == 0 && k == 2) {
                        if (b["front"] == "red") {
                            toTurn = "F F";
                        }
                        if (b["front"] == "green") {
                            toTurn = "F' L D";
                        }
                    }
                    if (i == 2 && j == 1 && k == 2) {
                        if (b["right"] == "red") {
                            toTurn = "R R D'";
                        }
                        if (b["right"] == "green") {
                            toTurn = "R' F";
                        }
                    }
                    if (i == 1 && j == 2 && k == 2) {
                        if (b["back"] == "red") {
                            toTurn = "U U F F";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B B D' R F";
                        }
                    }
                    if (i == 0 && j == 1 && k == 2) {
                        if (b["left"] == "red") {
                            toTurn = "L L D";
                        }
                        if (b["left"] == "green") {
                            toTurn = "L F'";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}