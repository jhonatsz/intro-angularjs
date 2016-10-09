(function () {
    myModule = angular.module('myAngularApplication', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
            .when("/home", {
                templateUrl: "home.html",
                controller: "homeController"
            })
            .when("/about", {
                templateUrl: "about.html",
                controller: "aboutController"
            })
            .when("/contact", {
                templateUrl: "contact.html",
                controller: "contactController"
            }).
            otherwise({
                redirect: '/home'
            });

          
        }]);
}());
