function solveVertex1(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "redgreenwhite") || (colorOfCubes(i, j, k) == "redwhitegreen") || (colorOfCubes(i, j, k) == "greenredwhite") || (colorOfCubes(i, j, k) == "greenwhitered") || (colorOfCubes(i, j, k) == "whiteredgreen") || (colorOfCubes(i, j, k) == "whitegreenred")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 0 && j == 0 && k == 0) {
                        if (b["front"] == "green") {
                            toTurn = "F U F' U' U' L' U L";
                        }
                        if (b["front"] == "white") {
                            toTurn = "L' U' L U U F U' F'";
                        }
                    }
                    if (i == 2 && j == 0 && k == 0) {
                        if (b["front"] == "red") {
                            toTurn = "R U R' U' L' U L";
                        }
                        if (b["front"] == "green") {
                            toTurn = "F' U' F U U L' U' L";
                        }
                        if (b["front"] == "white") {
                            toTurn = "F' U' F U L' U L";
                        }
                    }
                    if (i == 2 && j == 2 && k == 0) {
                        if (b["back"] == "red") {
                            toTurn = "R' U' R U U L' U L";
                        }
                        if (b["back"] == "white") {
                            toTurn = "R' U' R F U' F'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B U B' L' U L";
                        }
                    }
                    if (i == 0 && j == 2 && k == 0) {
                        if (b["back"] == "red") {
                            toTurn = "L U L' U L' U' L";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B' U' B L' U' L";
                        }
                        if (b["back"] == "white") {
                            toTurn = "L U L' U' U' L' U' L";
                        }
                    }
                    if (i == 0 && j == 0 && k == 2) {
                        if (b["front"] == "red") {
                            toTurn = "U F U' F'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U' L' U L";
                        }
                        if (b["front"] == "white") {
                            toTurn = "L' U' F'";
                        }
                    }
                    if (i == 2 && j == 0 && k == 2) {
                        if (b["front"] == "red") {
                            toTurn = "U L' U' U' L U L' U' L";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U L' U' L";
                        }
                        if (b["front"] == "white") {
                            toTurn = "L' U L";
                        }
                    }
                    if (i == 2 && j == 2 && k == 2) {
                        if (b["back"] == "red") {
                            toTurn = "U' F U' F'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U L' U L";
                        }
                        if (b["back"] == "white") {
                            toTurn = "F' U U F L' U L";
                        }
                    }
                    if (i == 0 && j == 2 && k == 2) {
                        if (b["back"] == "red") {
                            toTurn = "U L' U' L U' L' U L";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U' L' U' L";
                        }
                        if (b["back"] == "white") {
                            toTurn = "U' F U F'";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}