'use client';

import { SlowComponent } from '@/components/slow-component';
import { useState } from 'react';
import MovingBlock from './moving-block';

export default function BadDesign() {
  /**
   * Every scroll we're changing the state, and every state change causes a re-render of the Comp and its children including the <SlowComponent/>.
   *
   * NOTE: We can not just "MOVE STATE DOWN" because the state is used on the element that wraps the slow portion of the render tree.
   *
   * TO FIX:
   *  - Thy way to fight this, other than `React.memo` is to extract the wrapper(<div onScroll={onScroll} />) outside and pass <SlowComponent/> as a prop (children).
   *  - This composition called "Wrap state around children".
   *
   * Implementation is in the component "GoodDesign":
   */
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
        <SlowComponent />
      </div>
    </div>
  );
}
