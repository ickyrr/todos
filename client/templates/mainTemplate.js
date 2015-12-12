Template.mainTemplate.events({
  'click .btnSignOut': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('/signinTemplate');
  }
});
Template.mainTemplate.helpers({
  loggedUser: function(){
    var user = Meteor.user().emails[0].address;
    return user;
  }
});
