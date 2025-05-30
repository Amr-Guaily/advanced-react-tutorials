'use client';

import { useState } from 'react';
import { TabButton } from './tab-button';
import { Issues, Projects, Reports } from './screens';

type Screens = 'issues' | 'projects' | 'reports';

export default function BadDesign() {
  const [tab, setTab] = useState<Screens>('issues');

  return (
    <div className="container">
      <div className="tabs">
        <TabButton
          isActive={tab === 'issues'}
          onClick={() => setTab('issues')}
          name="Issues"
        />
        <TabButton
          isActive={tab === 'projects'}
          onClick={() => setTab('projects')}
          name="Projects"
        />
        <TabButton
          isActive={tab === 'reports'}
          onClick={() => setTab('reports')}
          name="Reports"
        />
      </div>
      <div className="content">
        {tab === 'issues' && <Issues />}
        {tab === 'projects' && <Projects />}
        {tab === 'reports' && <Reports />}
      </div>
    </div>
  );
}
