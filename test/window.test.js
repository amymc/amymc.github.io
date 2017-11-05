import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { Window } from '../src/components/window';

describe("Window", function() {
  beforeEach(() => {
    this.wrapper = shallow(<Window/>);
  });

  it("renders a div", () => {
    expect(this.wrapper.find('div').length).to.equal(1);
  });

  it("only renders the draggable component on desktop", () => {
    this.wrapper.instance().checkWindowWidth();
    if (window.innerWidth > 540) {
      expect(this.wrapper.find('Draggable').length).to.equal(1);
    } else {
      expect(this.wrapper.find('Draggable').length).to.equal(0);
    }
  });
});