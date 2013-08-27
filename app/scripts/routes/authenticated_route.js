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

/*  events: {
    error: function (reason, transition){
      console.log('AuthenticatedRoute.events.error : start');

      console.log(reason);
      console.log(transition);

      console.log('AuthenticatedRoute.events.error : end');
    }
  },*/

  beforeModel: function(transition){
    console.log('AuthenticatedRoute.beforeModel: Start');
    var self = this;
    console.log(Bloodline.FBUser);
    if(!Bloodline.FBUser){
      console.log('FBUser not found.')
      self.redirectToLogin(transition);
    }

    // FB.getLoginStatus(function(response){
    //   console.log(response.status);
    //   if(response.status != 'connected'){
    //     self.redirectToLogin(transition);
    //   }
    // });

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
    console.log('AuthenticatedRoute.redirectToLogin: Start');
  	console.log(transition);
    console.log('redirectToLogin:You must login first');

  	var loginController = this.controllerFor('login');
  	loginController.set('attemptedTransition', transition);
  	this.transitionTo('login');
    console.log('AuthenticatedRoute.redirectToLogin: End');	
  }
  
});
