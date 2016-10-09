(function () {

    var contactController = function ($scope) {

        $scope.currentViewName = "contact";
    }

    angular.module('myAngularApplication').controller('contactController', ["$scope", contactController]);

}());