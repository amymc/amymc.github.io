import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { Window } from '../src/components/window';
import * as projectData from './test-data/project.data.js';

describe("Window", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.wrapper = shallow(<Window item={projectData.item} onMouseDown={this.callback(projectData.item.title)} />);
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

  it("calls the onMouseDown prop on mouse down", () => {
    this.wrapper.simulate('mouseDown');
    assert(this.callback.calledOnce);
  });
});