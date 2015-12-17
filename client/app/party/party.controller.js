'use strict';

angular.module('weddingApp')
  .controller('PartyCtrl', ['$scope', 'rsvpService', function ($scope, rsvpService) {
    
    $scope.guests = [];
    $scope.guestCount = $scope.guests.length;
    
    $scope.parties = rsvpService.parties();
    
    $scope.saveRsvp = function(rsvp){
      rsvpService.saveRsvp(rsvp);
    };
    
    $scope.selectGuestCount = function(num){
      $scope.guestCount = num;
      if(num > $scope.guests.length){
        for(let i = $scope.guests.length; i < num; i++){
          $scope.guests.splice($scope.guests.length, 0, '');
        }
      } else {
        $scope.guests.splice($scope.guests.length, $scope.guests.length - num);
      }
    };
    $scope.status = {
      isopen: false
    };
    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }]);
