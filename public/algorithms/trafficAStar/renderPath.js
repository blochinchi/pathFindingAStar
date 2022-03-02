function renderPath(current){ 
    addPath(current);
    renderEssentials();
    finalPath.forEach(function(toRenderPath){
        for(var i = 0; i < toRenderPath.length; i++){
            if(toRenderPath[i] !== end && toRenderPath[i] !== start && !checkpoints.includes(toRenderPath[i])){
                toRenderPath[i].show(color(0, 255, 0));
            }
        }
        noFill();
        stroke(255, 0, 0);
        beginShape();
        // line(quadGrid[1][1].x, (quadGrid[1][1].y), quadGrid[1][1].nextX, (quadGrid[1][1].nextY));
        for(var i = 0; i < toRenderPath.length; i++){
            // vertex(toRenderPath[i].i * w + w/2, toRenderPath[i].j * h + h/2);
            if(i < toRenderPath.length-1){
                if(toRenderPath[i+1].i !== toRenderPath[i].i){
                    line(toRenderPath[i].x, (toRenderPath[i].y)+h/2, toRenderPath[i].nextX , (toRenderPath[i].nextY)-h/2);
                }
                else if(toRenderPath[i+1].j !== toRenderPath[i].j){
                    line((toRenderPath[i].x)+w/2, (toRenderPath[i].y), (toRenderPath[i].nextX)-w/2 , (toRenderPath[i].nextY));
                }
            }
        }
        endShape();
    })
}

function addPath(current){
    path = []
    var temp = current;
    path.push(temp)
    while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
    }
}

