'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('party', {
        url: '/parties',
        templateUrl: 'app/party/party.html',
        controller: 'PartyCtrl'
      });
  });