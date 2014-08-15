'use strict';

angular
  .module('portfolioApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.items = [

      {
        title: 'Narwhal Skewers',
        description: 'The successful Kickstarter project, Narwhal Skewers, needed a product website to show potential clients. In order to meet a tight deadline and facilitate updates by the owner, I modified the CSS, HTML, and PHP of a WordPress template.',
        image: '/images/narwhalskewers.png'
      },

    ];

  });