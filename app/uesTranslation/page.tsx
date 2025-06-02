import BadDesign from './_components/bad-design';
import GoodDesign from './_components/good-design';

export default function UseTranslation() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h2 className="text-center underline font-semibold">Bad design</h2>
        <BadDesign />
      </div>

      <div>
        <h2 className="text-center underline font-semibold">
          Performant design
        </h2>
        <GoodDesign />
      </div>
    </div>
  );
}
