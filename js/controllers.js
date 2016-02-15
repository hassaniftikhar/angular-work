var myApp = angular.module('myApp', []);

myApp.controller('myController', function myController($scope) {
      $scope.author = {
        'name': 'Alan',
        'title': 'Author',
        'company': 'workforce.com'
      }
    });

