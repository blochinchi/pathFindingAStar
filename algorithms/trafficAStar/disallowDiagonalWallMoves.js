function diagonalWallsFix(i, j, nature){
    quadGrid[i][j].neighbours.forEach(function(neighbour){
        if(neighbour.wall){
            let commonNeighbourOne;
            let commonNeighbourTwo;
            if(neighbour.j > j && neighbour.i > i){
                commonNeighbourOne = quadGrid[i][j+1]
                commonNeighbourTwo = quadGrid[i+1][j]
            }
            else if(neighbour.j > j && neighbour.i < i){
                commonNeighbourOne = quadGrid[i][j+1]
                commonNeighbourTwo = quadGrid[i-1][j]
            }
            else if(neighbour.j < j && neighbour.i > i){
                commonNeighbourOne = quadGrid[i][j-1]
                commonNeighbourTwo = quadGrid[i+1][j]
            }
            else if(neighbour.j < j && neighbour.i < i){
                commonNeighbourOne = quadGrid[i][j-1]
                commonNeighbourTwo = quadGrid[i-1][j]
            }
            if(commonNeighbourOne && commonNeighbourTwo){
                const toBeRemovedOne = commonNeighbourOne.neighbours.findIndex(function(neighbourToBeRemoved){return commonNeighbourTwo === neighbourToBeRemoved});
                const toBeRemovedTwo = commonNeighbourTwo.neighbours.findIndex(function(neighbourToBeRemoved){return commonNeighbourOne === neighbourToBeRemoved})
                if(nature === "add"){
                    if(toBeRemovedOne === -1){
                        commonNeighbourOne.neighbours.push(commonNeighbourTwo);
                    }
                    if(toBeRemovedTwo === -1){
                        commonNeighbourTwo.neighbours.push(commonNeighbourOne);
                    }
                }
                else if(nature === "remove"){
                    if(toBeRemovedOne !== -1){
                        commonNeighbourOne.neighbours.splice(toBeRemovedOne, 1);
                    }
                    if(toBeRemovedTwo !== -1){
                        commonNeighbourTwo.neighbours.splice(toBeRemovedTwo, 1);
                    }
                }
            }
        }
    })
}