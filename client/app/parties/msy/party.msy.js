'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('msy', {
        url: '/party/msy',
        templateUrl: 'app/parties/msy/msy.html',
        controller: 'PartyMsyCtrl'
      });
  });