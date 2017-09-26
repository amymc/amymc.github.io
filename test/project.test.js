import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Project } from '../src/components/project';

describe("Project", function() {
  beforeEach(() => {
    const item = {
      title: 'Twin peaks',
      type: 'lynchian',
      description: [
        'There was a fish in the percolator'
      ],
      company_url: 'http://fake-url.com',
      tech_stack: 'I, do, not, introduce, the, log',
      isOpen: false,
      isSelected: false
    }
    const isPortrait = { ...item, 
      hasPortraitImages: true, 
      image_urls: ['dots/twodots_screenshot1.png',
        'dots/twodots_screenshot2.png',
        'dots/dots_screenshot1.png'
      ]
    };
    const isLandscape = { ...item, 
      hasPortraitImages: false, 
      image_urls: [
        'ostmodern/bfi_screenshot1.png',
        'ostmodern/bfi_screenshot2.png'
      ]
    };

    this.landscapeWrapper = shallow(<Project {...isLandscape} />);
    this.portraitWrapper = shallow(<Project {...isPortrait} />);
  });

  it("renders project div", () => {
    expect(this.landscapeWrapper.find('.project').length).to.equal(1);
  });

  it("renders portrait layout for portrait images", () => {
    expect(this.landscapeWrapper.find('.project__image--portrait').length).to.equal(0);
    expect(this.portraitWrapper.find('.project__image--portrait').length).to.be.greaterThan(0);
  });

  // it("contains a close button", () => {
  //   expect(this.wrapper.find(CloseButton).length).to.equal(1);
  // });
});
