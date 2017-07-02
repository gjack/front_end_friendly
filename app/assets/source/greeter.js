import React from 'react';

class Greeter extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>
  }
}

Greeter.defaultProps = {
  name: "world"
};

export default Greeter;
