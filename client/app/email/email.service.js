'use strict';

angular.module('weddingApp')
  .service('emailService', [ '$http', function ($http) {
    return {
      saveEmail : function(email){
        return $http.post('/api/emails', email);
      }
    };
  }]);
