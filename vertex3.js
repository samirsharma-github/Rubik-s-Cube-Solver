function solveVertex3(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                let a = (i, j, k);
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "orangegreenyellow") || (colorOfCubes(i, j, k) == "orangeyellowgreen") || (colorOfCubes(i, j, k) == "greenorangeyellow") || (colorOfCubes(i, j, k) == "greenyelloworange") || (colorOfCubes(i, j, k) == "yelloworangegreen") || (colorOfCubes(i, j, k) == "yellowgreenorange")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 2 && j == 2 && k == 0) {
                        if (b["back"] == "yellow") {
                            toTurn = "R' U' R U U B U' B'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B U B' U' U' R' U R";
                        }
                    }
                    if (i == 0 && j == 2 && k == 0) {
                        if (b["back"] == "yellow") {
                            toTurn = "B' U' B U R' U R";
                        }
                        if (b["back"] == "orange") {
                            toTurn = "L U L' B U B'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B' U' B U' B U' B'";
                        }
                    }
                    if (i == 0 && j == 0 && k == 2) {
                        if (b["front"] == "orange") {
                            toTurn = "U' B U' B'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U R' U R";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "U' B U' B' U B U' B' U B U' B'";
                        }
                    }
                    if (i == 2 && j == 0 && k == 2) {
                        if (b["front"] == "orange") {
                            toTurn = "U' U' R' U R U' R' U R U' R' U R";
                        }
                        if (b["front"] == "green") {
                            toTurn = "B U' B'";
                        }
                        if (b["front"] == "yellow") {
                            toTurn = "U' B U B'";
                        }
                    }
                    if (i == 2 && j == 2 && k == 2) {
                        if (b["back"] == "green") {
                            toTurn = "U' R' U R";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "B U B' U' B U B' U' B U B'";
                        }
                        if (b["back"] == "orange") {
                            toTurn = "U B U' B'";
                        }
                    }
                    if (i == 0 && j == 2 && k == 2) {
                        if (b["back"] == "orange") {
                            toTurn = "R' U R U' R' U R U' R' U R";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U R' U' R";
                        }
                        if (b["back"] == "yellow") {
                            toTurn = "U B U B'";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}