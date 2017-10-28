import React from 'react';
import { assert, expect } from 'chai';
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
    expect(this.wrapper.find('.menu-item__title').text()).to.equal(data.item.title);

    
  });

  it("renders submenu on hover if available", (done) => {
    this.wrapper.simulate('mouseOver');
    expect(this.wrapper.find('.menu-item').children('Menu').length).to.equal(1);

    this.wrapper.simulate('mouseOut');

    const timer = sinon.useFakeTimers();
    setTimeout(done, 50);
    timer.tick(51);

    expect(this.wrapper.find('.menu-item').children('Menu').length).to.equal(0);

    done();
    timer.restore();
  });

  // it("renders side projects", () => {
  //   expect(this.projectsWrapper.find('.popup__projects-wrapper').length).to.equal(1);
  //   expect(this.projectsWrapper.find('.popup__project').length).to.equal(data.sideProjects.length);
  // });

  it("calls the onClick prop when clicked", () => {
    this.wrapper.find('li').simulate('click');
    assert(this.callback.calledOnce);
  });
});