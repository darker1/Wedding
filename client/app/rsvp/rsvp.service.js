'use strict';

angular.module('weddingApp')
  .service('rsvpService',[ '$http', function ($http) {
    return {
      save : function(rsvp){
        return $http.post('/api/rsvps', rsvp);
      }
    };
  }]);
