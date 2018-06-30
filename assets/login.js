$(function() {
    $("form[name='login']").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },

      messages: {
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address",
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    //   submitHandler: function(form) {
    //     form.submit();
    //   }
    });
  });

// var email = "jackjack@gmail.com";
// var password = 123456;

$(document).ready(function(){
    $("#submitLogin").click(function(){
        if($("#login").valid()) {
            var email = $('#email').val();
            var password = $('#password').val();
            var flag = false;
            $.get("http://localhost:3000/users", function(data, status){
                for (var i = 0; i < data.length; i++) {
                    var user = data[i];
                    var reg = user.registrationInfo;
                    if (email == reg.email && password == reg.password) {
                    alert("you logged as " + reg.name + reg.lastName);
                    flag = true;
                    break;
                    }
                }
                if (!flag) alert("wrong email or password");
            })
        };
    });
});

//   function login(event) {

//     event.preventDefault();
  
//     var json = {
//       email : $('#email').val(),
//       password : $('#password').val()
//     };
  
//     var URL = "http://localhost:3000/users";
//     $.ajax({
//       url : URL,
//       type: "POST",	
//       data: JSON.stringify(json)
//     }).success(function(res) {
//       $('#log_form').css({ 'display' : 'none' });
//       $('#logged_user').css({ 'display' : 'block' });
//       hide_error();
//     }).error(function(res) {
//       $('#error_text').text("User/password is incorrect");
//       $('#error').css({ 'display' : '' });
//     });
//   }
