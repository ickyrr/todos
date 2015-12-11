Template.todosAddTemplate.events({
  'submit .add-form':function(events){

    event.preventDefault();
    var todo = event.target.todoInput.value;

    Todos.insert({
      todo: todo,
      createdAt: new Date()
    });

    event.target.todoInput.value = "";
  }
});
