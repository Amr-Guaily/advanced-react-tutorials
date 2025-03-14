'use client';

import BadDesign from './_components/bad-design';
import GoodDesign from './_components/good-design';

export default function ChildrenAsPropsComposition() {
  return (
    <div className="flex items-center gap-4 ">
      <div className="border-2 border-gray-400 bg-blue-200 w-1/2 p-2 text-2xl">
        <h2 className="text-center underline font-semibold">Bad design</h2>
        <BadDesign />
      </div>

      <div className="border-2 border-gray-400 bg-blue-200 w-1/2 p-2 text-2xl">
        <h2 className="text-center underline font-semibold">
          Performant design
        </h2>
        <GoodDesign />
      </div>
    </div>
  );
}
