var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngWebSocket']);

angular.
module('PokemonApp').
config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common = {
		"application-id": "96136DA0-9E28-45F1-FF12-8EB101D6F800",
		"secret-key": "A32BE456-B717-D0F6-FFE2-03B673C8EA00"
	};
   }
]).

config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/update/:pokemonId', {
            templateUrl: 'src/UpdatePokemon/UpdatePokemon.html',
            controller: 'UpdatePokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/realtime/:userName', {
            templateUrl: 'src/PokemonRealtime/PokemonRealtime.html',
            controller: 'PokemonRealtimeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]).

factory('MySocket', function($websocket) {
    var ws = $websocket('ws://echo.websocket.org/');
    var collection = [];

    ws.onMessage(function(event) {
        console.log('message: ', event);
        var res;
        try {
            res = JSON.parse(event.data);
        } catch (e) {
            res = {
                'username': 'anonymous',
                'message': event.data
            };
        }

        collection.push({
            username: res.username,
            content: res.message,
            timeStamp: event.timeStamp
        });
    });

    ws.onError(function(event) {
        console.log('connection Error', event);
    });

    ws.onClose(function(event) {
        console.log('connection closed', event);
    });

    ws.onOpen(function() {
        console.log('connection open');
        ws.send('Hello World');
        ws.send('again');
        ws.send('and again');
    });
    // setTimeout(function() {
    //   ws.close();
    // }, 500)

    return {
        collection: collection,
        status: function() {
            return ws.readyState;
        },
        send: function(message) {
            if (angular.isString(message)) {
                ws.send(message);
            } else if (angular.isObject(message)) {
                ws.send(JSON.stringify(message));
            }
        }

    };
});
