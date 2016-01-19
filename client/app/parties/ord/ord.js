'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ORD', {
        url: '/party/ord',
        templateUrl: 'app/parties/ORD/ORD.html',
        controller: 'ORDCtrl'
      });
  });