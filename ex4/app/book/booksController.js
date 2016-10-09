(function () {

    var booksController = function ($scope, $filter, localBooksService, remoteBooksService) {
        $scope.message = "List of books";

        $scope.books = [];

        $scope.fetchBooks = function () {
            $scope.books = localBooksService.books;
        }

        $scope.fetchBooksFromServer = function () {

            remoteBooksService.fetchBooks()
            .success(function (data, status, headers, config) {
                $scope.books = data;
            })
            .error(function (data, status, headers, config) {
                $scope.books = [];
                $scope.error = "Failed to retrieved items from server";
            });
        };
    }

    angular.module('myAngularApplication').controller('booksController', ["$scope", "$filter", "localBooksService", "remoteBooksService",  booksController]);

}());