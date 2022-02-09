function startAlgo(){
    startAlgorithm = true;
}

function restart(){
    openSet = [];
    closedSet = [];
    path = [];
    startAlgorithm = false;
    setup();
}