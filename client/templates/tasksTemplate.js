Template.tasksTemplate.events({
  'submit .add-task-form': function(events){
    event.preventDefault();
    var task = event.target.taskInput.value;
    var todoItemID = Session.get('todoItemID');

    Tasks.insert({
      _todoItemID: todoItemID,
      task: task,
      checked: false,
      createdAt: new Date()
    });

    event.target.taskInput.value = "";
  }
});

Template.tasksTemplate.helpers({
  todoName: function(){
    var todoItemID = Session.get('todoItemID');
    return Todos.findOne({_id: todoItemID},{fields:{todo: 1}});
  }
});
