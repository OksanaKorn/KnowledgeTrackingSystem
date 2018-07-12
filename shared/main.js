function sentName() {
    var userName = $('#name').val();
    alert(userName);
};
// $(function () {
//     var developers;
//     $(document).ready(function(){
//         $.getJSON("http://localhost:3000/users", function(result){
//              developers = result;
//             });
//     });

//     // var developers = [
//     //     {   "id": 1,
//     //         "registrationInfo": {
//     //             "name": "Jack White",
//     //             "email": "jackjack@gmail.com",
//     //             "password": "123456"
//     //         },
//     //         "knowelageInfo": {
//     //             "javascript": "advanced",
//     //             "css": "advanced",
//     //             "html": "advanced",
//     //             "angular": "intermediate",
//     //             "react": "intermediate",
//     //             "sql": "beginner",
//     //             "csharp": "",
//     //             "java": "",
//     //             "python": "",
//     //             "mongodb": "beginner",
//     //             "english": "advanced"
//     //         }
//     //     },
    
//     //     {   "id": 2,
//     //         "registrationInfo": {
//     //             "name": "Bob Dilan",
//     //             "email": "bobbob@gmail.com",
//     //             "password": "123456"
//     //         },
//     //         "knowelageInfo": {
//     //             "javascript": "beginner",
//     //             "css": "beginner",
//     //             "html": "beginner",
//     //             "angular": "",
//     //             "react": "",
//     //             "sql": "beginner",
//     //             "csharp": "advanced",
//     //             "java": "",
//     //             "python": "",
//     //             "mongodb": "beginner",
//     //             "english": "advanced"
//     //         }
//     //     },

//     //     {   "id": 3,
//     //         "registrationInfo": {
//     //             "name": "Marilyn Manson",
//     //             "email": "mermer@gmail.com",
//     //             "password": "123456"
//     //         },
//     //         "knowelageInfo": {
//     //             "javascript": "beginner",
//     //             "css": "beginner",
//     //             "html": "beginner",
//     //             "angular": "",
//     //             "react": "",
//     //             "sql": "beginner",
//     //             "csharp": "advanced",
//     //             "java": "",
//     //             "python": "",
//     //             "mongodb": "beginner",
//     //             "english": "advanced"
//     //         }
//     //     }
//     //   ];
    

//     function generateAllDevelopers(developers){

// 		var list = $('.manager .developers-list');

// 		var theTemplateScript = $("#developers-template").html();
// 		//Compile the template​
// 		var theTemplate = Handlebars.compile (theTemplateScript);
// 		list.append (theTemplate(developers));


// 		// Each products has a data-index attribute.
// 		// On click change the url hash to open up a preview for this product only.
// 		// Remember: every hashchange triggers the render function.
// 		list.find('li').on('click', function (e) {
// 			e.preventDefault();

// 			var productIndex = $(this).developers('id');

// 			window.location.hash = 'product/' + productIndex;
// 		})
//     }
    
//     generateAllDevelopers(developers);
    

// });
