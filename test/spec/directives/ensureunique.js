'use strict';

describe('Directive: ensureUnique', function () {

  // load the directive's module
  beforeEach(module('angularCalendarAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ensure-unique></ensure-unique>');
    element = $compile(element)(scope);
   // expect(element.text()).toBe('this is the ensureUnique directive');
  }));
});
