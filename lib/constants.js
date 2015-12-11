Meteor.methods({
  addTodos: function(todo){
    Todos.insert({
      todo: todo,
      createdAt: new Date()
    });
  }
});
