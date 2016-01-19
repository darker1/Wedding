'use strict';

describe('Controller: PartyMsyCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var PartyMsyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartyMsyCtrl = $controller('PartyMsyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
