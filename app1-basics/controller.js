angular.module('testApp').controller('testCont',function($scope,testSVC){
  $scope.test = testSVC.data;
})
