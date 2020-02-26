//

(function() {
    var firstModule = angular.module('firstModule', []);//firstModule is not global here
    firstModule.controller('FirstController', function($scope) {// register a controller
//your rocking controller
    });
    firstModule.directive('FirstDirective', function() { // register a directive
        return {
        };
    });
})();
