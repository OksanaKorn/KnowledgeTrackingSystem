var userName = localStorage.getItem("userName");
    document.getElementById('userName').innerHTML = userName;

$.getJSON( "http://localhost:3000/technologies", function( data ) {
    var developers = data;
    for (var i = 0; i < data.length; i++) {
        var user = data[i];
        if(user.name == userName) {
            
        }
    }
})