'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ord', {
        url: '/party/ord',
        templateUrl: 'app/parties/ord/ord.html',
        controller: 'OrdCtrl'
      });
  });