import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Folder from '../src/components/folder';
import * as projectData from './test-data/project.data.js';

describe("Folder", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.wrapper = shallow(<Folder project={projectData.defaultItem} onClick={this.callback} />);
  });

  it("renders self", () => {
    expect(this.wrapper.find('.folder').length).to.equal(1);
    expect(this.wrapper.find('.folder__title').text()).to.equal(projectData.defaultItem.title);
  });

  it("calls the onClick prop when clicked", () => {
    this.wrapper.find('.folder').simulate('click');
    assert(this.callback.calledOnce);
  });
});