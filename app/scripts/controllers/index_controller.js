/**
 * [ApplicationController description]
 * @type {[type]}
 */
Bloodline.IndexController = Ember.ArrayController.extend({
	facebookLogin: function(){
		console.log('Login action');
		FB.login();
	}
});
