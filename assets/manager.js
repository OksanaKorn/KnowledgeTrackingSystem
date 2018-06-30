$.getJSON( "http://localhost:3000/technologies", function( data ) {

    // Write the data into our global variable.
    developers = data;
    for (developer in developers) {
        for (tech in developer) {
            if(tech[tech] == "") {
                tech = undefined;
            }
        }
    }

    // Call a function to create HTML for all the products.
    generateAllDevelopersHTML(developers);

    // Manually trigger a hashchange to start the app.
    $(window).trigger('hashchange');
});

function generateAllDevelopersHTML(data){

    var list = $('.manager .developers-list');

    var theTemplateScript = $("#developers-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript);
    list.append (theTemplate(data));


    // Each products has a data-index attribute.
    // On click change the url hash to open up a preview for this product only.
    // Remember: every hashchange triggers the render function.
    // list.find('li').on('click', function (e) {
    //     e.preventDefault();

    //     var productIndex = $(this).data('index');

    //     window.location.hash = 'product/' + productIndex;
    // })
};

