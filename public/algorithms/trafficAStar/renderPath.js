function renderPath(status){ 
    var tempArray = [];
    renderEssentials();
    console.log(finalPath);
    if(status === "pathComplete"){
        tempArray = finalPath[finalPath.length-1];
        tempArray.forEach(eachNewPath => {
            finalPath.push(eachNewPath);
        })
        removeFromArray(finalPath, finalPath[finalPath.length - tempArray.length -1])
    }
    for(var i = 0; i < finalPath.length; i++){
        if(finalPath[i] !== end && finalPath[i] !== start && !checkpoints.includes(finalPath[i])){
            finalPath[i].show(color(0, 255, 0));
        }
    }
    renderLine();
}

function addPath(current, foundCurrentEnd){
    path = []
    var temp = current;
    while (temp.previous) {
        path.push(temp);
        temp = temp.previous;
    }
    path.push(temp);
    const pathIndexes = path.length-1
    for(var i = pathIndexes; i >= 0; i--){
        path.push(path[i]);
        path.splice((pathIndexes-(pathIndexes-i)), 1);
    }
    if(foundCurrentEnd){
        finalPath.push(path);
        renderPath("pathComplete");
    } else{
        if(finalPath.length > 0){
            renderPath();
        }
        for(var i = 0; i < path.length; i++){
            if(path[i] !== end && path[i] !== start && !checkpoints.includes(path[i])){
                path[i].show(color(0, 255, 0));
            }
        }
    }
}

function renderLine(){
    if(finalPath[0] !== start){
        finalPath.unshift(start);
    }
    noFill();
    stroke(255);
    beginShape();

    for(var i = 0; i <= finalPath.length-1; i++){
        if(i !== 0){
            if(finalPath[i-1].i !== finalPath[i].i && finalPath[i-1].j !== finalPath[i].j){
                if(finalPath[i-1].i === finalPath[i].i+1){
                    if(finalPath[i-1].j === finalPath[i].j+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX) , (finalPath[i].nextY));
                    } else if(finalPath[i-1].j === finalPath[i].j-1){
                        line((finalPath[i].x)+w, (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                } else if(finalPath[i-1].i === finalPath[i].i-1){
                    if(finalPath[i-1].j === finalPath[i].j+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX)-w , (finalPath[i].nextY));
                    } else if(finalPath[i-1].j === finalPath[i].j-1){
                        line((finalPath[i].x), (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                }
            } else{
                if(finalPath[i-1].i !== finalPath[i].i){
                    if(finalPath[i-1].i === finalPath[i].i+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX) , (finalPath[i].nextY)-h/2);
                    } else if(finalPath[i-1].i === finalPath[i].i-1){
                        line((finalPath[i].x), (finalPath[i].y)+h/2, (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                }
                else if(finalPath[i-1].j !== finalPath[i].j){
                    if(finalPath[i-1].j === finalPath[i].j+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX)-w/2 , (finalPath[i].nextY));
                    } else if(finalPath[i-1].j === finalPath[i].j-1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                }
            }
        }
        if(i !== finalPath.length-1){
            if(finalPath[i+1].i !== finalPath[i].i && finalPath[i+1].j !== finalPath[i].j){
                if(finalPath[i+1].i === finalPath[i].i+1){
                    if(finalPath[i+1].j === finalPath[i].j+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX) , (finalPath[i].nextY));
                    } else if(finalPath[i+1].j === finalPath[i].j-1){
                        line((finalPath[i].x)+w, (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                } else if(finalPath[i+1].i === finalPath[i].i-1){
                    if(finalPath[i+1].j === finalPath[i].j+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX)-w , (finalPath[i].nextY));
                    } else if(finalPath[i+1].j === finalPath[i].j-1){
                        line((finalPath[i].x), (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                }
            } else{
                if(finalPath[i+1].i !== finalPath[i].i){
                    if(finalPath[i+1].i === finalPath[i].i+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, finalPath[i].nextX , (finalPath[i].nextY)-h/2);
                    } else if(finalPath[i+1].i === finalPath[i].i-1){
                        line((finalPath[i].x), (finalPath[i].y)+h/2, (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                }
                else if(finalPath[i+1].j !== finalPath[i].j){
                    if(finalPath[i+1].j === finalPath[i].j+1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y)+h/2, (finalPath[i].nextX)-w/2 , (finalPath[i].nextY));
                    } else if(finalPath[i+1].j === finalPath[i].j-1){
                        line((finalPath[i].x)+w/2, (finalPath[i].y), (finalPath[i].nextX)-w/2 , (finalPath[i].nextY)-h/2);
                    }
                }
            }
        }
    }
    endShape();
}