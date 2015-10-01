// Declare app level module which depends on filters, and services
angular.module('oauthExploration', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'config'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
      .when('/oauth2callback',{
        templateUrl: 'views/home/oauthSuccess.html',
        controller: 'oauthSuccessController'
      })
      .otherwise({redirectTo: '/'});
  }]);
