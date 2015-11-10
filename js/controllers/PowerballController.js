angular.module('lotteryapp').controller('PowerballController', ['$scope', 'powerball', function ($scope) {
    powerball.success(function (data) {
        $scope.powerball_numbers = data;
    })
}])