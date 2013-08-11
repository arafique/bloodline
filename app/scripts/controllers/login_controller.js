Bloodline.LoginController = Ember.Controller.extend({

	login: function(){
		console.log('LoginController:login');
		
		FB.login(function(response) {
			console.log("Login call response: %s",response.authResponse);
		    if (response.authResponse) {
		        FB.api('/me', function(response) {
				  alert(response.name);
				});
		    } else {
		        alert('Login Failed');
		    }
		});
	},

	onSuccess: function(){
		console.log('LoginController.onSuccess');

		var attemptedTransition = this.get('attemptedTransition');
        if (attemptedTransition) {
        	attemptedTransition.retry();
          	self.set('attemptedTransition', null);
        } else {
			// Redirect to 'articles' by default.
			self.transitionToRoute('articles');
        }
	}
});
