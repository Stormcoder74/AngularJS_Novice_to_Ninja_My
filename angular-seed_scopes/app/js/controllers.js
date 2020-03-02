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
//----------------------------------------------------------------------------------------------

angular.module('myApp.controllers')
    .controller('MessageController', function ($scope, $timeout) {
        $scope.messages = [{
            sender: 'user1',
            text: 'Message1'
        }];
        var timer;
        var count = 0;

        $scope.loadMessages = function () {
            count++;
            $scope.messages.push({
                sender: 'user1',
                text: 'Random message' + count
            });
            timer = $timeout($scope.loadMessages, 2000);
            if (count === 3) {
                $scope.$broadcast('EVENT_NO_DATA', 'Not Connected');
                $timeout.cancel(timer);
            }
        };

        timer = $timeout($scope.loadMessages, 2000);
        $scope.$on('EVENT_RECEIVED', function () {
            console.log('Received emitted event');
        });
    });

angular.module('myApp.controllers')
    .controller('StatsController', function ($scope, $timeout) {
        $scope.name = 'World';
        $scope.status = 'Connected';
        $scope.statusColor = 'green';
        var timer2;
        $scope.$on('EVENT_NO_DATA', function (event, data) {
            console.log('received broadcasted event');
            $scope.status = data;
            $scope.statusColor = 'red';
            timer2 = $timeout($scope.sendReport, 3000);
        });

        $scope.sendReport = function () {
            $scope.$emit('EVENT_RECEIVED')
        }
    });
