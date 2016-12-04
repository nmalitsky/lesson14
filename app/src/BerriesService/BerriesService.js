angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {

            return {

                getBerries: function() {
                    return $http.get('https://api.backendless.com/v1/data/berries');
                }

            }

        }

    );
