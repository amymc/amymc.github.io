import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import WindowTitle from '../src/components/windowtitle';
import CloseButton from '../src/components/closebutton';

describe("CloseButton", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.wrapper = shallow(<CloseButton onClick={this.callback} />);
  });

  it("renders a button", () => {
    expect(this.wrapper.find('button').length).to.equal(1);
  });

  it("on click prop is called on clicking the close button", () => {
    this.wrapper.find('button').simulate('click');
    assert(this.callback.calledOnce);
  });
});