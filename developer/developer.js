var userName = localStorage.getItem("userName");

$(document).ready(function() {
document.getElementById("userName").innerHTML = userName;
});

$(function() {    
    $(document).ready(function() {
    $("#submitDeveloperKnow").click(function(e){
        $.post("http://localhost:3000/technologies",
        {   
            id: "",
            name: userName,
            javascript: $('#javascript').val() || undefined,
            css: $("#css").val() || undefined,
            html: $("#html").val() || undefined,
            sql: $("#sql").val() || undefined,
            csharp: $("#csharp").val() || undefined,
            java: $("#java").val() || undefined,
            python: $("#python").val() || undefined,
            mongodb: $("#mongodb").val() || undefined,
            cplus: $("#cplus").val() || undefined,
            english: $("#english").val() || undefined
        },
        
    );
    });
    });
 
})