angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
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
.controller('MainCtrl', function($scope, $location, jillreacher) {

  $scope.jillreacher = jillreacher;
  $scope.go = function(hash) {
    $location.path('getbadge');
  }
})


.controller('GetBadgeCtrl', function($scope, Camera, jillreacher) {

  $scope.taken = false;
  $scope.complete = false;

  $scope.getPhoto = function() {
    $scope.taken = true;
    Camera.getPicture({cameraDirection: 1}).then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
      jillreacher[0].imageURI = imageURI;
      $scope.complete = true;

    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: false
    });
  };

})

.controller('CompleteCtrl', function($scope, jillreacher, $cordovaInAppBrowser) {
  $scope.jillreacher = jillreacher;

  $scope.openPASS = function() {
    
    // onSuccess Callback
    function onSuccess() {
      console.log('Pass shown to the user');
    }

    // onError Callback receives a string with the error message
    //
    function onError(error) {
      alert('Could now show pass: ' + error);
    }

    Passbook.downloadPass('https://d.pslot.io/cQY2f', onSuccess, onError);
  }

});
