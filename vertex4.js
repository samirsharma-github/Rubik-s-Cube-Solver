function solveVertex4(myCube) {
    toTurn = "";
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 3; ++k) {
                b = myCube[i][j][k];
                if ((colorOfCubes(i, j, k) == "orangegreenwhite") || (colorOfCubes(i, j, k) == "orangewhitegreen") || (colorOfCubes(i, j, k) == "greenorangewhite") || (colorOfCubes(i, j, k) == "greenwhiteorange") || (colorOfCubes(i, j, k) == "whiteorangegreen") || (colorOfCubes(i, j, k) == "whitegreenorange")) {
                    console.log(i, j, k);
                    console.log(colorOfCubes(i, j, k));
                    if (i == 0 && j == 2 && k == 0) {
                        if (b["back"] == "white") {
                            toTurn = "L U L' U' L U L'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "B' U' B U U L U' L'";
                        }
                    }
                    if (i == 0 && j == 0 && k == 2) {
                        if (b["front"] == "white") {
                            toTurn = "U U L U' L'";
                        }
                        if (b["front"] == "green") {
                            toTurn = "B' U B";
                        }
                        if (b["front"] == "orange") {
                            toTurn = "U L U L' U' L U L' U' L U L'";
                        }
                    }
                    if (i == 2 && j == 0 && k == 2) {
                        if (b["front"] == "white") {
                            toTurn = "U' L U' L' U L U' L' U L U' L'";
                        }
                        if (b["front"] == "orange") {
                            toTurn = "U B' U B";
                        }
                        if (b["front"] == "green") {
                            toTurn = "U U B' U' B";
                        }
                    }
                    if (i == 2 && j == 2 && k == 2) {
                        if (b["back"] == "white") {
                            toTurn = "L U' L'";
                        }
                        if (b["back"] == "orange") {
                            toTurn = "U' U' B' U B U' B' U B U' B' U B";
                        }
                        if (b["back"] == "green") {
                            toTurn = "U U B' U B";
                        }
                    }
                    if (i == 0 && j == 2 && k == 2) {
                        if (b["back"] == "white") {
                            toTurn = "L U' L'";
                        }
                        if (b["back"] == "orange") {
                            toTurn = "L U L'";
                        }
                        if (b["back"] == "green") {
                            toTurn = "L U L' U' L U L' U' L U L' U'";
                        }
                    }
                    return toTurn;
                }
            }
        }
    }
}