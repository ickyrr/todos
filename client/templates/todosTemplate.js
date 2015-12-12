Template.todosTemplate.events({

  'click [name=btnDelTodo]':function(){
    var todoId = this._id;
    Meteor.call('removeTodo', todoId);
  },
  'click [name="todoItem"]':function(){
    var todoItemID = this._id;
    Session.set('todoItemID',todoItemID);
  },
  'keyup [name="todoItem"]':function(event){
    var todoItemID = this._id;
    var todo = $(event.target).val();

    if(event.which === 27 || event.which === 13){
      $(event.target).blur();
    }
    else{
      Meteor.call('updateTodo',todoItemID, todo);
    }
  }
});

Template.todosTemplate.helpers({
  ownerId: Meteor.userId(),
  todos: function(){
    return Todos.find({createdBy: Meteor.userId()},{sort:{createdAt: -1}});
  }
});
