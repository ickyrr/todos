Todos = new Mongo.Collection("todos");
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    // EVENTS
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
          $(event.target).blur()
        }else{
          Todos.update({_id: todoItemID},{
            $set:{
              todo:todo
            }
          });
        }
      }
    });

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

    Template.tasksViewTemplate.events({

      'change [type="checkbox"]':function(){
        var isCompleted = Tasks.findOne({_id:this._id},{fields:{checked:1}});
        var checked = isCompleted.checked;
        Tasks.update(this._id,{
          $set:{checked: ! checked}
        });
      },
      'click [name="btnDelTask"]':function(){
        Tasks.remove(this._id);
      },
      'keyup [name="taskItem"]':function(){
        var taskItemID = this._id;
        var task = event.target.value;

        if(event.which === 27 || event.which === 13){
          $(event.target).blur();
        }else{
          Tasks.update({_id: taskItemID},{
            $set:{
              task:task
            }
          });
        }
      }
    });

    // HELPERS
    Template.todosTemplate.helpers({
      todos: function(){
        return Todos.find({},{sort:{createdAt: -1}});
      }
    });

    Template.tasksTemplate.helpers({
      todoName: function(){
        var todoItemID = Session.get('todoItemID');
        return Todos.findOne({_id: todoItemID},{fields:{todo: 1}});
      }
    });

    Template.tasksViewTemplate.helpers({
      tasks: function(){
        var todoItemID = Session.get('todoItemID');
        return Tasks.find({_todoItemID:todoItemID},{fields:{task: 1}});
      },
      //This part is only temporary or a hack, the one from the original does not work
      //I don't know what's wrong so I just made a few changes
      //isCompleted variable will access mongo and look for checked on Tasks Collection
      //and return it's value (true or false)
      checked: function(){
        var isCompleted = Tasks.findOne({_id:this._id},{fields:{checked:1}});
        var checked = isCompleted.checked;

        if(checked){
          return checked;
        }else{
          return checked;
        }
      }
    });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// ROUTES
Router.configure({ //set the template that shows everywhere
  layoutTemplate: 'mainTemplate'
});

Router.route('/tasks/:_id',{ //routes to the todo item task list
  template:'tasksTemplate',
  data: function(){
    var currentList = this.params._id;
    return Todos.findOne({_id:currentList});
  }
});

Router.route('/',{ //configure the homepage
  name:'home',
  template: 'home'
});

Router.route('/signupTemplate');
Router.route('/signinTemplate');
