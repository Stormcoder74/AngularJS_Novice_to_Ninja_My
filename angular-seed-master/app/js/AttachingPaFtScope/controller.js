//

angular.module('myApp.greeting', [])
    .controller('GreetingController', function ($scope) {
        $scope.now = new Date(); //set the model 'now' on scope
        $scope.greeting = 'Hello'; //set the name model on scope
    })
;
