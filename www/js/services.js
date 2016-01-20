angular.module('starter.services', [])

.service('LoginService', function($q) {
  return {
    loginUser: function(name, pw) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (name == 'user' && pw == 'user') {
        deferred.resolve('Welcome ' + name + '!');
      } else {
        deferred.reject('Wrong credentials.');
      }
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
})
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])
.factory('jillreacher', function(){
  var jillreacher = [{
    name: "Jill Reacher",
    department: "Digital Business Services",
    title: "UX Designer",
    description: "I'm working on a new format for UI spec for Mattel.",
    date: "Jun 7 7:21PM",
    imageURI: "img/adam.jpg"
  }, {
    name: "Rick Helmick",
    department: "Digital Business Services",
    title: "UX Designer",
    description: "I'm working on a new format for UI spec for Mattel.",
    date: "Jun 6 5:10PM",
    imageURI: "img/ben.png"
  },{
    name: "Jack Reacher",
    department: "Digital Business Services",
    title: "UX Designer",
    description: "I'm working on a new format for UI spec for Mattel.",
    date: "Jun 3 4:20PM",
    imageURI: "img/perry.png"
  }];
  return jillreacher;
});
