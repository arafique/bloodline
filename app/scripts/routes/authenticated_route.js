Bloodline.AuthenticatedRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  // model: function() {
  //     return ;
  // }

  beforeModel: function(transition){
  	if (!this.controllerFor('login').get('token')) {
  		this.redirectToLogin(transition)
  	}
  },

  redirectToLogin: function(transition){
  	alert('You must login first');

  	var loginController = this.controllerFor('login');
  	loginController.set('attemptedTransition', transition);
  	this.transitionTo('login');	
  }
  
});
