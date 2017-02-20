angular.module('apiApp').service('mySVC', function($http){
  var baseURL = 'http://pokeapi.co/api/v2/';

  return {
    getPokemon: function(){
      return $http.get(baseURL + 'pokemon/')
        .then(function(response){
          console.log('SVC results', response.data.results);
          return response.data.results;
        })
    }


  }

})
