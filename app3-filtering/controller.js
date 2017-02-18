angular.module('myApp').controller('myCont',function($scope,mySVC){
  $scope.names = mySVC.getData();


})
