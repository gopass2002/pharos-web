'use strict';

describe('Service: pharosService', function () {

  // load the service's module
  beforeEach(module('pharosWebApp'));

  // instantiate service
  var pharosService;
  beforeEach(inject(function (_pharosService_) {
    pharosService = _pharosService_;
  }));

  it('should do something', function () {
    expect(!!pharosService).toBe(true);
  });

});
