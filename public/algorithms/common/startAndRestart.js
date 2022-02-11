function startAlgo(){
    if(!start || !end){
        alert("please choose a start and ending point");
    }
    else{
        openSet = [start];
        closedSet = [];
        path = [];
        startAlgorithm = true;
        firstStart = true;
        finalPath = [];
        removeFromArray(checkpoints, end);
        checkpoints.push(end);
    }
}

function clearBoard(){
    solution = false;
    openSet = [];
    closedSet = [];
    path = [];
    startAlgorithm = false;
    firstStart = false;
    start = null;
    end = null;
    checkpoints = [];
    finalPath = [];
    setup();
}