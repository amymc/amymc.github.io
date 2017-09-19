import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import StartBar from '../src/components/startbar';
import TitleBar from '../src/components/titlebar';

describe("StartBar", function() {
  beforeEach(() => {
    this.callback = sinon.spy();
    this.openProjects = [
      { title: 'what'},
      { title: 'is'},
      { title: 'the'},
      { title: 'nature'},
      { title: 'of'},
      { title: 'reality'},
      { title: '?'},
    ]
    this.emptyWrapper = shallow(<StartBar onClick={this.callback} active={false} openProjects={null}/>);
    this.wrapper = shallow(<StartBar onClick={this.callback} active={false} openProjects={this.openProjects}/>);
  });

  it("renders a div", () => {
    expect(this.wrapper.find('div').length).to.equal(1);
  });

  it("displays a titlebar for every open project", () => {
    expect(this.emptyWrapper.find(TitleBar).length).to.equal(0);
    expect(this.wrapper.find(TitleBar).length).to.equal((this.openProjects).length);
    
  });

   it("calls the onClick prop when the button is clicked", () => {
    this.wrapper.find('button').simulate('click');
    assert(this.callback.calledOnce);
  });
});
