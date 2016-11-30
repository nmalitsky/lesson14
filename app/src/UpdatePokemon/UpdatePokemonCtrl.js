'use strict';

pokemonApp.controller('UpdatePokemonCtrl', function($scope, $routeParams, $location, PokemonsService) {

    $scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;

	console.log($scope.pokemon)

        $scope.pokemonLoaded = true;
    });

    $scope.updatePokemon = function() {

        $scope.updateError = false;
        $scope.updateSuccess = false;

        PokemonsService.updatePokemon($scope.pokemon.objectId, $scope.pokemon).then(function successCallback(response) {

            // Окей!
            $scope.updateSuccess = true;

        }, function errorCallback(response) {

            // Не окей..
            $scope.updateError = true;
        });

    }

    $scope.backToList = function () {
         $location.path('/pokemons');
    };

});
