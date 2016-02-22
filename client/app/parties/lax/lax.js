'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lax', {
        url: '/party/lax',
        templateUrl: 'app/parties/lax/lax.html',
        controller: 'LaxCtrl'
      });
  });