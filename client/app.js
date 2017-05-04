angular.module('Instagram', ['ngRoute', 'ngMessages'])
	.config(function($routeProvider, $authProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controllers: 'HomeCtrl'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controllers: 'LoginCtrls'
			})
			.when('/signup', {
				templateUrl: 'views/signup.html',
				controller: 'SignupCtrl'
			})
			.when('/photo/:id', {
				templateUrl: 'views/detail.html', 
				controller: 'DetailCtrl'
			})
			.otherwise('/');
		$authProvider.loginUrl = 'http://localhost:3000/auth/login';
		$authProvider.signupUrl = 'htpp://localhost:3000/auth/signup';
		$authProvider.oauth2({
			name: 'instagram',
			url: 'http://localhost:8000',
			redirectUri: 'http://localhost:8000',
			clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
			requiredUrlParams: ['scope'],
			scope: ['likes'],
			scopeDelimiter: '+',
			authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
		});

	});