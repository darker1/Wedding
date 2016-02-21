'use strict';

angular.module('weddingApp')
    .controller('PartyMsyCtrl', ['$scope', 'rsvpService', 'Modal', function ($scope, rsvpService, Modal) {

        $scope.createRsvp = Modal.Rsvp.msy(function(rsvp) {
            rsvp.party = "MSY";
            rsvpService.save(rsvp);
        });
    }]);
