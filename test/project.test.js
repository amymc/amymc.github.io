import React from 'react';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Project } from '../src/components/project';

describe("Project", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.item = {
      title: 'Twin peaks',
      type: 'lynchian',
      description: [
        'There was a fish in the percolator'
      ],
      tech_stack: 'I, do, not, introduce, the, log',
      isOpen: false,
      isSelected: false
    }
    const isPortrait = { ...this.item, 
      company_url: 'http://fake-url.com',
      hasPortraitImages: true, 
      image_urls: ['dots/twodots_screenshot1.png',
        'dots/twodots_screenshot2.png',
        'dots/dots_screenshot1.png'
      ]
    };
    const defaultItem = { ...this.item, 
      company_url: 'http://fake-url.com',
      hasPortraitImages: false, 
      image_urls: [
        'ostmodern/bfi_screenshot1.png',
        'ostmodern/bfi_screenshot2.png'
      ]
    };
    const noUrl = { ...this.item, 
      company_url: null,
      hasPortraitImages: false, 
      image_urls: [
        'ostmodern/bfi_screenshot1.png',
        'ostmodern/bfi_screenshot2.png'
      ],
      popup: {
        title: "false alarm"
      },
      actions: {
        openPopup: this.callback
      }
    };

    this.defaultWrapper = shallow(<Project {...defaultItem} />);
    this.portraitWrapper = shallow(<Project {...isPortrait} />);
    this.noUrlWrapper = shallow(<Project {...noUrl} />);
  });

  it("renders self and sub-components", () => {
    expect(this.defaultWrapper.find('.project').length).to.equal(1);
    expect(this.defaultWrapper.find('.project').text()).to.contain(this.item.description, this.item.tech_stack, this.item.type);
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
