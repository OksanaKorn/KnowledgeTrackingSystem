$.getJSON( "http://localhost:3000/technologies", function( data ) {

    
    for (var i = 0; i < data.length; i++) {
        var developer = data[i];
        for (var tech in developer) {
            if (tech[tech] === undefined) {
                tech = "nnn";
            }
    }
    var developers = data;
    }
    generateAllDevelopersHTML(developers);

})

function generateAllDevelopersHTML(data){

    var list = $('.manager .developers-list');

    var theTemplateScript = $("#developers-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript);
    list.append (theTemplate(data));
    
    var userName = localStorage.getItem("userName");
    document.getElementById('userName').innerHTML = userName;
};

