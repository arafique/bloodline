var Bloodline = window.Bloodline = Ember.Application.createWithMixins(Ember.Facebook);
Bloodline.set('appId', '251886514950708');


/* Order and include as you please. */
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');
require('scripts/router');
