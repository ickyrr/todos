Template.profileTemplate.events({
  'change .myFileInput': function(event,template){
    event.preventDefault();
    FS.Utility.eachFile(event, function(file){
      Images.insert(file, function(err,fileObj){
        if(err){
          //handle error
          console.log('upload failed');
        } else{
          //handle success depending what you need to do
          var userId = Meteor.userId();
          var imagesURL = {
            'profile.image':'profile/cfs/files/images/' + fileObj._id
          };
          Meteor.call('uploadImage',userId,imagesURL);
          console.log('upload success');
        }
      });
    });
  }
});

Template.showProfileTemplate.helpers({
    theImage: function(){
      return Meteor.user().profile.image;
    },
    theEmail: function(){
      var user = Meteor.user().emails[0].address;
      return user;
    }
});
