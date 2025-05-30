'use client';

import { useEffect } from 'react';
import { ItemsList } from './slow-components';

export const useLogOnRender = (name: string) => {
  /**
   * Why useEffect?
   * Ensures the log happens after the component has rendered ➡ runs after every render if no dependency array is provided.
   * If you put the log directly in the comp function, it would run on every render as well, but using useEffect is a common pattern for side effects (like logging, data fetching, subscriptions, etc.), keeping side-effect logic separate from rendering logic.
   */

  useEffect(() => {
    console.info('Re-render: ', name);
  });
};

export const Issues = () => {
  useLogOnRender('Issues');

  return <div className="issues">List of issues</div>;
};

export const Projects = () => {
  console.log('PROJECTS TRIGGER');
  useLogOnRender('Projects');

  return (
    <div className="projects">
      My projects: very slow list of them
      <br />
      <br />
      <ItemsList />
    </div>
  );
};

export const Reports = () => {
  console.log('REPORTS TRIGGER');
  useLogOnRender('Reports');

  return <div className="reports">Available reports</div>;
};
