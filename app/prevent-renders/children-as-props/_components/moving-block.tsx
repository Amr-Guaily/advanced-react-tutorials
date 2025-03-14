export default function MovingBlock({ position }: { position: number }) {
  return (
    <div
      className="absolute left-0 h-8 bg-blue-500 px-5 rounded-md text-lg text-white flex items-center justify-center"
      style={{ top: `${position}%` }}
    >
      {position.toFixed(2)}%
    </div>
  );
}
