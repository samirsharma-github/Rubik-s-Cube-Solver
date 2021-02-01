function seeUpperVetices(myCube) {
    let totalVertexCorrect = 0;
    let q = 0;
    for (let c = 0; c < 4; ++c) {
        let vertex = upperVertices[c];
        q += 1;
        i = vertex[0];
        j = vertex[1];
        k = vertex[2];
        z = colorOfCubes(i, j, k);
        if (q == 1) {
            if ((z == "bluewhitered") || (z == "blueredwhite") || (z == "whitebluered") || (z == "whiteredblue") || (z == "redbluewhite") || (z == "redwhiteblue")) {
                vertex[3] = true;
                totalVertexCorrect += 1;
            } else {
                vertex[3] = false;
            }
        }
        if (q == 2) {
            if ((z == "blueredyellow") || (z == "blueyellowred") || (z == "redblueyellow") || (z == "redyellowblue") || (z == "yellowredblue") || (z == "yellowbluered")) {
                vertex[3] = true;
                totalVertexCorrect += 1;
            } else {
                vertex[3] = false;
            }
        }
        if (q == 3) {
            if ((z == "blueyelloworange") || (z == "blueorangeyellow") || (z == "yellowblueorange") || (z == "yelloworangeblue") || (z == "orangeblueyellow") || (z == "orangeyellowblue")) {
                vertex[3] = true;
                totalVertexCorrect += 1;
            } else {
                vertex[3] = false;
            }
        }
        if (q == 4) {
            if ((z == "blueorangewhite") || (z == "bluewhiteorange") || (z == "orangebluewhite") || (z == "orangewhiteblue") || (z == "whiteorangeblue") || (z == "whiteblueorange")) {
                vertex[3] = true;
                totalVertexCorrect += 1;
            } else {
                vertex[3] = false;
            }
        }
    }
    return totalVertexCorrect;
}

function correctUpperVertices(myCube) {
    toTurn = "";
    let correctUpperVerticesCount = seeUpperVetices(myCube);
    console.log(correctUpperVerticesCount);
    if (correctUpperVerticesCount == 4) {
        return ["", true];
    }
    while (correctUpperVerticesCount != 4) {
        while (correctUpperVerticesCount == 0) {
            toTurn = "L' U R U' L U R' U'";
            return [toTurn, false];
        }
        if (correctUpperVerticesCount == 1) {
            let s = 0;
            for (let c = 0; c < 4; ++c) {
                let vertex = upperVertices[c];
                s += 1;
                if (s == 1) {
                    if (vertex[3] == true) {
                        toTurn = "R U' L' U R' U' L U";
                        return [toTurn, false];
                    }
                } else if (s == 2) {
                    if (vertex[3] == true) {
                        toTurn = "U R U' L' U R' U' L";
                        return [toTurn, false];
                    }
                } else if (s == 3) {
                    if (vertex[3] == true) {
                        toTurn = "U U R U' L' U R' U' L U'";
                        return [toTurn, false];
                    }
                } else if (s == 4) {
                    if (vertex[3] == true) {
                        toTurn = "U' R U' L' U R' U' L U U";
                        return [toTurn, false];
                    }
                }
            }
        }
    }
}