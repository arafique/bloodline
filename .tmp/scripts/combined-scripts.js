(function() {

var Bloodline = window.Bloodline = Ember.Application.createWithMixins(Ember.Facebook);
Bloodline.set('appId', '251886514950708');


/* Order and include as you please. */


})();

(function() {

Bloodline.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the 
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return ['Dashboard', 'myBloodline', 'Blood Shoute', 'About'];
  }
});


})();

(function() {

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


})();

(function() {

Bloodline.IndexRoute = Bloodline.AuthenticatedRoute.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  // model: function() {
  //   return FB.api('/me', function(response) {
  // 		alert(response.name);
  // 		return response;
	 // });
  // }
});


})();

(function() {

Bloodline.LoginRoute = Ember.Route.extend(

/*{

	beforeModel: function(transition){
		console.log('LoginRoute.beforeModel : Start');
		console.log(Bloodline.FBUser);
		console.log(Bloodline.FB);

		console.log('LoginRoute.beforeModel : End');
	}
	
}
*/
);

})();

(function() {

/**
 * [ApplicationController description]
 * @type {[type]}
 */
/*Bloodline.IndexController = Ember.ObjectController.extend({
	// facebookLogin: function(){
	// 	console.log('Login action');
	// 	FB.login();
	// }
});
*/

})();

(function() {

Bloodline.LoginController = Ember.Controller.extend({

	// content: null,

	login: function(){
		console.log('LoginController:login');
		/**
		 * This method invokes Facebook login method. If the login is successful 
		 * it calls the onSuccess method.
		 */
		var self = this;
		// FB.login(function(response) {
		// 	console.log(response);
		// 	console.log("Login call response: %s",response.authResponse);
			
		//     if (response.authResponse) {
		//   //       FB.api('/me', function(response) {
		// 		//   alert(response.name);
		// 		// });
		// 		self.onSuccess();
		//     } else {
		//         alert('Login Failed');
		//     }
		// });
	},

	/**
	 * This method is called after user has logged in successfully. It will call the previously attepmed 
	 * URL (if any) other wise I will route to index.
	 * 
	 */
	onSuccess: (function(){
		console.log('LoginController.onSuccess : start');
		
		var self = this;
		var attemptedTransition = this.get('attemptedTransition');
		console.log(attemptedTransition);

		//var router = this.get('target.router');
		//router.transitionTo('index');

		//attemptedTransition.retry();
		
		this.transitionToRoute('index');
		/*
        if (attemptedTransition) {
        	console.log('Retrying attemptedTransition');
        	attemptedTransition.retry();
          	self.set('attemptedTransition', null);
        } else {
			// Redirect to 'index' by default.
			self.transitionToRoute('index');
        }*/

        console.log('LoginController.onSuccess : end')
	}).observes('Bloodline.FBUser')
});


})();

(function() {

Bloodline.Router.map(function () {

	this.route('login');
  
});




})();