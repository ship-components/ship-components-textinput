/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../src/TextInput';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <h1>{'<TextInput> Examples'}</h1>
        <div className='example-group'>
          <h2>Basic</h2>
          <TextInput />
          <code>
{
`<TextInput onChange={this.handleChange} />`
}
          </code>
        </div>

        <div className='example-group'>
          <h2>Labels</h2>
          <TextInput label='Username...' />
          <code>
{
`<TextInput label='Username...' onChange={this.handleChange} />`
}
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
