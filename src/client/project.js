import React from 'react';

class Project extends React.Component {
  render() {
    return <article>{this.props.name}</article>;
  }
}

export default Project;
