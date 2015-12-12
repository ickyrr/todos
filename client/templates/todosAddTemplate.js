Template.todosAddTemplate.events({
  'submit .add-form':function(event){

    event.preventDefault();
    var todo = event.target.todoInput.value;
    var ownerId = Meteor.userId();

    Meteor.call('addTodos', todo, ownerId);

    event.target.todoInput.value = "";
  }
});
