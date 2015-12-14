Template.mainTemplate.events({
  'click .btnSignOut': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('/signinTemplate');
  },
  'click #loggedUser': function(){
    var user = Session.set('loggedUser',Meteor.userId());
  }

});
Template.mainTemplate.helpers({
  loggedUser: function(){
    var user = Meteor.user().emails[0].address;
    return user;
  },
  theUser: function(){
    return Session.get('loggedUser');
  },
  theImage: function(){
    return Meteor.user().profile.image;
  }
});
