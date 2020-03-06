'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]);

angular.module('myApp')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/view1', {
                controller: 'Controller1',
                templateUrl: '/partials/view1.html'
            })
            .when('/view2/:firstname/:lastname', {
                controller: 'Controller2',
                templateUrl: '/partials/view2.html'
            })
            .otherwise({redirectTo: '/view1'});
        $locationProvider.html5Mode(true); //activate HTML5 Mode
    });
