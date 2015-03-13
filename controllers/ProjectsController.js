portfolio.controller('ProjectsCtrl', function ProjectsCtrl($scope, ProjectsFactory) {
  $scope.projects = ProjectsFactory.projects;
  $scope.ProjectsFactory = ProjectsFactory;
});
