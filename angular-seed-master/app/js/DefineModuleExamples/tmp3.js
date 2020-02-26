//

angular.module('firstModule', []); //specify dependency list here
angular.module('firstModule')
    .controller('FirstController', function ($scope) { //just use it
        //your rocking controller
    });
angular.module('firstModule')
    .directive('FirstDirective', function () { //just use it
        return {};
    });
