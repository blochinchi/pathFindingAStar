var diagonalAllowed = false;

$(document).ready(function() {
    $('#customSwitch1').change(function() {
        if($(this).is(":checked")) {
            diagonalAllowed = true;
            addNeighbours();
            if(firstStart){
                startAlgo();
            }
        }
       else{
       		diagonalAllowed = false;
            removeAllDiagonalNeighbours();
            if(firstStart){
                startAlgo();
            }
       }
    });
});