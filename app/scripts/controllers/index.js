'use strict';

angular.module('portfolioApp')
  .controller('IndexCtrl', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };
  });