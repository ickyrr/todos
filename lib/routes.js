// ROUTES GO HERE
// ===========================
// ===========================
// ===========================
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
