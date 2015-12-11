Template.signinTemplate.events({
  'submit .sign-in-form':function(event){
    event.preventDefault();
    var email = $('[name=loginEmail]').val();
    var password = $('[name=logPassword]').val();
    Meteor.loginWithPassword(email, password);
  }
});

//Sign in Validation
// Template.signinTemplate.onRendered(function(event){
//   $('.sign-in-form').validate({
//         rules: {
//           loginEmail:{
//               required: true,
//               email: true
//           },
//           logPassword: {
//               required: true,
//               password: true
//           }
//         }
//   });
// });
