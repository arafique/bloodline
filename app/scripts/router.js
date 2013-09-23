Bloodline.Router.map(function () {
	this.resource('authenticated', {path: '/'}, function () {
		this.resource('dashboard');
	});

	this.resource('welcome');
	this.resource('contact');
	this.resource('about');
});


