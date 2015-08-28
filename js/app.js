(function() {
    var app = angular.module('lunch-sky', []);

    app.controller('lunchController', ['$http', function($http) {
        this.view = 'home';
        this.logsView = '';
        this.breastFeedingOption = [
            { 'name': '5 min', 'duration': 5},
            { 'name': '10 min', 'duration': 10},
            { 'name': '15 min', 'duration': 15},
            { 'name': '20 min', 'duration': 20},
            { 'name': '25 min', 'duration': 25},
            { 'name': '30 min', 'duration': 30}
        ]

        var lunchObj = this;
    }]);
})();