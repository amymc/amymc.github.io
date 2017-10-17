import React from 'react';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Project } from '../src/components/project';
import * as data from './test-data/project.data.js';

describe("Project", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.noUrl = { ...data.noUrl, 
    actions: {
      openPopup: this.callback
    }
  };

    this.defaultWrapper = shallow(<Project {...data.defaultItem} />);
    this.portraitWrapper = shallow(<Project {...data.isPortrait} />);
    this.noUrlWrapper = shallow(<Project {...this.noUrl} />);
  });

  it("renders self and sub-components", () => {
    expect(this.defaultWrapper.find('.project').length).to.equal(1);
    expect(this.defaultWrapper.find('.project').text()).to.contain(data.item.description, data.item.tech_stack, data.item.type);
  });

  it("renders portrait layout for portrait images", () => {
    expect(this.defaultWrapper.find('.project__image--portrait').length).to.equal(0);
    expect(this.portraitWrapper.find('.project__image--portrait').length).to.be.greaterThan(0);
  });

  it("only renders a link if company url is present", () => {
    expect(this.defaultWrapper.find('a').length).to.equal(1);
    expect(this.defaultWrapper.find('button').length).to.equal(0);
    expect(this.noUrlWrapper.find('a').length).to.equal(0);
    expect(this.noUrlWrapper.find('button').length).to.equal(1);
  });

  it("calls the onClick prop when the button is clicked", () => {
    this.noUrlWrapper.find('button').simulate('click');
    assert(this.callback.calledOnce);
  });
});
