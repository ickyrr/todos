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

    return checked;
  }
});
