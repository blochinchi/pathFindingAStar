function renderPath(current){ 
    renderEssentials();
    path = []
    var temp = current;
    path.push(temp)
    while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
    }
                        
    for(var i = 0; i < path.length; i++){
        if(i != 0 && i!=path.length-1){
            path[i].show(color(0, 255, 0));
        }
    }

    noFill();
    stroke(255);
    beginShape();
    for(var i = 0; i < path.length; i++){
        vertex(path[i].i * w + w/2, path[i].j * h + h/2)
    }
    endShape();
}

