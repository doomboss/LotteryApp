var lotteryapp = angular.module('LotteryApp', ['ngRoute']);
lotteryapp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/choices.html'
    })
    .when('/megamillion', {
        controller: 'MegaMillionController',
        templateUrl: 'views/megamillion.html'
    })
    .when('/powerball', {
        controller: 'PowerballController',
        templateUrl: 'views/powerball.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});