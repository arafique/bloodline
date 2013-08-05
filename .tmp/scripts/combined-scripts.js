(function() {

var EmberNodeTest = window.EmberNodeTest = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

EmberNodeTest.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the 
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return ['red', 'yellow', 'blue'];
  }
});


})();

(function() {

EmberNodeTest.Router.map(function () {
  
});




})();