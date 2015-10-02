
angular.module('oauthExploration')
  .controller('oauthSuccessController', ['$scope','$http','$location','ENV', function ($scope, $http, $location, ENV) {
      $http.get("/api/userInfo").success(function(response) {$scope.userInfo = response;});
  }]);
