'use strict';

describe('Controller: ORDCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var ORDCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ORDCtrl = $controller('ORDCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
