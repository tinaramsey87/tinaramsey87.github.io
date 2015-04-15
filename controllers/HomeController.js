portfolio.controller('HomeCtrl', function HomeCtrl($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }
});
