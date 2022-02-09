function changeButton(){
    if($("button span").text() === "Start"){
        $("button").attr("onclick","changeButton(); restart();");
        $("button span").text("Restart");
    }
    else if($("button span").text() === "Restart"){
        $("button").attr("onclick", "changeButton(); startAlgo();")
        $("button span").text("Start");
    }
}