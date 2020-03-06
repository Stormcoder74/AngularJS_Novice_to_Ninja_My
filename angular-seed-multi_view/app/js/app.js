'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]);

angular.module('myApp')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/start', {
                controller: 'Controller',
                templateUrl: '/index.html'
            })
            .when('/view1', {
                controller: 'Controller1',
                templateUrl: '/view1.tpl' //The ng-template id
            })
            .when('/view2/:firstname/:lastname', {
                controller: 'Controller2',
                templateUrl: '/view2.tpl' //The ng-template id
            })
            .otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true); //activate HTML5 Mode
    });
