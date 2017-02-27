/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../src/TextInput';

class Examples extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      firstTextInput: '',
      secondTextInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, event) {
    event.preventDefault();

    this.setState({
      [prop]: event.target.value
    });
  }


  render() {
    return (
      <div>
        <h1>{'<TextInput> Examples'}</h1>
        <div className='example-group'>
          <h2>Basic</h2>
          <TextInput
            value={this.state.firstTextInput}
            onChange={this.handleChange.bind(this, 'firstTextInput')}
          />
          <code>
{
`<TextInput onChange={this.handleChange} />`
}
          </code>
        </div>

        <div className='example-group'>
          <h2>Labels</h2>
          <TextInput
            label='Username...'
            value={this.state.secondTextInput}
            onChange={this.handleChange.bind(this, 'secondTextInput')}
          />
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
