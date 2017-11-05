import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TitleBar from '../src/components/titlebar';
import * as projectData from './test-data/project.data.js';

describe("TitleBar", function() {
  beforeEach(() => {
    this.wrapper = shallow(<TitleBar project={projectData.defaultItem} />);
  });

  it("renders self", () => {
    expect(this.wrapper.find('.titlebar').length).to.equal(1);
    expect(this.wrapper.find('.titlebar__text').text()).to.equal(projectData.defaultItem.title);
  });
});