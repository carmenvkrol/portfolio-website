'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular
  .module('portfolioApp')
  .controller('MainCtrl', [
    '$scope',
    'myService',
    function ($scope, myService) {
      $scope.item = {};
      console.log($scope.item);
  }]);

angular
  .module('portfolioApp')
  .service('myService', function (DSCacheFactory) {

    var cache = new DSCacheFactory('cache', {
      capacity: 100,
      maxAge: 300000
    });

    cache.put('/items/1', {
      name: 'foo1',
      value: 1
    });

    cache.put('/items/2', {
      name: 'foo2',
      value: 2
    });
});
