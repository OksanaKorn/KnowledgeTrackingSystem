$(function() {
    $("form[name='registration']").validate({
      rules: {
        name: "required",
        lastName: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        role: "required"
      },

      messages: {
        name: "Please enter your firstname",
        lastName: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address",
        role: "Please choose a Role"
      },
    });
  });

  
  function selectView(role) {
    if (role == "developer") {
      window.location.href = "../developer/developerPage.html";
    } else if (role == "manager") {
      window.location.href = "../manager/manager.html";
    }
  }

  $(document).ready(function() {
    $("#submitRegistration").click(function(e){
      if($("#registration").valid()) {
        e.preventDefault(); 
        $.get("http://localhost:3000/users", function(data, status){
          var flag = false;
          var email = $('#email').val();
                for (var i = 0; i < data.length; i++) {
                    var user = data[i];
                    if (email == user.email) {
                      flag = true;
                      break;
                    }
                }
                if (!flag) {
                  var name =  $('#name').val();
                  var lastName = $('#lastName').val();
                  userName = name + " " + lastName;
                  if (typeof(Storage) !== "undefined") {
                      localStorage.setItem("userName", userName);
                  } else {
                      console.log("Sorry, your browser does not support Web Storage...");
                  }
                  $.post("http://localhost:3000/users",
                  {
                    id: "",
                    name: name,
                    lastName: lastName,
                    email: $('#email').val(),
                    password: $('#password').val(),
                    role: $('#role').val()
                  }
                );

                var role = $('#role').val();
                selectView(role);
                } else alert("user with this email already exists");})
              }});
     });
