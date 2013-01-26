'use strict';

/* Filters */

angular.module('myApp.filters', []).
    filter('interpolate', ['version', function(version) {
    return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);

angular.module('myApp.filters', []).
    filter('localise', function() {
        return function(input, uppercase) {
            var out = "";
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        }
    });