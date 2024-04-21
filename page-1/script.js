var app = angular.module('nameApp', []);
app.controller('nameController', function ($scope) {
  $scope.name = '';
  $scope.isNameFixed = false;
  $scope.isNameinInput = false;

  $scope.fixName = function () {
    if ($scope.name !== '') {
      $scope.isNameFixed = true;
      $scope.isNameinInput = false;
    } else {
      $scope.isNameinInput = true;
    }
  };

  $scope.changeName = function () {
    $scope.isNameFixed = false;
  };
});