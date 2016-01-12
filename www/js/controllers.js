angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})
.controller('MainCtrl', function($scope, $location) {
  $scope.go = function(hash) {
    $location.path('getbadge');
  }
})

.controller('CompleteCtrl', function($scope, $location) {
  
});
