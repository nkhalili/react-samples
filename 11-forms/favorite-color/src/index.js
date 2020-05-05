import React, { Component } from 'react';
import { render } from 'react-dom';

class FavoriteColorFrom extends Component {

  state = { value: ''}

  newColor = e => 
    this.setState({ value: e.target.value })
    
  submit = e => {
    console.log(`New color: ${this.state.value}`)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favorite color:
          <input type="color" onChange={this.newColor}/>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

render(
  <FavoriteColorFrom />,
  document.getElementById('root')
);
