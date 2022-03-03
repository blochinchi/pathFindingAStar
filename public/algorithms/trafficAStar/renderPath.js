function renderPath(){ 
    var tempArray = [];
    renderEssentials();
    // console.log(finalPath);
    finalPath.forEach(each2dPath => {
        each2dPath.forEach(eachPath => {
            tempArray.push(eachPath);
        })
    })
    finalPath = tempArray
    console.log(finalPath);
    for(var i = 0; i < finalPath.length; i++){
        if(finalPath[i] !== end && finalPath[i] !== start && !checkpoints.includes(finalPath[i])){
            finalPath[i].show(color(0, 255, 0));
        }
    }
    renderLine();
}

function addPath(current){
    path = []
    var temp = current;
    path.push(temp)
    while (temp.previous.previous) {
        path.push(temp.previous);
        temp = temp.previous;
    }
   const pathIndexes = path.length-1
    for(var i = pathIndexes; i >= 0; i--){
        path.push(path[i]);
        path.splice((pathIndexes-(pathIndexes-i)), 1);
    }
    finalPath.push(path);
    // console.log(path);
}

function renderLine(){
    noFill();
    stroke(255);
    beginShape();
    for(var i = 0; i < finalPath.length; i++){
        // vertex(finalPath[i].i * w + w/2, finalPath[i].j * h + h/2);
        if(i < finalPath.length-1){
            if(finalPath[i+1].i !== finalPath[i].i){
                line(finalPath[i].x, (finalPath[i].y)+h/2, finalPath[i].nextX , (finalPath[i].nextY)-h/2);
            }
            else if(finalPath[i+1].j !== finalPath[i].j){
                line((finalPath[i].x)+w/2, (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY));
            }
        }
    }
    endShape();
}