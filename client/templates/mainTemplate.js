Template.mainTemplate.events({
  'click .btnSignOut': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
Template.mainTemplate.helpers({
  loggedUser: function(){
    var user = Meteor.user().emails[0].address;
    return user;
  }
});
