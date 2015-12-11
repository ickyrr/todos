Template.todosTemplate.events({
  'click [name=btnDelTodo]':function(){
    Todos.remove({_id: this._id});
  },
  'click [name="todoItem"]':function(){
    var todoItemID = this._id;
    Session.set('todoItemID',todoItemID);
  },
  'keyup [name="todoItem"]':function(){
    var todoItemID = this._id;
    var todo = event.target.value;

    if(event.which === 27 || event.which === 13){
      $(event.target).blur();
    }else{
      Todos.update({_id: todoItemID},{
        $set:{
          todo:todo
        }
      });
    }
  }
});

Template.todosTemplate.helpers({
  todos: function(){
    return Todos.find({},{sort:{createdAt: -1}});
  }
});
