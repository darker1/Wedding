'use strict';

describe('Service: rsvp', function () {

  // load the service's module
  beforeEach(module('weddingApp'));

  // instantiate service
  var rsvp;
  beforeEach(inject(function (_rsvp_) {
    rsvp = _rsvp_;
  }));

  it('should do something', function () {
    expect(!!rsvp).toBe(true);
  });

  it('should return 4 parties', function(){
    expect(rsvp.parties().length === 4);
  });
});
