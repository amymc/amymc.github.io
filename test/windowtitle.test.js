import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import WindowTitle from '../src/components/windowtitle';
import CloseButton from '../src/components/closebutton';

describe("Windowtitle", function() {
  // beforeEach(() => {
  //   props.title = "Fake title";
  // });

  //console.log('test', WindowTitle);

  it("contains a close button", () => {
    const wrapper = shallow(<WindowTitle />);
    expect(wrapper.find(CloseButton).length).to.equal(1);
    //expect(divs.length).toBeGreaterThan(0);
  });

  it("displays the title", function() {
    
  });

  it("closes the window on clicking the close button", function() {
    
  });
});


// describe('<MyInputComponent/>', () => {
//     it('renders without exploding', () => {
//         const wrapper = shallow(<MyInputComponent />);
//         expect(wrapper.find(MyInputComponent).length).to.equal(1);
//     });
// });