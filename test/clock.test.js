import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Clock from '../src/components/clock';

describe("Clock", function() {
  beforeEach(() => {
    this.now = new Date();
    this.wrapper = shallow(<Clock/>);
    this.wrapper.instance().setTime(new Date(this.now));
  });

  it("renders a div", () => {
    expect(this.wrapper.find('div').length).to.equal(1);
  });

  it("displays the correct time based on the date object received", () => {
    expect(this.wrapper.state().hours).to.equal(this.now.getHours());
    expect(this.wrapper.state().minutes).to.equal(this.now.getMinutes());
  });

  it("updates the time automatically", (done) => {
    const timer = sinon.useFakeTimers();
    const firstTime = this.wrapper.state().minutes;
    
    setTimeout(done, 60000);
    timer.tick(61000);

    const currentTime = this.wrapper.state().minutes;
    expect(currentTime).to.equal(parseInt(firstTime) + 1);
    
    done();
    timer.restore();
  });
});