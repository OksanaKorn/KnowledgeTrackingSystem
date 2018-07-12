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

    // for (var developer in developers) {
    //     for (var tech in developer) {
    //         if(tech[tech] == "") {
    //             tech = "nkn";
    //         }
    //     }
    // }
    generateAllDevelopersHTML(developers);

})

    // $(window).trigger('hashchange');

function generateAllDevelopersHTML(data){

    var list = $('.manager .developers-list');

    var theTemplateScript = $("#developers-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript);
    list.append (theTemplate(data));
    
    var userName = localStorage.getItem("userName");
    document.getElementById('userName').innerHTML = userName;


    // Each products has a data-index attribute.
    // On click change the url hash to open up a preview for this product only.
    // Remember: every hashchange triggers the render function.
    // list.find('li').on('click', function (e) {
    //     e.preventDefault();

    //     var productIndex = $(this).data('index');

    //     window.location.hash = 'product/' + productIndex;
    // })
};

