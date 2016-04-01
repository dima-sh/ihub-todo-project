import React from 'react';
import Header from './header';
import TopBar from './bar';

const Project = ({ name, id }) => (

  <article>
    <Header name={name} projectId={id} />
    <TopBar />
  </article>
);

export default Project;
