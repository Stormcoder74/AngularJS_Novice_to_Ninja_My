'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('Controller', function ($scope) {

    })
    .controller('Controller1', function ($scope) {
        $scope.message = "Hello, world";
    })
    .controller('Controller2', function ($scope) {
        $scope.now = new Date();
    });
