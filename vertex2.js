function solveVertex2(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "redgreenyellow") || (colorOfCubes(i, j, k) == "redyellowgreen") || (colorOfCubes(i, j, k) == "greenredyellow") || (colorOfCubes(i, j, k) == "greenyellowred") || (colorOfCubes(i, j, k) == "yellowredgreen") || (colorOfCubes(i, j, k) == "yellowgreenred")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 2 && j == 0 && k == 0) {
                        if (b["front"] == "green") {
                            toTurn = "F' U' F U U R U' R'";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "R U R' U' R U R'";
                        }
                    }
                    if (i == 2 && j == 2 && k == 0) {
                        if (b["back"] == "red") {
                            toTurn = "R U' R U U  F' U' F";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B U B' R U R'";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "R' U' R U F' U F";
                        }
                    }
                    if (i == 0 && j == 2 && k == 0) {
                        if (b["back"] == "red") {
                            toTurn = "B' U' B U' R U R'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B' U' B R U' R'";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "L U L' U R U R'";
                        }
                    }
                    if (i == 0 && j == 0 && k == 2) {
                        if (b["front"] == "red") {
                            toTurn = "R U' U' R' U R U' R'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U' R U R'";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "R U' R'";
                        }
                    }
                    if (i == 2 && j == 0 && k == 2) {
                        if (b["front"] == "red") {
                            toTurn = "R U R'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U R U' R'";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "U R U' R' U R U' R' U R U' R'";
                        }
                    }
                    if (i == 2 && j == 2 && k == 2) {
                        if (b["back"] == "red") {
                            toTurn = "U R U R' U' R U R' U' R U R'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "F' U F";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "U U R U' R'";
                        }
                    }
                    if (i == 0 && j == 2 && k == 2) {
                        if (b["back"] == "red") {
                            toTurn = "U U R U R'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U' R U' R'";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "U F' U F U' F' U F U' F' U F";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}