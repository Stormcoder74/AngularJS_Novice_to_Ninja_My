//

angular.module('myApp.greeting', [])
    .controller('GreetingController', function ($scope) {
        this.now = new Date(); //set the model 'now' on scope
        this.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
        this.greeting = this.helloMessages[0];

        this.getRandomHelloMessage = function() {
            this.greeting = this.helloMessages[parseInt((Math.random() * this.helloMessages.length))];
        }
    })
;
