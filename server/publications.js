Meteor.publish('theTodos', function(){
  return Todos.find({});
});

Meteor.publish('theTasks', function(){
  return Tasks.find({});
});
