import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import MenuItem from '../src/components/menuitem';
import Menu from '../src/components/menu';
import * as data from './test-data/menuitem.data.js';

describe("MenuItem", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.wrapper = shallow(<MenuItem item={data.item} onClick={this.callback} />);
  });

  it("renders self", () => {
    expect(this.wrapper.find('.menu-item').length).to.equal(1);
  });

  it("renders submenu on hover if available", () => {
    this.wrapper.simulate('mouseOver');
    expect(this.wrapper.find('.menu-item').children('Menu').length).to.equal(1);
  });

  // it("renders side projects", () => {
  //   expect(this.projectsWrapper.find('.popup__projects-wrapper').length).to.equal(1);
  //   expect(this.projectsWrapper.find('.popup__project').length).to.equal(data.sideProjects.length);
  // });

  // it("calls the onClick prop when the button is clicked", () => {
  //   this.wrapper.find('button').simulate('click');
  //   assert(this.callback.calledOnce);
  // });
});