import React from 'react';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Popup } from '../src/components/popup';

describe("Popup", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.item = {
      title: "Error",
      image_url: "error-icon.png",
      message: [
        "Control panel not found.",
        "Nevermind. Control is an illusion."
      ],
      links: null,
      button_text: "Cancel",
      isOpen: false,
      isSelected: false,
    };
    const contactItem = { 
      title: "Contact",
      image_url: "profile-pic.png",
      message: 'test',
      links: [
        {
          text: 'Github',
          url: 'http://github.com/amymc'
        },
        {
          text: 'LinkedIn',
          url: 'http://www.linkedin.com/in/mccarthyamy'
        },
        {
          text: 'Email',
          url: 'mailto:amy.mccarthy2@mail.dcu.ie?subject=hello amy'
        }
      ],
      isOpen: false,
      isSelected: false,
      isContact: true
    };
    const projectsItem = {
      title: "Random shit",
      image_url: null,
      message: null,
      links: null,
      button_text: null,
      isOpen: false,
      isSelected: false,
      isSideProjects: true
    };
    const sideProjects = [
      {
        title: 'cyoa',
        url: 'cyoa'
      },
      {
        title: 'd3 snl',
        url: 'd3-snl'
      },
      {
        title: 'old portfolio',
        url: 'old_portfolio'
      },
      {
        title: 'domo domination',
        url: 'domo-domination'
      }
    ];
    this.wrapper = shallow(<Popup {...this.item} onClick={this.callback} />);
    this.contactWrapper = shallow(<Popup {...contactItem} onClick={this.callback} />);
    this.projectsWrapper = shallow(<Popup {...projectsItem} onClick={this.callback} sideProjects={sideProjects}/>);
  });

  it("renders self", () => {
    expect(this.wrapper.find('.popup__outer-wrapper').length).to.equal(1);
  });

  it("renders contact", () => {
    expect(this.contactWrapper.find('.popup__inner-wrapper--contact').length).to.equal(1);
  });

  it("renders side projects", () => {
    expect(this.projectsWrapper.find('.popup__projects-wrapper').length).to.equal(1);
  });
});