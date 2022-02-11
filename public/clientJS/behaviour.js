var diagonalAllowed = false;
let currentButton;
let randomWall = 0;

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

function currentMode(clickedButtonId){
    if(currentButton){
        if(currentButton === clickedButtonId){
            currentButton = null;
        }
        else{
            currentButton = clickedButtonId;
        }
    }
    else{
        currentButton = clickedButtonId;
    }
    buttonAnimation();
}

function buttonAnimation(){
    if(currentButton === "wall"){;
        $("#start").removeClass("btn-primary").addClass("btn-outline-primary");
        $("#end").removeClass("btn-warning").addClass("btn-outline-warning");
        $("#checkpoint").removeClass("btn-info").addClass("btn-outline-info");
        $("#wall").toggleClass("btn-outline-dark btn-dark");
    }
    else if(currentButton === "start"){;
        $("#wall").removeClass("btn-dark").addClass("btn-outline-dark");
        $("#end").removeClass("btn-warning").addClass("btn-outline-warning");
        $("#checkpoint").removeClass("btn-info").addClass("btn-outline-info");
        $("#start").toggleClass("btn-outline-primary btn-primary");
    }
    else if(currentButton === "end"){;
        $("#start").removeClass("btn-primary").addClass("btn-outline-primary");
        $("#checkpoint").removeClass("btn-info").addClass("btn-outline-info");
        $("#wall").removeClass("btn-dark").addClass("btn-outline-dark");
        $("#end").toggleClass("btn-outline-warning btn-warning");
    }
    else if(currentButton === "checkpoint"){;
        $("#start").removeClass("btn-primary").addClass("btn-outline-primary");
        $("#end").removeClass("btn-warning").addClass("btn-outline-warning");
        $("#wall").removeClass("btn-dark").addClass("btn-outline-dark");
        $("#checkpoint").toggleClass("btn-outline-info btn-info");
    }
    else{
        $("#start").removeClass("btn-primary").addClass("btn-outline-primary");
        $("#end").removeClass("btn-warning").addClass("btn-outline-warning");
        $("#checkpoint").removeClass("btn-info").addClass("btn-outline-info");
        $("#wall").removeClass("btn-dark").addClass("btn-outline-dark");
    }
}

function wallVariable(){
    if($("#wallVariable")[0].value > 100){
        $("#wallVariable")[0].value = 100;
    }
    randomWall = $("#wallVariable")[0].value;
    console.log(randomWall);
    addWalls();
}