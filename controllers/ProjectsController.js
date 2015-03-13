portfolio.controller('ProjectsCtrl', function ProjectsCtrl($scope, ProjectsFactory, $stateParams, UtilitiesFactory) {
  $scope.projects = ProjectsFactory.projects;
  $scope.ProjectsFactory = ProjectsFactory;
  $scope.project = UtilitiesFactory.findById(ProjectsFactory.projects, $stateParams.projectId)

  $scope.callModal = function(project) {
    project = $scope.project
    $('#myModal').modal();
  }
});
