angular.module('apiApp').controller('myCont',function($scope, mySVC){

  var getPokemon = function(){
    mySVC.getPokemon().then(function(response){
      $scope.pokeList = response;
      console.log('blingList:',$scope.pokeList);
    });
  }

  getPokemon();
})
