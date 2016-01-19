'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ceremony', {
        url: '/ceremony',
        templateUrl: 'app/ceremony/ceremony.html',
        controller: 'CeremonyCtrl'
      });
  });