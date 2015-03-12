var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
  });
});
