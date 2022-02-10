var diagonalAllowed = false;

$(document).ready(function() {
    $('#customSwitch1').change(function() {
        if($(this).is(":checked")) {
            diagonalAllowed = true;
        }
       else{
       		diagonalAllowed = false;
       }
    });
});