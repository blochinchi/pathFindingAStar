function removeAllDiagonalNeighbours(){
    for(var i = 0; i < blockColumns; i++){
        for(var j = 0; j < blockRows; j++){
            if (i > 0 && j > 0) {
                const toBeRemoved = quadGrid[i][j].neighbours.findIndex(function(neighbourToBeRemoved){return quadGrid[i - 1][j - 1] === neighbourToBeRemoved})
                if(toBeRemoved !== -1){
                    quadGrid[i][j].neighbours.splice(toBeRemoved, 1);
                }
            }

            if (i < blockColumns - 1 && j > 0) {
                const toBeRemoved = quadGrid[i][j].neighbours.findIndex(function(neighbourToBeRemoved){return quadGrid[i + 1][j - 1] === neighbourToBeRemoved})
                if(toBeRemoved !== -1){
                    quadGrid[i][j].neighbours.splice(toBeRemoved, 1);
                }
            }

            if (i < blockColumns - 1 && j < blockRows - 1) {
                const toBeRemoved = quadGrid[i][j].neighbours.findIndex(function(neighbourToBeRemoved){return quadGrid[i + 1][j + 1] === neighbourToBeRemoved})
                if(toBeRemoved !== -1){
                    quadGrid[i][j].neighbours.splice(toBeRemoved, 1);
                }            
            }

            if (i > 0 && j < blockRows - 1) {
                const toBeRemoved = quadGrid[i][j].neighbours.findIndex(function(neighbourToBeRemoved){return quadGrid[i - 1][j + 1] === neighbourToBeRemoved})
                if(toBeRemoved !== -1){
                    quadGrid[i][j].neighbours.splice(toBeRemoved, 1);
                }
            }
        }
    }
}

