portfolio.controller('HomeCtrl', function HomeCtrl($scope, $location, $anchorScroll) {
    
  $scope.menuItems = ['About', 'Projects', 'Contact'];
    
  $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem
  }
    
  $scope.scrollTo = function(menuItem) {
     $location.hash(menuItem);
     $anchorScroll();
  }
});
