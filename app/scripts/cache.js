/*'use strict';

angular
  .module('portfolioApp')
  .service('myService', function ($angularCacheFactory) {

    var cache = $angularCacheFactory('cache', {
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
});*/