portfolio.controller('ProjectsCtrl', function ProjectsCtrl($scope, ProjectsFactory) {
  $scope.projects = ProjectsFactory.projects;
  $scope.ProjectsFactory = ProjectsFactory;
  // $scope.titleShowing = false;

  $scope.displayTitle = function() {
    $scope.titleShowing = true;
  }

  $scope.hideTitle = function() {
    $scope.titleShowing = false;
  }
});
