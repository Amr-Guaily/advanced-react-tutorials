'use client';

import { SlowComponent } from '@/components/slow-component';
import { ReactNode, useState } from 'react';
import MovingBlock from './moving-block';

export default function GoodDesign() {
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
        {/* 
            It doesn't make sense: didn't just say React re-renders all components down the render tree!
            So, HOW <heavyComponent/> is NOT re-rendered when the state changes!?
              ## "Components passed as `children` don't re-render since they are just `PROPS`".

            To make sence of what exactly is happening, we need to understand a few new things:
              - What are `components`: Components are just functions, if a comp has `props`, those are just the function's arguments (nothing more).
              - what makes a simple function a comoonent: Its return value is a React Element.
              - What is a React Element: This is a syntax suger for a function `React.createElement`,
                that returns an object. And this object is just a description of the things you want to see on the screen.
              - Updating Elements: The only way to update an elemnet, and trigger its corresponding componet re-render is to "RE-CREATE THE ELEMENT IT SELF".
                This is exactly what is happing during re-renders.

            Now, we can answer the question: "HOW components passed as props NOT re-rendered!?".
              - "children" is a <SlowComponent /> that is created outside <GoodDesign/>.
              - when the <ScrollableWithMovingBlock/> re-renders because of its state change => Its props stay the same.
              - Therefore Element that comes as props won't be re-created, 
              - And therefore re-renders of its corrosponding component won't happen.
        */}
        {children}
      </div>
    </div>
  );
};
