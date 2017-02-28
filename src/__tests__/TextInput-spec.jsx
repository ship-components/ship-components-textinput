jest.unmock('../TextInput');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('TextInput', () => {
  let TextInput;
  beforeEach(() => {
    TextInput = require('../TextInput').default;
  });

  // Render without error
  it('should render without error', () => {
    let element = React.createElement(
       TextInput, // component class
       {} // props go here
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('should support custom css classes', () => {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <TextInput
        className={className}
      />
    );
    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });
});
