import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { Window } from '../src/components/window';
import * as projectData from './test-data/project.data.js';
import * as popupData from './test-data/popup.data.js';

describe("Window", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.projectWrapper = shallow(<Window item={projectData.item} isProject={true} onMouseDown={this.callback(projectData.item.title)} />);
    this.popupWrapper = shallow(<Window item={popupData.item} isProject={false} />);
  });

  it("renders a div", () => {
    expect(this.projectWrapper.find('div').length).to.equal(1);
  });

  it("only renders the draggable component on desktop", () => {
    this.projectWrapper.instance().checkWindowWidth();
    if (window.innerWidth > 540) {
      expect(this.projectWrapper.find('Draggable').length).to.equal(1);
    } else {
      expect(this.projectWrapper.find('Draggable').length).to.equal(0);
    }
  });

  it("calls the onMouseDown prop on mouse down", () => {
    this.projectWrapper.simulate('mouseDown');
    assert(this.callback.calledOnce);
  });

  it("displays correct layout", () => {
    expect(this.projectWrapper.find('.window--project').length).to.equal(1);
    expect(this.popupWrapper.find('.window--popup').length).to.equal(1);
  });

  it("checks width on resize", () => {

  });
});