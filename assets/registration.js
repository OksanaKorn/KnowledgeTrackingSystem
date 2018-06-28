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
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    //   submitHandler: function(form) {
    //     form.submit();
    //   }
    });
  });

  $(document).ready(function() {
    $("#submitRegistration").click(function(e){
      if($("#registration").valid()) {
       var registrationInfo = {};
       var formData = $("#registration").serializeArray();
       e.preventDefault(); 
    
     $.each(formData, function() {
          if (registrationInfo[this.name]) {
             if (!registrationInfo[this.name].push) {
                registrationInfo[this.name] = [registrationInfo[this.name]];
             }
             registrationInfo[this.name].push(this.value || "");
         } else {
            registrationInfo[this.name] = this.value || "";
         }
    
        });

        $.post("http://localhost:3000/users",
        {
          registrationInfo
        });
        console.log(registrationInfo);

     }});
     });
