function turn(a) {
  let edgeArr = [];
  let faceArr = [];
  if (a == "F'" || a == "F") {
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[i][0][2]["top"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2][0][2 - i]["right"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2 - i][0][0]["bottom"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[0][0][i]["left"]);
    }
    if (a == "F'") {
      var edgeArrPart = edgeArr.slice(0, 3);
      edgeArr = edgeArr.slice(3);
      edgeArr = edgeArr.concat(edgeArrPart);
      // console.log(edgeArr);
    } else {
      var edgeArrPart = edgeArr.slice(9, 12);
      edgeArr = edgeArr.slice(0, 9);
      edgeArr = edgeArrPart.concat(edgeArr);
      // console.log(edgeArr);
    }
    for (let i = 0; i < 3; ++i) {
      myCube[i][0][2]["top"] = edgeArr[i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2][0][2 - i]["right"] = edgeArr[3 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2 - i][0][0]["bottom"] = edgeArr[6 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[0][0][i]["left"] = edgeArr[9 + i];
    }


    faceArr.push(myCube[0][0][2]["front"]);
    faceArr.push(myCube[1][0][2]["front"]);
    faceArr.push(myCube[2][0][2]["front"]);
    faceArr.push(myCube[2][0][1]["front"]);
    faceArr.push(myCube[2][0][0]["front"]);
    faceArr.push(myCube[1][0][0]["front"]);
    faceArr.push(myCube[0][0][0]["front"]);
    faceArr.push(myCube[0][0][1]["front"]);
    if (a == "F'") {
        var faceArrPart = faceArr.slice(0, 2);
        faceArr =faceArr.slice(2);
        faceArr = faceArr.concat(faceArrPart);
      } else {
        var faceArrPart = faceArr.slice(6, 8);
        faceArr = faceArr.slice(0, 6);
        faceArr = faceArrPart.concat(faceArr);
      }
    myCube[0][0][2]["front"] = faceArr[0];
    myCube[1][0][2]["front"] = faceArr[1];
    myCube[2][0][2]["front"] = faceArr[2];
    myCube[2][0][1]["front"] = faceArr[3];
    myCube[2][0][0]["front"] = faceArr[4];
    myCube[1][0][0]["front"] = faceArr[5];
    myCube[0][0][0]["front"] = faceArr[6];
    myCube[0][0][1]["front"] = faceArr[7];
  }



  if (a == "B'" || a == "B") {
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[i][2][2]["top"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2][2][2 - i]["right"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2 - i][2][0]["bottom"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[0][2][i]["left"]);
    }
    if (a == "B") {
      var edgeArrPart = edgeArr.slice(0, 3);
      edgeArr = edgeArr.slice(3);
      edgeArr = edgeArr.concat(edgeArrPart);
      // console.log(edgeArr);
    } else {
      var edgeArrPart = edgeArr.slice(9, 12);
      edgeArr = edgeArr.slice(0, 9);
      edgeArr = edgeArrPart.concat(edgeArr);
      // console.log(edgeArr);
    }
    for (let i = 0; i < 3; ++i) {
      myCube[i][2][2]["top"] = edgeArr[i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2][2][2 - i]["right"] = edgeArr[3 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2 - i][2][0]["bottom"] = edgeArr[6 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[0][2][i]["left"] = edgeArr[9 + i];
    }


    faceArr.push(myCube[0][2][2]["back"]);
    faceArr.push(myCube[1][2][2]["back"]);
    faceArr.push(myCube[2][2][2]["back"]);
    faceArr.push(myCube[2][2][1]["back"]);
    faceArr.push(myCube[2][2][0]["back"]);
    faceArr.push(myCube[1][2][0]["back"]);
    faceArr.push(myCube[0][2][0]["back"]);
    faceArr.push(myCube[0][2][1]["back"]);
    if (a == "B") {
        var faceArrPart = faceArr.slice(0, 2);
        faceArr =faceArr.slice(2);
        faceArr = faceArr.concat(faceArrPart);
      } else {
        var faceArrPart = faceArr.slice(6, 8);
        faceArr = faceArr.slice(0, 6);
        faceArr = faceArrPart.concat(faceArr);
      }
    myCube[0][2][2]["back"] = faceArr[0];
    myCube[1][2][2]["back"] = faceArr[1];
    myCube[2][2][2]["back"] = faceArr[2];
    myCube[2][2][1]["back"] = faceArr[3];
    myCube[2][2][0]["back"] = faceArr[4];
    myCube[1][2][0]["back"] = faceArr[5];
    myCube[0][2][0]["back"] = faceArr[6];
    myCube[0][2][1]["back"] = faceArr[7];
  }



  if (a == "U" || a == "U'") {
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[i][2][2]["back"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2][2 - i][2]["right"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2 - i][0][2]["front"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[0][i][2]["left"]);
    }
    if (a == "U'") {
      var edgeArrPart = edgeArr.slice(0, 3);
      edgeArr = edgeArr.slice(3);
      edgeArr = edgeArr.concat(edgeArrPart);
      // console.log(edgeArr);
    } else {
      var edgeArrPart = edgeArr.slice(9, 12);
      edgeArr = edgeArr.slice(0, 9);
      edgeArr = edgeArrPart.concat(edgeArr);
      // console.log(edgeArr);
    }
    for (let i = 0; i < 3; ++i) {
      myCube[i][2][2]["back"] = edgeArr[i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2][2 - i][2]["right"] = edgeArr[3 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2 - i][0][2]["front"] = edgeArr[6 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[0][i][2]["left"] = edgeArr[9 + i];
    }

    faceArr.push(myCube[0][2][2]["top"]);
    faceArr.push(myCube[1][2][2]["top"]);
    faceArr.push(myCube[2][2][2]["top"]);
    faceArr.push(myCube[2][1][2]["top"]);
    faceArr.push(myCube[2][0][2]["top"]);
    faceArr.push(myCube[1][0][2]["top"]);
    faceArr.push(myCube[0][0][2]["top"]);
    faceArr.push(myCube[0][1][2]["top"]);
    if (a == "U'") {
        var faceArrPart = faceArr.slice(0, 2);
        faceArr =faceArr.slice(2);
        faceArr = faceArr.concat(faceArrPart);
      } else {
        var faceArrPart = faceArr.slice(6, 8);
        faceArr = faceArr.slice(0, 6);
        faceArr = faceArrPart.concat(faceArr);
      }
    myCube[0][2][2]["top"] = faceArr[0];
    myCube[1][2][2]["top"] = faceArr[1];
    myCube[2][2][2]["top"] = faceArr[2];
    myCube[2][1][2]["top"] = faceArr[3];
    myCube[2][0][2]["top"] = faceArr[4];
    myCube[1][0][2]["top"] = faceArr[5];
    myCube[0][0][2]["top"] = faceArr[6];
    myCube[0][1][2]["top"] = faceArr[7];

  }



  if (a == "D" || a == "D'") {
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[i][2][0]["back"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2][2 - i][0]["right"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[2 - i][0][0]["front"]);
    }
    for (let i = 0; i < 3; ++i) {
      edgeArr.push(myCube[0][i][0]["left"]);
    }
    if (a == "D") {
      var edgeArrPart = edgeArr.slice(0, 3);
      edgeArr = edgeArr.slice(3);
      edgeArr = edgeArr.concat(edgeArrPart);
      // console.log(edgeArr);
    } else {
      var edgeArrPart = edgeArr.slice(9, 12);
      edgeArr = edgeArr.slice(0, 9);
      edgeArr = edgeArrPart.concat(edgeArr);
      // console.log(edgeArr);
    }
    for (let i = 0; i < 3; ++i) {
      myCube[i][2][0]["back"] = edgeArr[i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2][2 - i][0]["right"] = edgeArr[3 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[2 - i][0][0]["front"] = edgeArr[6 + i];
    }
    for (let i = 0; i < 3; ++i) {
      myCube[0][i][0]["left"] = edgeArr[9 + i];
    }

    faceArr.push(myCube[0][2][0]["bottom"]);
    faceArr.push(myCube[1][2][0]["bottom"]);
    faceArr.push(myCube[2][2][0]["bottom"]);
    faceArr.push(myCube[2][1][0]["bottom"]);
    faceArr.push(myCube[2][0][0]["bottom"]);
    faceArr.push(myCube[1][0][0]["bottom"]);
    faceArr.push(myCube[0][0][0]["bottom"]);
    faceArr.push(myCube[0][1][0]["bottom"]);
    if (a == "D") {
        var faceArrPart = faceArr.slice(0, 2);
        faceArr =faceArr.slice(2);
        faceArr = faceArr.concat(faceArrPart);
      } else {
        var faceArrPart = faceArr.slice(6, 8);
        faceArr = faceArr.slice(0, 6);
        faceArr = faceArrPart.concat(faceArr);
      }
    myCube[0][2][0]["bottom"] = faceArr[0];
    myCube[1][2][0]["bottom"] = faceArr[1];
    myCube[2][2][0]["bottom"] = faceArr[2];
    myCube[2][1][0]["bottom"] = faceArr[3];
    myCube[2][0][0]["bottom"] = faceArr[4];
    myCube[1][0][0]["bottom"] = faceArr[5];
    myCube[0][0][0]["bottom"] = faceArr[6];
    myCube[0][1][0]["bottom"] = faceArr[7];
  }


  if(a == "R" || a == "R'"){
      for(let i = 0; i < 3; ++i){
        edgeArr.push(myCube[2][i][2]["top"]);
      }
      for(let i = 0; i < 3; ++i){
        edgeArr.push(myCube[2][2][2-i]["back"]);
      }
      for(let i = 0; i < 3; ++i){
        edgeArr.push(myCube[2][2-i][0]["bottom"]);
      }
      for(let i = 0; i < 3; ++i){
        edgeArr.push(myCube[2][0][i]["front"]);
      }
      if (a == "R'") {
        var edgeArrPart = edgeArr.slice(0, 3);
        edgeArr = edgeArr.slice(3);
        edgeArr = edgeArr.concat(edgeArrPart);
        // console.log(edgeArr);
      } else {
        var edgeArrPart = edgeArr.slice(9, 12);
        edgeArr = edgeArr.slice(0, 9);
        edgeArr = edgeArrPart.concat(edgeArr);
        // console.log(edgeArr);
      }
      for(let i = 0; i < 3; ++i){
        myCube[2][i][2]["top"] = edgeArr[i];
      }
      for(let i = 0; i < 3; ++i){
        myCube[2][2][2-i]["back"] = edgeArr[3+i];
      }
      for(let i = 0; i < 3; ++i){
        myCube[2][2-i][0]["bottom"] = edgeArr[6+i];
      }
      for(let i = 0; i < 3; ++i){
        myCube[2][0][i]["front"] = edgeArr[9+i];
    }


    faceArr.push(myCube[2][0][2]["right"]);
    faceArr.push(myCube[2][1][2]["right"]);
    faceArr.push(myCube[2][2][2]["right"]);
    faceArr.push(myCube[2][2][1]["right"]);
    faceArr.push(myCube[2][2][0]["right"]);
    faceArr.push(myCube[2][1][0]["right"]);
    faceArr.push(myCube[2][0][0]["right"]);
    faceArr.push(myCube[2][0][1]["right"]);
    if (a == "R'") {
        var faceArrPart = faceArr.slice(0, 2);
        faceArr =faceArr.slice(2);
        faceArr = faceArr.concat(faceArrPart);
      } else {
        var faceArrPart = faceArr.slice(6, 8);
        faceArr = faceArr.slice(0, 6);
        faceArr = faceArrPart.concat(faceArr);
      }
    myCube[2][0][2]["right"] = faceArr[0];
    myCube[2][1][2]["right"] = faceArr[1];
    myCube[2][2][2]["right"] = faceArr[2];
    myCube[2][2][1]["right"] = faceArr[3];
    myCube[2][2][0]["right"] = faceArr[4];
    myCube[2][1][0]["right"] = faceArr[5];
    myCube[2][0][0]["right"] = faceArr[6];
    myCube[2][0][1]["right"] = faceArr[7];
  }




  if(a == "L" || a == "L'"){
    for(let i = 0; i < 3; ++i){
      edgeArr.push(myCube[0][i][2]["top"]);
    }
    for(let i = 0; i < 3; ++i){
      edgeArr.push(myCube[0][2][2-i]["back"]);
    }
    for(let i = 0; i < 3; ++i){
      edgeArr.push(myCube[0][2-i][0]["bottom"]);
    }
    for(let i = 0; i < 3; ++i){
      edgeArr.push(myCube[0][0][i]["front"]);
    }
    if (a == "L") {
      var edgeArrPart = edgeArr.slice(0, 3);
      edgeArr = edgeArr.slice(3);
      edgeArr = edgeArr.concat(edgeArrPart);
      // console.log(edgeArr);
    } else {
      var edgeArrPart = edgeArr.slice(9, 12);
      edgeArr = edgeArr.slice(0, 9);
      edgeArr = edgeArrPart.concat(edgeArr);
      // console.log(edgeArr);
    }
    for(let i = 0; i < 3; ++i){
      myCube[0][i][2]["top"] = edgeArr[i];
    }
    for(let i = 0; i < 3; ++i){
      myCube[0][2][2-i]["back"] = edgeArr[3+i];
    }
    for(let i = 0; i < 3; ++i){
      myCube[0][2-i][0]["bottom"] = edgeArr[6+i];
    }
    for(let i = 0; i < 3; ++i){
      myCube[0][0][i]["front"] = edgeArr[9+i];
  }
    faceArr.push(myCube[0][0][2]["left"]);
    faceArr.push(myCube[0][1][2]["left"]);
    faceArr.push(myCube[0][2][2]["left"]);
    faceArr.push(myCube[0][2][1]["left"]);
    faceArr.push(myCube[0][2][0]["left"]);
    faceArr.push(myCube[0][1][0]["left"]);
    faceArr.push(myCube[0][0][0]["left"]);
    faceArr.push(myCube[0][0][1]["left"]);
    if (a == "L") {
        var faceArrPart = faceArr.slice(0, 2);
        faceArr =faceArr.slice(2);
        faceArr = faceArr.concat(faceArrPart);
      } else {
        var faceArrPart = faceArr.slice(6, 8);
        faceArr = faceArr.slice(0, 6);
        faceArr = faceArrPart.concat(faceArr);
      }
    myCube[0][0][2]["left"] = faceArr[0];
    myCube[0][1][2]["left"] = faceArr[1];
    myCube[0][2][2]["left"] = faceArr[2];
    myCube[0][2][1]["left"] = faceArr[3];
    myCube[0][2][0]["left"] = faceArr[4];
    myCube[0][1][0]["left"] = faceArr[5];
    myCube[0][0][0]["left"] = faceArr[6];
    myCube[0][0][1]["left"] = faceArr[7];
}
update(myCube);
return myCube;
}
turns = ["U", "U'", "D", "D'", "R", "R'", "L", "L'", "F", "F'", "B", "B'"];
function shuffle(b){
  let toTurn = [];
  for(let i = 0; i<b; ++i ){
    toTurn.push(turns[Math.floor(Math.random()*12)]);
    // console.log(toTurn);
    // turn(toTurn);
  }
  return toTurn;
}