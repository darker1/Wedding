'use strict';

angular.module('weddingApp')
  .service('airportService', [ '$http', function ($http) {
    return {
      getAirports : function(){
        return $http.get('assets/json/airports.json');
      }
    };
  }]);
