Bloodline.AuthenticatedRoute = Em.Route.extend({
  beforeModel: function (transition) {
    console.log(Bloodline.FBUser);
    if(!Bloodline.FBUser) {
		  this.transitionTo('welcome');
    }
	}
});
