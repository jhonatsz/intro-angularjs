(function () {

    var aboutController = function ($scope) {

        $scope.currentViewName = "about";
    }

    angular.module('myAngularApplication').controller('aboutController', ["$scope", aboutController]);

}());