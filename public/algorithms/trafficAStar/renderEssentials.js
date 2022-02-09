function renderEssentials(){
    background(0);

        for (var i = 0; i < blockColumns; i++) {
            for (var j = 0; j < blockRows; j++) {
                quadGrid[i][j].show(color(255));
            }
        }

        for(var i = 0; i < closedSet.length; i++){
            if (closedSet[i] !== end) {
                closedSet[i].show(color(255, 0, 0));
            }
        }

        end.show(color(255, 165, 0))

        for(var i = 0; i < openSet.length; i++){
            if(openSet[i] !== end){
                openSet[i].show(color(0, 0, 255))
            }
        }
}
