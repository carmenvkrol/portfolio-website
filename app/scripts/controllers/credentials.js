'use strict';

angular.module('portfolioApp')
  .controller('CredentialsCtrl', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };
  });