angular.module('ifsp').controller('ContatosController',
    function($resource, $scope) {
        $scope.contatos = [];
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
        buscaContatos()
    });
