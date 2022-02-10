function diagonalWallsFix(i, j, nature){
    let neighbouringDiagonals = [];

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
                if(nature === "add"){
                    commonNeighbourOne.neighbours.push(commonNeighbourTwo);
                    commonNeighbourTwo.neighbours.push(commonNeighbourOne);
                }
                else if(nature === "remove"){
                    commonNeighbourOne.neighbours.splice(commonNeighbourOne.neighbours.findIndex(function(neighbourToBeRemoved){return commonNeighbourTwo === neighbourToBeRemoved}), 1);
                    commonNeighbourTwo.neighbours.splice(commonNeighbourTwo.neighbours.findIndex(function(neighbourToBeRemoved){return commonNeighbourOne === neighbourToBeRemoved}), 1);
                }
            }
        }
    })
}