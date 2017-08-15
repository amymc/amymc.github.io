import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import WindowTitle from '../src/components/windowtitle';

describe("Windowtitle", function() {
  beforeEach(() => {
    props.title = "Fake title";
  });

  it("always renders a div", () => {
    const divs = WindowTitle().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("displays the title", function() {
    
  });

  it("closes the window on clicking the close button", function() {
    
  });
});