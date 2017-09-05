import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import WindowTitle from '../src/components/windowtitle';
import CloseButton from '../src/components/closebutton';

describe("Windowtitle", function() {
  beforeEach(() => {
    this.wrapper = shallow(<WindowTitle title={'Fake title'}/>);
  });

  it("renders a div", () => {
    expect(this.wrapper.find('div').length).to.equal(1);
  });


  it("displays the title", () => {
    expect(this.wrapper.find('.window-title__heading').text()).to.equal('Fake title');
  });

  it("contains a close button", () => {
    expect(this.wrapper.find(CloseButton).length).to.equal(1);
  });
});
