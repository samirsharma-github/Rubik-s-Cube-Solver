function solveEdge2(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "yellowgreen") || (colorOfCubes(i, j, k) == "greenyellow")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 2 && j == 1 && k == 0) {
                        if (b["right"] == "green") {
                            toTurn = "D B D' R";
                        }
                    }
                    if (i == 1 && j == 2 && k == 0) {
                        if (b["back"] == "yellow") {
                            toTurn = "B B U R R ";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B R";
                        }
                    }
                    if (i == 0 && j == 1 && k == 0) {
                        if (b["left"] == "yellow") {
                            toTurn = "L L U U R R";
                        }
                        if (b["left"] == "green") {
                            toTurn = "L B' U R R";
                        }
                    }
                    if (i == 0 && j == 0 && k == 1) {
                        if (b["front"] == "green") {
                            toTurn = "L' U U R R";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "L' U B' R";
                        }
                    }
                    if (i == 2 && j == 0 && k == 1) {
                        if (b["front"] == "green") {
                            toTurn = "R'";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "D' F D";
                        }
                    }
                    if (i == 2 && j == 2 && k == 1) {
                        if (b["back"] == "yellow") {
                            toTurn = "R' U' B' R";
                        }
                        if (b["back"] == "green") {
                            toTurn = "R";
                        }
                    }
                    if (i == 0 && j == 2 && k == 1) {
                        if (b["back"] == "green") {
                            toTurn = "B B R";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "B' U R R";
                        }
                    }
                    if (i == 1 && j == 0 && k == 2) {
                        if (b["front"] == "yellow") {
                            toTurn = "U' R R";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U U B' R";
                        }
                    }
                    if (i == 2 && j == 1 && k == 2) {
                        if (b["right"] == "yellow") {
                            toTurn = "R R";
                        }
                        if (b["right"] == "green") {
                            toTurn = "U' B' R";
                        }
                    }
                    if (i == 1 && j == 2 && k == 2) {
                        if (b["back"] == "yellow") {
                            toTurn = "U R R";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B' R";
                        }
                    }
                    if (i == 0 && j == 1 && k == 2) {
                        if (b["left"] == "yellow") {
                            toTurn = "U U R R";
                        }
                        if (b["left"] == "green") {
                            toTurn = "U B' R";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}