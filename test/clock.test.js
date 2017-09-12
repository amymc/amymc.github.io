import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Clock from '../src/components/clock';

describe("Clock", function() {
  beforeEach(() => {
    this.now = new Date();
    this.wrapper = shallow(<Clock/>);
    this.wrapper.instance().setTime(this.now);
  });

  it("renders a div", () => {
    expect(this.wrapper.find('div').length).to.equal(1);
  });

  it("displays the correct time based on the date object received", () => {
    expect(this.wrapper.state().hours).to.equal(this.now.getHours());
    expect(this.wrapper.state().minutes).to.equal(this.now.getMinutes());
  });

  it("updates the time automatically", () => {
    const timer = sinon.useFakeTimers();
    const firstTime = this.wrapper.state().minutes;

    // TODO: test that setTimeout works 😬
    timer.tick(60000);
    // this.wrapper.update();
    console.log('this.wrapper.state()', this.wrapper.state(), 'timer', timer);
    const currentTime = this.wrapper.state().minutes;
    console.log('currentTime', parseInt(currentTime),'firstTime', parseInt(firstTime) + 1);
    expect(currentTime).to.equal(parseInt(firstTime) + 1);
    timer.restore();
  });
});