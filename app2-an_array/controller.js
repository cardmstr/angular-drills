angular.module('arrayApp').controller('arrayController',function($scope,mySVC){
  $scope.names = mySVC.getData();
})
