import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('Test App Entry Point', () => {
  it('should have a header tag with text "Hello from React!"', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toEqual("Hello from React!");
  });
});

