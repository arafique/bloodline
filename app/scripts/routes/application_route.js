Bloodline.ApplicationRoute = Ember.Route.extend({

  /**
   * This method is called after user has logged in successfully. It will call the previously attepmed 
   * URL (if any) other wise I will route to index.
   * 
   */
  onSuccess: (function(){
    var self = this;
    this.transitionTo('dashboard');
  }).observes('Bloodline.FBUser'),

  actions: {
    logout: function() {
      this.controllerFor('application').logoutUser();
      this.transitionTo('welcome');
    }
  }
});
