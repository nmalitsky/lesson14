angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            return {

                getPokemons: function() {
                    return $http.get('https://api.backendless.com/v1/data/pokemon');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('https://api.backendless.com/v1/data/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        headers: {
				"application-id": "96136DA0-9E28-45F1-FF12-8EB101D6F800",
				"secret-key": "A32BE456-B717-D0F6-FFE2-03B673C8EA00"
                        },
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        headers: {
				"application-id": "96136DA0-9E28-45F1-FF12-8EB101D6F800",
				"secret-key": "A32BE456-B717-D0F6-FFE2-03B673C8EA00"

                        }
                    });
                },

                updatePokemon: function(pokemonId, pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        headers: {
				"application-id": "96136DA0-9E28-45F1-FF12-8EB101D6F800",
				"secret-key": "A32BE456-B717-D0F6-FFE2-03B673C8EA00"
                        },
                        data: pokemonData
                    });
                }

            }

        }

    );
