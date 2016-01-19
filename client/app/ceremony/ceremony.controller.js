'use strict';

angular.module('weddingApp')
  .controller('CeremonyCtrl', ['$scope', 'airportService', function ($scope, airportService) {
  

    $scope.numberOfPassengers = '';
    
    /***************** 
     * Airports Setup
     ******************/
    let setupAirports = function(data){
        $scope.airports = data;
    };
    
    $scope.airports = [];  
    airportService.getAirports().success(setupAirports);
    $scope.selectedAirport;
    
    $scope.airportFilter = function(airports, typedValue){
        if(typedValue)
            typedValue = typedValue.toLowerCase();
        return airports.filter(function(airport) {
            let matchesCity = airport.city.toLowerCase().indexOf(typedValue) != -1;
            let matchesCode = airport.code.toLowerCase().indexOf(typedValue) != -1;
            let matchesName = airport.name.toLowerCase().indexOf(typedValue) != -1;
            return matchesCity || matchesCode || matchesName;
        });    
    };
       
    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };
         
     /***************** 
     * Cal Setup
     ******************/    
         
    $scope.depart = new Date(2016, 4, 5);
    $scope.return = new Date(2016, 4, 9);
    $scope.minDate = new Date(2016, 4, 3);
    $scope.maxDate = new Date(2016, 4, 20);

    $scope.clear = function() {
        $scope.depart = null;
        $scope.return = null;
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };
    
    /***************
     * airline Urls
     ***************/
     let southwest = 'https://global.southwest.com/southwest/dyn/air/booking/availability?DATE_1={{DepartDate}}&DATE_2={{ReturnDate}}&TRIP_TYPE=R&B_LOCATION_1={{DepartCity}}&E_LOCATION_1=PVR&E_LOCATION_2=&IS_FLEXIBLE=FALSE&NB_ADT={{NumPass}}&NB_YCD=0&USE_DING=FALSE&USE_POINTS=FALSE&PROMO_CODE=&ENC=&ENCT=2&LANGUAGE=US&SITE=ADCQADCQ&MAX_AIR_AVAIL_DAYS=200&PORTAL_DOMAIN=&MARKETS=&int=';
     let kayak = 'https://www.kayak.com/flights/{{DepartCity}}-PVR/{{DepartDate}}/{{ReturnDate}}'
     
     let numPass = '{{NumPass}}';
     let departCity = '{{DepartCity}}';
     let departDate = '{{DepartDate}}';
     let returnDate = '{{ReturnDate}}';
     
     let dateAdd0 = function(n) {
        return n < 10 ? '0' + n : '' + n;
     }
    
     let getSouthwestDate = function(d){
         return d.getUTCFullYear().toString() 
                            + dateAdd0(d.getMonth() + 1) 
                            + dateAdd0(d.getDate()) 
                            + '0000';
     };
     
     let getKayakDate = function(d){
        return d.getUTCFullYear().toString() + '-' + dateAdd0(d.getMonth() + 1) + '-' + dateAdd0(d.getDate());
     };
     
     $scope.southwestUrl = function(){
         let parsedPass = parseInt($scope.numberOfPassengers);
         let numPassengers = isNaN(parsedPass) ? 1 : parsedPass;
         if(!$scope.selectedAirport){
             return 'www.southwest.com';
         }
         return southwest.replace(departCity, $scope.selectedAirport.code)
                         .replace(departDate, getSouthwestDate($scope.depart))
                         .replace(returnDate, getSouthwestDate($scope.return))
                         .replace(numPass, numPassengers.toString());
     };
     $scope.kayakUrl = function(){
         if(!$scope.selectedAirport){
             return 'www.kayak.com/flights';
         }
         return kayak.replace(departCity, $scope.selectedAirport.code)
                     .replace(departDate, getKayakDate($scope.depart))
                     .replace(returnDate, getKayakDate($scope.return));
     };
  }]);
