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
