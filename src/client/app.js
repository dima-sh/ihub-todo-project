import React from 'react';
import { render } from 'react-dom';
import Project from './project';

function renderItems(items = []) {
  return items.map((project) => <Project key={project.id} {...project} />)
}

class App extends React.Component {
  render() {

    const { projects } = this.props;

    return (
      <div>
        {renderItems(projects)}
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
}

function renderApp(projects) {
  render(<App projects={projects} />, document.getElementById('app'));
}

renderApp();

getAllProjects(renderApp);
