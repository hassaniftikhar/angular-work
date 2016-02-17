var artistController = angular.module('artistController', []);

artistController.controller('ListController', ['$scope', '$http', function ($scope, $http) {
  $http.get('js/data.json').success(function (data) {
    $scope.artists = data;
    $scope.artistOrder = "name"
  });
}]);

artistController.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function (data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if($routeParams.itemId > 0){
      console.log(1);
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      console.log(2);
      $scope.prevItem = $scope.artists.length - 1;
    }

    if($routeParams.itemId < ($scope.artists.length - 1)){
      console.log(3);
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      console.log(4);
      $scope.nextItem = 0;
    }

  });
}]);

