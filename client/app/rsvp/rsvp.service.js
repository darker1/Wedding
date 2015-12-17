'use strict';

angular.module('weddingApp')
  .service('rsvpService', [ '$http', function ($http) {
    return {
      saveRsvp : function(rsvp){
        return $http.put('/api/rsvps', rsvp);
      },
      parties : function(){
        return [{displayName: 'New Orleans', key: 'MSY'}
               ,{displayName: 'Chicago', key: 'ORD'}
               ,{displayName: 'Los Angeles', key: 'LAX'}
               ,{displayName: 'Puerta Vallarta', key: 'PVR'}];
      }
    };
  }]);
