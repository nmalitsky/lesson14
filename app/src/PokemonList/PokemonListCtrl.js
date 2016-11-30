'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $q, PokemonsService, BerriesService) {

    $scope.dataLoaded = false;

    $q.all([
        PokemonsService.getPokemons(),
        BerriesService.getBerries()
    ]).then(function(results){
        $scope.dataLoaded = true;
	$scope.pokemons = results[0].data.data;
	$scope.berries = results[1].data.data;
    }).catch;

});
