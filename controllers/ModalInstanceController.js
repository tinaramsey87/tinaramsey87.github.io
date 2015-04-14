portfolio.controller('ModalInstanceCtrl', function ModalInstanceCtrl($scope, $modalInstance, project) {

  $scope.project = project;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
