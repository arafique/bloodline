!function(){var a=window.Bloodline=Ember.Application.createWithMixins(Ember.Facebook);a.set("appId","251886514950708")}(),function(){Bloodline.ApplicationRoute=Ember.Route.extend({model:function(){return["Dashboard","myBloodline","Blood Shoute","About"]}})}(),function(){Bloodline.AuthenticatedRoute=Ember.Route.extend({beforeModel:function(a){console.log("AuthenticatedRoute.beforeModel: Start");var b=this;console.log(Bloodline.FBUser),Bloodline.FBUser||(console.log("FBUser not found."),b.redirectToLogin(a)),console.log("AuthenticatedRoute.beforeModel: End")},redirectToLogin:function(a){console.log("AuthenticatedRoute.redirectToLogin: Start"),console.log(a),console.log("redirectToLogin:You must login first");var b=this.controllerFor("login");b.set("attemptedTransition",a),this.transitionTo("login"),console.log("AuthenticatedRoute.redirectToLogin: End")}})}(),function(){Bloodline.IndexRoute=Bloodline.AuthenticatedRoute.extend({})}(),function(){Bloodline.LoginRoute=Ember.Route.extend()}(),function(){Bloodline.LoginController=Ember.Controller.extend({login:function(){console.log("LoginController:login")},onSuccess:function(){console.log("LoginController.onSuccess : start");var a=this.get("attemptedTransition");console.log(a),this.transitionToRoute("index"),console.log("LoginController.onSuccess : end")}.observes("Bloodline.FBUser")})}(),function(){Bloodline.Router.map(function(){this.route("login")})}();