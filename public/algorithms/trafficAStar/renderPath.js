function renderPath(current){ 
    renderEssentials();
    addPath(current);
    finalPath.forEach(function(toRenderPath){
    for(var i = 0; i < toRenderPath.length; i++){
        if(i != 0 && i!=toRenderPath.length-1){
            toRenderPath[i].show(color(0, 255, 0));
        }
    }
    noFill();
    stroke(255);
    beginShape();
    for(var i = 0; i < toRenderPath.length; i++){
        vertex(toRenderPath[i].i * w + w/2, toRenderPath[i].j * h + h/2)
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