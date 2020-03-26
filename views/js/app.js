var app = angular.module('Ideapp',[]);

app.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);