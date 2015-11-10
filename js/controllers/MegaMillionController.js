angular.module('lotteryapp').controller('MegaMillionController', ['$scope', 'megamillion', function ($scope) {
    megamillion.success(function (data) {
        $scope.megamillion_numbers = data;
        console.log('controller received data successfully');
    });
}]);