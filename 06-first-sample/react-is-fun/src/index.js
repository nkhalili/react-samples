import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.msg}
        </h1>
        <p>Minutes: {this.props.minutes}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message color="blue" msg="How are you doing?" minutes={5} />,
  document.getElementById('root')
);
