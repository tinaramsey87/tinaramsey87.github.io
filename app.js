var portfolio = angular.module('portfolio', ['ui.router', 'ui.bootstrap']);

portfolio.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
  });
});
