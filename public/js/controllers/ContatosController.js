angular.module('ifsp').controller('ContatosController',
	function($resource, $scope, $http) {
		$scope.contatos = [
			{_id: 1, nome: "Fabio Teixeira", email: "fabio.teixeira@ifsp.edu.br"},
	                {"_id": 2, "nome": "Fabiano Teixeira","email": "fabiano.teixeira@ifsp.edu.br"},
                        {"_id": 3, "nome": "Melissa Teixeira","email": "melissa.teixeira@ifsp.edu.br"}
		];
		$scope.filtro = '';
		var Contato = $resource('/contatos');
		var contatos = $http.get('/contatos');
		var promise = $http.get('/contatos');
		function buscaContatos() {
			Contato.query(
				function(contatos) {
					$scope.contatos = contatos;
				},
				function(erro) {
					console.log("Não foi possível obter a lista de contatos");
					console.log(erro);
				}
			);
		}

		promise
		        .then(exibeContatos)
			 .then(modificaContatos)
			 .then(AtualizaContatos)
			 .then(function(contatos) {
				  $scope.mensagem = {texto: 'Contatos atualizados com sucesso'};
			 })
			 .catch(function(erro) {
                         console.log(erro.status);
			 console.log(erro.statusText);
			 });

		buscaContatos();
	});
