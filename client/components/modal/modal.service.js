'use strict';

angular.module('weddingApp')
    .factory('Modal', ['$rootScope', '$uibModal', function ($rootScope, $uibModal) {
        /**
         * Opens a modal
         * @param  {Object} scope      - an object to be merged with modal's scope
         * @param  {String} modalClass - (optional) class(es) to be applied to the modal
         * @return {Object}            - the instance $modal.open() returns
         */
        function openModal(scope, modalClass) {
            var modalScope = $rootScope.$new();
            scope = scope || {};
            modalClass = modalClass || 'modal-default';

            angular.extend(modalScope, scope);

            return $uibModal.open({
                templateUrl: 'components/modal/modal.html',
                windowClass: modalClass,
                scope: modalScope
            });
        }

        // Public API here
        return {
            Rsvp: {
                msy: function (cb) {
                    cb = cb || angular.noop;

                    return function () {
                        var args = Array.prototype.slice.call(arguments),
                            name = args.shift(),
                            rsvpModal;
                        var data = { guests: 0 };
                        var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                        rsvpModal = openModal({
                            modal: {
                                rsvpData: data,
                                pattern: pattern,
                                dismissable: true,
                                title: 'Joining us in the Big Easy?',
                                html: '',
                                buttons: [{
                                    classes: 'btn-success',
                                    text: 'Yes',
                                    click: function (e) {
                                        if (data.name && (new RegExp(pattern)).test(data.email)) {
                                            e.attending = true;
                                            rsvpModal.close(e);
                                        }
                                    }
                                }, {
                                    classes: 'btn-Danger',
                                    text: 'No',
                                    click: function (e) {
                                        if (data.name) {
                                            e.attending = false;
                                            rsvpModal.close(e);
                                        }
                                    }
                                }]
                            }
                        }, 'modal-danger');

                        rsvpModal.result.then(function (event) {
                            data.attending = event.attending;
                            cb.apply(event, [data]);
                        });
                    };
                }
            }
        };
    }]);
