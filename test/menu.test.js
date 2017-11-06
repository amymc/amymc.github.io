import React from 'react';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
// import MenuItem from '../src/components/menuitem';
import Menu from '../src/components/menu';
import * as data from './test-data/menuitems.data.js';

describe("Menu", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.menuWrapper = shallow(<Menu items={data.items} onClick={this.callback} />);
    this.submenuWrapper = shallow(<Menu items={data.items[0].items} type={'submenu'} onClick={this.callback} />);
  });

  it("renders self", () => {
    expect(this.menuWrapper.find('.menu').length).to.equal(1);
  });

  it("renders correct style if submenu", () => {
    expect(this.menuWrapper.find('.menu--main').length).to.equal(1);
    expect(this.submenuWrapper.find('.menu--submenu').length).to.equal(1);
  });
});