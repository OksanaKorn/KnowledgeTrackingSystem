var userName = localStorage.getItem("userName");

$(document).ready(function() {
document.getElementById("userName").innerHTML = userName;
});

$(function () {    
    
//     var technologies = [
//         {"tech": "JavaScript"},
//         {"tech": "CSS"},
//         {"tech": "HTML"},
//         {"tech": "Angular"},
//         {"tech": "React"},
//         {"tech": "SQL"},
//         {"tech": "C#"},
//         {"tech": "Java"},
//         {"tech": "Python"},
//         {"tech": "MongoDB"},
//         {"tech": "English"}
//     ];

//   function generateFormsOfTechnologies(technologies){

//     var list = $('.developer .technology');

//     var theTemplateScript = $("#technologies-template").html();
//     //Compile the template​
//     var theTemplate = Handlebars.compile (theTemplateScript);
//     list.append (theTemplate(technologies));
// }

// generateFormsOfTechnologies(technologies);

$(document).ready(function() {
$("#submitDeveloperKnow").click(function(e){



//    var knowelageInfo = {};
//    var formData = $("#technologies-form").serializeArray();

//  $.each(formData, function() {
//       if (knowelageInfo[this.name]) {
//          if (!knowelageInfo[this.name].push) {
//             knowelageInfo[this.name] = [knowelageInfo[this.name]];
//          }
//          knowelageInfo[this.name].push(this.value || "");
//      } else {
//         knowelageInfo[this.name] = this.value || "";
//      }

//     });
//     console.log(knowelageInfo);

    $.post("http://localhost:3000/technologies",
    {   
        id: "",
        name: userName,
        javascript: $('#javascript').val(),
        css: $("#css").val(),
        html: $("#html").val(),
        sql: $("#sql").val(),
        csharp: $("#csharp").val(),
        java: $("#java").val(),
        python: $("#python").val(),
        mongodb: $("#mongodb").val(),
        cplus: $("#cplus").val(),
        english: $("#english").val()
    },
    
);
   //   $.ajax(
   //   {
   //       url : "action.php",
   //       type: "POST",
   //       data : knowelageInfo,
 
   //   });
   //   e.preventDefault(); 
 });
 });
 
})

alert(userName);