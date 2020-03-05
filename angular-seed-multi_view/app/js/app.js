'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]).config(function ($routeProvider) {
    $routeProvider.when('/view1', {
        controller: 'Controller1',
        templateUrl: 'partials/view1.html',
    }).when('/view2', {
        controller: 'Controller2',
        templateUrl: 'partials/view2.html',
    });
});
