
portfolio.controller('ProjectsCtrl', function ProjectsCtrl($scope, $modal, ProjectsFactory, $stateParams, UtilitiesFactory) {

  $scope.projects = ProjectsFactory.projects;
  $scope.ProjectsFactory = ProjectsFactory;

  $scope.open = function(project) {

    var modalInstance = $modal.open({
      templateUrl: 'modalContent.html',
      controller: 'ModalInstanceCtrl',
      project: project,
      resolve: {
        project: function () {
          return project;
        }
      }
    });

  };
});
