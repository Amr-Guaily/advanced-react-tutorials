'use client';

import { SlowComponent } from '@/components/slow-component';
import { ReactNode, useState } from 'react';
import MovingBlock from './moving-block';

export default function BadDesign() {
  return (
    <ScrollableWithMovingBlock>
      <SlowComponent />
    </ScrollableWithMovingBlock>
  );
}

const ScrollableWithMovingBlock = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState(0);

  const onScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const calculatedPosition =
      (scrollTop / (scrollHeight - clientHeight)) * 100;

    setPosition(calculatedPosition);
  };

  return (
    <div className="max-h-96 overflow-auto" onScroll={onScroll}>
      <div className="h-[2000px] relative">
        <MovingBlock position={position} />
        {/* Didn't just say the React re-renders all components down the render tree!
            So, HOW <heavyComponent/> === {children} is NOT re-rendered when the state changes!? 
        */}
        {children}
      </div>
    </div>
  );
};
