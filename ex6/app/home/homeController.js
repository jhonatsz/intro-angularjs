(function () {

    var homeController = function ($scope) {

        $scope.currentViewName = "home";
    }

    angular.module('myAngularApplication').controller('homeController', ["$scope", homeController]);

}());