(function() {

var Bloodline = window.Bloodline = Ember.Application.create();

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


})();

(function() {

Bloodline.IndexRoute = Bloodline.AuthenticatedRoute.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
    FB.api('/me', function(response) {
  		alert(response.name);
  		return response;
	});
  }
});


})();

(function() {

Bloodline.LoginRoute = Ember.Route.extend({
	
});

})();

(function() {

/**
 * [ApplicationController description]
 * @type {[type]}
 */
Bloodline.IndexController = Ember.ArrayController.extend({
	// facebookLogin: function(){
	// 	console.log('Login action');
	// 	FB.login();
	// }
});


})();

(function() {

Bloodline.LoginController = Ember.Controller.extend({

	login: function(){
		console.log('LoginController:login');
		/**
		 * This method invokes Facebook login method. If the login is successful 
		 * it calls the onSuccess method.
		 */
		var self = this;
		FB.login(function(response) {
			console.log(response);
			console.log("Login call response: %s",response.authResponse);
			
		    if (response.authResponse) {
		  //       FB.api('/me', function(response) {
				//   alert(response.name);
				// });
				self.onSuccess();
		    } else {
		        alert('Login Failed');
		    }
		});
	},

	/**
	 * This method is called after user has logged in successfully. It will call the previously attepmed 
	 * URL (if any) other wise I will route to index.
	 * 
	 */
	onSuccess: function(){
		console.log('LoginController.onSuccess');
		var self = this;
		var attemptedTransition = this.get('attemptedTransition');
		//console.log(attemptedTransition);
        if (attemptedTransition) {
        	console.log('Retrying attemptedTransition');
        	attemptedTransition.retry();
          	self.set('attemptedTransition', null);
        } else {
			// Redirect to 'index' by default.
			self.transitionToRoute('index');
        }
	}
});


})();

(function() {

Bloodline.Router.map(function () {
	// this.route('index');
	this.route('login');
  
});




})();

(function() {


// Additional JS functions here
window.fbAsyncInit = function() {
	
FB.init({
  appId      : '251886514950708', // App ID
  channelUrl: window.location.protocol + '//' + window.location.host + '/channel.html',
  status     : true, // check login status
  cookie     : true, // enable cookies to allow the server to access the session
  xfbml      : true  // parse XFBML
});

	// Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
	// for any authentication related change, such as login, logout or session refresh. This means that
	// whenever someone who was previously logged out tries to log in again, the correct case below 
	// will be handled. 
	FB.Event.subscribe('auth.authResponseChange', function(response) {
		// Here we specify what we do with the response anytime this event occurs. 
		if (response.status === 'connected') {
		  // The response object is returned with a status field that lets the app know the current
		  // login status of the person. In this case, we're handling the situation where they 
		  // have logged in to the app.
		  // testAPI();
		  
		} else if (response.status === 'not_authorized') {
		  // In this case, the person is logged into Facebook, but not into the app, so we call
		  // FB.login() to prompt them to do so. 
		  // In real-life usage, you wouldn't want to immediately prompt someone to login 
		  // like this, for two reasons:
		  // (1) JavaScript created popup windows are blocked by most browsers unless they 
		  // result from direct interaction from people using the app (such as a mouse click)
		  // (2) it is a bad experience to be continually prompted to login upon page load.
		  FB.login();
		} else {
		  // In this case, the person is not logged into Facebook, so we call the login() 
		  // function to prompt them to do so. Note that at this stage there is no indication
		  // of whether they are logged into the app. If they aren't then they'll see the Login
		  // dialog right after they log in to Facebook. 
		  // The same caveats as above apply to the FB.login() call here.
		  FB.login();
		}
	});
  };

// Load the SDK asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
}(document));

  // Here we run a very simple test of the Graph API after login is successful. 
  // This testAPI() function is only called in those cases. 
  function testAPI() {

    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
    });
  }




})();