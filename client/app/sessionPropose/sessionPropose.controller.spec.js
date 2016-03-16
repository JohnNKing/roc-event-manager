'use strict';

describe('Controller: SessionProposeCtrl', function () {

  // load the controller's module
  beforeEach(module('rocEventManagerApp'));

  var SessionProposeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionProposeCtrl = $controller('SessionProposeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
