import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Window } from '../src/components/window';

describe("Window", function() {
  beforeEach(() => {
    this.wrapper = shallow(<Window/>);
  });

  it("renders a div", () => {
    expect(this.wrapper.find('div').length).to.equal(1);
  });
});