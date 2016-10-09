(function () {

    angular.module('myAngularApplication').filter('power', function () {
        return function (input, powerValue) {

            // Check if power value is falsy
            if (!powerValue) {
                powerValue = 1;
            }

            // Use Math.pow to find the power and return it
            return Math.pow(input, powerValue);
        }
    });

}());