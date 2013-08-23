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
    console.log('AuthenticatedRoute.beforeModel: Start');
    var self = this;

    FB.getLoginStatus(function(response){
      console.log(response.status);
      if(response.status != 'connected'){
        self.redirectToLogin(transition);
      }
    });

  	// if (!this.controllerFor('login').get('token')) {
  	// 	this.redirectToLogin(transition)
  	// }

    console.log('AuthenticatedRoute.beforeModel: End');
  },

  /**
   * This method redirects to login route. It also saves the current 'transition' object in LoginCotroller.
   * LoginController use this object to redirect to request URL after successful login.
   * @param  {Transition} transition 
   */
  redirectToLogin: function(transition){
  	console.log(transition);
    console.log('redirectToLogin:You must login first');

  	var loginController = this.controllerFor('login');
  	loginController.set('attemptedTransition', transition);
  	this.transitionTo('login');	
  }
  
});
