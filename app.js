var app = angular.module("MyProject", []);

app.controller("info", function($scope, $http){

	// Creamos una funcion que se ejecutará con ng-click
	$scope.buscar = function(){

		// Hacemos un llamado al pokemon segun la busqueda
		var busqueda = $http.get("http://pokeapi.co/api/v2/pokemon/"+$scope.pokemon);

		// Si no existe el pokemon, saldrá un mensaje
		busqueda.error(function(){
			alert("No existe el pokemon");
		});

		// si el pokemon existe mostrará sus datos
		busqueda.success(function(data){
			$scope.nombre = $scope.pokemon;
			$scope.numero = data.id;
			$scope.foto = data.sprites.front_default;
		});
	}

});
