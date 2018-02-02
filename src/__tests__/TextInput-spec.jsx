jest.unmock('../TextInput');

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('TextInput', () => {
  let TextInput;
  beforeEach(() => {
    TextInput = require('../TextInput').default;
  });

  // Render without error
  it('renders without error', () => {
    let element = React.createElement(
       TextInput, // component class
       {} // props go here
    );

    expect(() => ReactTestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('supports custom css classes', () => {
    let className = 'testClass';
    let reactTree = ReactTestUtils.renderIntoDocument(
      <TextInput
        className={className}
      />
    );
    let comp = ReactTestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });

  const supportedEvents = ['Change','Focus','Blur','KeyDown'];
  supportedEvents.forEach(eventType => {
    it(`calls a ${eventType.toLowerCase()} handler`, () => {
      const mockHandler = jest.fn();
      const props = {
        [`on${eventType}`]: mockHandler
      }
      const wrapper = mount(
        <TextInput {...props}/>
      );

      expect(mockHandler).not.toHaveBeenCalled();
      wrapper.find('textarea').simulate(eventType.toLowerCase());
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  });

});
