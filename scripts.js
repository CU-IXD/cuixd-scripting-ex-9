$(function(){
    $(".form-control").on("input", handle_input);
});

function handle_input(e){
    
    // Obtain the relevant numeric field values
    var distance = Number($("#distance").val());
    var hr = Number($("#duration-hr").val());
    var min = Number($("#duration-min").val());
    var sec = Number($("#duration-sec").val());
    
    // Obtain the text value for the units
    var unit = $("#distance-units").val();
    
    // Calculate pace
    var duration = hr + (min/60) + (sec/3600);
    var pace = distance / duration;
    
    // Write updated values onto the page
    $("#pace").text(pace.toFixed(2));
    $("#pace-unit").text(unit);
} 