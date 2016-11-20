var voteApp = angular.module('voteApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when opening the page load all votes
    $http.get('/api/votes')
        .success(function(data) {
            $scope.votes = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.vote = function(url){
      $http.get(url)
        .success(function(data) {
            $scope.votes = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }
}
