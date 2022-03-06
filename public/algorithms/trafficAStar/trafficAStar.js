function aStarAlg(){
    if(startAlgorithm){
        let done = false;
        for(var k = 0; k < checkpoints.length; k++){
            if(!startAlgorithm){
                break;
            }
            done = false;
            while(done === false){
                if(!initialized){
                    currentEnd = checkpoints[k];
                    console.log("initialized")
                    openSet = [];
                    path = [];
                    closedSet = [];
                    if(k !== 0){
                        currentStart =checkpoints[k-1]
                    }
                    else{
                        currentStart = start;
                    }
                    openSet.push(currentStart);
                    initialized = true;
                    if(checkpoints.length > 1){
                        for(var i = 0; i < blockColumns; i++){
                            for(var j = 0; j < blockRows; j++){
                                quadGrid[i][j].f = 0;
                                quadGrid[i][j].g = 0
                                quadGrid[i][j].h = 0
                                quadGrid[i][j].previous = null;
                            }
                        }
                    }
                }

                if(openSet.length > 0){
                    var chosen = 0;
                    for(var i = 0; i < openSet.length; i++){
                        if(openSet[chosen].f > openSet[i].f){
                            chosen = i;
                        }
                    }

                    current = openSet[chosen];
                    removeFromArray(openSet, current);
                    closedSet.push(current);

                    if (current === currentEnd) {
                        console.log("done")
                        initialized = false;
                        firstStart = true;
                        done = true;
                        addPath(current, true);
                        if(k+1 === checkpoints.length){
                            startAlgorithm = false;
                            // renderPath();
                        }
                    }
                    else{
                        var neighbours = current.neighbours;
                        for(var i = 0; i < neighbours.length; i++){
                            var neighbour = neighbours[i];
                            if(!closedSet.includes(neighbour) && !neighbour.wall){
                                if(current.i !== neighbour.i && current.j !== neighbour.j){
                                    var tempG= current.g+(Math.sqrt(2));
                                }
                                else{
                                    var tempG= current.g+1;
                                }
                                var newPath = false
                                if (openSet.includes(neighbour)) {
                                    if(neighbour.g > tempG){
                                        neighbour.g = tempG;
                                        newPath = true;
                                    }
                                } else{
                                    neighbour.g = tempG;
                                    newPath = true;
                                    openSet.push(neighbour);
                                }
                                if(newPath){
                                    neighbour.previous = current;
                                    neighbour.h = heuristic(neighbour, currentEnd);
                                    neighbour.f = neighbour.g + neighbour.h;
                                }
                            }
                        }
                        addPath(current, false);
                    }
                } 
                else{
                    console.log("no solution");
                    firstStart = true;
                    startAlgorithm = false;
                    console.log(path);
                    path = [];
                    renderEssentials();
                    console.log(quadGrid);
                    done = true;
                    initialized = false;
                }
            }
        }
    }
}

function mainAlg(k){
    if(openSet.length > 0){
                    var chosen = 0;
                    for(var i = 0; i < openSet.length; i++){
                        if(openSet[chosen].f > openSet[i].f){
                            chosen = i;
                        }
                    }

                    current = openSet[chosen];
                    removeFromArray(openSet, current);
                    closedSet.push(current);

                    if (current === currentEnd) {
                        console.log("done")
                        initialized = false;
                        firstStart = true;
                        done = true;
                        addPath(current, true);
                        if(k+1 === checkpoints.length){
                            startAlgorithm = false;
                            // renderPath();
                        }
                    }
                    else{
                        var neighbours = current.neighbours;
                        for(var i = 0; i < neighbours.length; i++){
                            var neighbour = neighbours[i];
                            if(!closedSet.includes(neighbour) && !neighbour.wall){
                                if(current.i !== neighbour.i && current.j !== neighbour.j){
                                    var tempG= current.g+(Math.sqrt(2));
                                }
                                else{
                                    var tempG= current.g+1;
                                }
                                var newPath = false
                                if (openSet.includes(neighbour)) {
                                    if(neighbour.g > tempG){
                                        neighbour.g = tempG;
                                        newPath = true;
                                    }
                                } else{
                                    neighbour.g = tempG;
                                    newPath = true;
                                    openSet.push(neighbour);
                                }
                                if(newPath){
                                    neighbour.previous = current;
                                    neighbour.h = heuristic(neighbour, currentEnd);
                                    neighbour.f = neighbour.g + neighbour.h;
                                }
                            }
                        }
                        addPath(current, false);
                    }
                } 
                else{
                    console.log("no solution");
                    firstStart = true;
                    startAlgorithm = false;
                    console.log(path);
                    path = [];
                    renderEssentials();
                    console.log(quadGrid);
                    done = true;
                    initialized = false;
                }
}