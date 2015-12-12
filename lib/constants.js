Meteor.methods({
  // TODOS
  addTodos: function(todo, ownerId){
    Todos.insert({
      todo: todo,
      createdBy: ownerId,
      createdAt: new Date()
    });
  },
  removeTodo: function(todoId){
    Todos.remove({_id: todoId});
  },
  updateTodo: function(todoItem, todo){
    Todos.update({_id: todoItem},{
      $set: {
          todo: todo
      }
    });
  },

  // TASKS
  addTask: function(todoItemID,task){
    Tasks.insert({
      _todoItemID: todoItemID,
      task: task,
      checked: false,
      createdAt: new Date()
    });
  },
  updateTask: function(taskId,checked){
    Tasks.update(taskId,{
      $set:{checked: ! checked}
    });
  },
  removeTask: function(taskId){
    Tasks.remove(taskId);
  }
});
