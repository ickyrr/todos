Template.signupTemplate.events({
  'submit .sign-up-form':function(event){
    event.preventDefault();
  }
});

//Sign up Validation
Template.signupTemplate.onRendered(function(event){
    $('.sign-up-form').validate({
      rules:{
        registerEmail: {
          required: true,
          email: true
        },
        registerPassword: {
          required: true,
          minlength: 8
        },
        rePassword:{
          minlength: 8,
          equalTo: '#registerPassword'
        }
      },
      messages: {
        registerEmail: {
          required: "Email address is required for verification purposes",
          email: "Please enter a valid email address"
        },
        registerPassword: {
          required: "Please enter a password",
          minlength: "You password must be at least 8 characters long"
        },
        rePassword: {
          equalTo: "Both password fields must match"
        }
      },
      submitHandler(){
        let email = $('[name=registerEmail]').val(),
            password = $('[name=registerPassword]').val();

            console.log(email, password);

            Accounts.createUser({
              email: email,
              password: password
            },function(error){
              // console.log(error.reason);
            });
            Router.go('/');
      }
    });
});
