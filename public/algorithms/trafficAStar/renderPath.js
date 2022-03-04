function renderPath(){ 
    var tempArray = [];
    renderEssentials();
    finalPath.forEach(each2dPath => {
        each2dPath.forEach(eachPath => {
            tempArray.push(eachPath);
        })
    })
    finalPath = tempArray
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