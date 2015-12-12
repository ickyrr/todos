Template.tasksTemplate.events({
  'submit .add-task-form': function(event){
    event.preventDefault();
    var task = event.target.taskInput.value;
    var todoItemID = Session.get('todoItemID');

    Meteor.call('addTask',todoItemID,task);

    event.target.taskInput.value = "";
  }
});

Template.tasksTemplate.helpers({
  todoName: function(){
    var todoItemID = Session.get('todoItemID');
    return Todos.findOne({_id: todoItemID},{fields:{todo: 1}});
  }
});
