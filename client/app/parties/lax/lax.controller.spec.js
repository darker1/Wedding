'use strict';

describe('Controller: LaxCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var LaxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LaxCtrl = $controller('LaxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
