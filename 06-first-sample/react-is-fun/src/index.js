import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Message />,
  document.getElementById('root')
);
