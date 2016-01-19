'use strict';

describe('Controller: CeremonyCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var CeremonyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CeremonyCtrl = $controller('CeremonyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
