'use client';

import { useState, useTransition } from 'react';
import { Issues, Projects, Reports } from './screens';
import { TabButton } from './tab-button';

type Screens = 'issues' | 'projects' | 'reports';

export default function GoodDesign() {
  const [tab, setTab] = useState<Screens>('issues');

  const [isPending, startTransition] = useTransition();

  const onTabClick = (tab: Screens) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div className="container">
      <div className="tabs">
        <TabButton
          isActive={tab === 'issues'}
          onClick={() => onTabClick('issues')}
          name="Issues"
        />
        <TabButton
          isActive={tab === 'projects'}
          onClick={() => onTabClick('projects')}
          name="Projects"
          isLoading={isPending}
        />
        <TabButton
          isActive={tab === 'reports'}
          onClick={() => onTabClick('reports')}
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
