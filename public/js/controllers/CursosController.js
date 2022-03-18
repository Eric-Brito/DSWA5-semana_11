angular.module('ifsp').controller('CursosController',
    function($resource, $scope) {
        $scope.cursos = [];
        $scope.filtro = '';
        var Curso = $resource('/cursos');
        function buscaCursos() {
            Contato.query(
                function(cursos) {
                    $scope.cursos = cursos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de cursos");
                    console.log(erro);
                }
            );
        }
        buscaCursos()
    });
