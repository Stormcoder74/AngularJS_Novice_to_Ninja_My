'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('SiteController', function ($scope) {
        $scope.publisher = 'SitePoint';
        $scope.type = "Web Development";
        $scope.name = "Scope for SiteController";
    });

angular.module('myApp.controllers')
    .controller('BookController', function ($scope) {
        $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
        $scope.name = "Scope for BookController";

        $scope.wishListCount = 0;
        $scope.addToWishList = function (book) {
            $scope.wishListCount++;
        };
        var unbindWatcher = $scope.$watch('wishListCount', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                console.log("wish list increased from " + oldValue + " to " + newValue);
                if (newValue === 2) {
                    alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
                    unbindWatcher();
                }
            }
        });
    });

angular.module('myApp')
    .controller('TimeoutController', function ($scope) {
        $scope.scheduleTask = function () {
            setTimeout(function () {
                $scope.$apply(function () { // wrapped the code in $apply()
                    $scope.message = 'Fetched after 3 seconds';
                    console.log('message = ' + $scope.message); //log this to console
                });
            }, 3000);
        };
    });

angular.module('myApp')
    .controller('TimeoutController2', function ($scope, $timeout) {
        $scope.fetchMessage = function () {
            $timeout(function () {
                $scope.message = 'Fetched after 3 seconds'; //just update. No need for $apply
                console.log('message=' + $scope.message);
            }, 3000);
        }
    });
