var myApp = angular.module('GYST',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'gystController',
		templateUrl: 'views/home.html'
	})
	.when('/courses', {
		templateUrl: 'views/courses.html'
	})
	.when('/services',{
        templateUrl: 'views/services.html'
		
	})
	.when('/retreats',{
        templateUrl: 'views/retreats.html',
        
   })
	.otherwise({
		redirectTo: '/'
    });
  
});