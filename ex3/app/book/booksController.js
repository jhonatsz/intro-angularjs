(function () {

    var booksController = function ($scope, $filter) {
        $scope.message = "Hello from booksController";

        this.greeting = "This is a greeting message using controller as syntax";

        $scope.books = [];

        $scope.countries = [
            "India",
            "Denmark",
            "USA",
            "Singapore",
            "Germany"
        ];

        $scope.orderField = "ID";
        
        $scope.allCapsMessage = $filter("uppercase")($scope.message);
        $scope.conversionRate = $filter("number")(62.3, 5);

        $scope.fetchBooks = function () {
            $scope.books = [
                { ID: 1, BookName: "4 Test Books", AuthorName: "5 Test Author", ISBN: "5 TEST" },
                { ID: 2, BookName: "5 Test Books", AuthorName: "4 Test Author", ISBN: "1 TEST" },
                { ID: 3, BookName: "1 Test Books", AuthorName: "3 Test Author", ISBN: "2 TEST" },
                { ID: 4, BookName: "2 Test Books", AuthorName: "2 Test Author", ISBN: "4 TEST" },
                { ID: 5, BookName: "3 Test Books", AuthorName: "1 Test Author", ISBN: "3 TEST" }
            ];
        }
    }

    angular.module('myAngularApplication').controller('booksController', ["$scope", "$filter", booksController]);

}());