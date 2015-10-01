
angular.module('oauthExploration')
  .controller('HomeController', ['$scope','$http','$location','ENV', function ($scope, $http, $location, ENV) {
    if(ENV == 'production'){
      $http.get("/api/startFlow").success(function(response) {$scope.auth_uri = response;});
    }
    else{
      $http.get("/api/startFlow").success(function(response) {$scope.auth_uri = response;});
    }
  }]);
