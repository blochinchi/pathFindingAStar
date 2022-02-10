function DiagonalWallsFix(i, j, nature){
    let neighbouringDiagonals = [];
    let commonNeighbours = [];

    quadGrid[i][j].neighbours.forEach(function(neighbour){
        if(neighbour.wall){
            if(neighbour.i !== i && neighbour.j !== j){
                neighbouringDiagonals.push(neighbour)
            }
        }
    })

    console.log(neighbouringDiagonals);

    quadGrid[i][j].neighbours.forEach(function(neighbour){
        neighbouringDiagonals.forEach(function(neighbouringDiagonal){
            neighbouringDiagonal.neighbours.forEach(function(neighboursNeighbour){
                if(neighboursNeighbour === neighbour){
                    commonNeighbours.push(neighbour);
                }
            })
        })
    })

    // console.log(commonNeighbours);

    commonNeighbours.forEach(function(commonNeighbourOne){
        commonNeighbours.forEach(function(commonNeighbourTwo){
            if(commonNeighbourOne !== commonNeighbourTwo){
                if(nature === "add"){
                    commonNeighbourOne.neighbours.push(commonNeighbourTwo);
                }
                else if(nature === "remove"){
                    const neighbourToBeRemoved = commonNeighbourOne.neighbours.findIndex(function(neighbourToBeRemoved){return commonNeighbourTwo === neighbourToBeRemoved})
                    commonNeighbourOne.neighbours.splice(neighbourToBeRemoved, 1);
                }
            }
        })
    })
}
