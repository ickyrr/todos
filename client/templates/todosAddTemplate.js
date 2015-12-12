Template.todosAddTemplate.events({
  'submit .add-form':function(event){

    event.preventDefault();
    var todo = event.target.todoInput.value;

    Meteor.call('addTodos', todo);

    event.target.todoInput.value = "";
  }
});
