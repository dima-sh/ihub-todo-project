import React from 'react';
import Header from './header';

const Project = ({ name, id }) => (

  <article>
    <Header name={name} projectId={id} />
  </article>
);

export default Project;
