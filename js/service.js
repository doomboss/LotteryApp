angular.module('lotteryapp').factory('powerball', ['$http', function ($http) {
        /*
    {
        "draw_date" : "2015-10-28T00:00:00",
        "winning_numbers" : "04 54 56 62 63 10",
        "multiplier" : "2"
    } */

    return $http.get('https://data.ny.gov/resource/d6yy-54nr.json') 
    .success(function (data) {
        console.log('powerball GET service success');
        return data;
    })
    .error(function (error) {
        return error;
    });
}])

angular.module('lotteryapp').factory('megamillion', ['$http', function ($http) {
    /*
    {
        "draw_date" : "2015-10-30T00:00:00",
        "winning_numbers" : "17 41 51 53 56",
        "multiplier" : "05",
        "mega_ball" : "15"
    } */

    return $http.get('https://data.ny.gov/resource/5xaw-6ayf.json')
    .success(function (data) {
        console.log('megamillion GET service success');
        return data;
    })
    .error(function (error) {
        return error;
    });
}])