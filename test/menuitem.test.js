import React from 'react';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { MenuItem } from '../src/components/menuitem';
import * as data from './test-data/menuitem.data.js';

describe("MenuItem", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.wrapper = shallow(<MenuItem {...data.defaultItem} item={data.item} onClick={this.callback} />);
    // this.contactWrapper = shallow(<Popup {...data.contactItem} onClick={this.callback} />);
    // this.projectsWrapper = shallow(<Popup {...data.projectsItem} onClick={this.callback} sideProjects={data.sideProjects}/>);
  });

  // it("renders self", () => {
  //   expect(this.wrapper.find('.menu-item').length).to.equal(1);
  // });

  // it("renders contact", () => {
  //   expect(this.contactWrapper.find('.popup__inner-wrapper--contact').length).to.equal(1);
  //   expect(this.contactWrapper.find('.popup__link').length).to.equal(data.contactItem.links.length);
  // });

  // it("renders side projects", () => {
  //   expect(this.projectsWrapper.find('.popup__projects-wrapper').length).to.equal(1);
  //   expect(this.projectsWrapper.find('.popup__project').length).to.equal(data.sideProjects.length);
  // });

  // it("calls the onClick prop when the button is clicked", () => {
  //   this.wrapper.find('button').simulate('click');
  //   assert(this.callback.calledOnce);
  // });
});