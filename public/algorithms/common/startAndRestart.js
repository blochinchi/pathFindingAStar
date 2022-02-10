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
    setup();
}