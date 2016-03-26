import React from 'react';
import { render } from 'react-dom';
import Project from './project';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.projects.map((project) => <Project key={project.id} {...project} />)}
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
}

getAllProjects((projects) => {
  render(<App projects={projects} />, document.getElementById('app'));
});
