function addNeighbours(){
    for(var i = 0; i < blockColumns; i++){
        for(var j = 0; j < blockRows; j++){
            if(!diagonalAllowed){
                if (i > 0) {
                    quadGrid[i][j].neighbours.push(quadGrid[i - 1][j]);
                }

                if (i < blockColumns - 1) {
                    quadGrid[i][j].neighbours.push(quadGrid[i + 1][j]);
                }

                if (j > 0) {
                    quadGrid[i][j].neighbours.push(quadGrid[i][j - 1]);
                }

                if (j < blockRows - 1) {
                    quadGrid[i][j].neighbours.push(quadGrid[i][j + 1]);
                }
            }
            if(diagonalAllowed){
                if (i > 0 && j > 0) {
                    quadGrid[i][j].neighbours.push(quadGrid[i - 1][j - 1]);
                }

                if (i < blockColumns - 1 && j > 0) {
                    quadGrid[i][j].neighbours.push(quadGrid[i + 1][j - 1]);
                }

                if (i < blockColumns - 1 && j < blockRows - 1) {
                    quadGrid[i][j].neighbours.push(quadGrid[i + 1][j + 1]);
                }

                if (i > 0 && j < blockRows - 1) {
                    quadGrid[i][j].neighbours.push(quadGrid[i - 1][j + 1]);
                }
                diagonalWallsFix(i, j, "remove");
            }
        }
    }
}