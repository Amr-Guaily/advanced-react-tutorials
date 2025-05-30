const SlowItem = ({ id }: { id: string }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 20) {
    // Do nothing for 20ms
  }

  console.log(`Post #${id} + 1`);
  return <div className="post">Post #{id + 1}</div>;
};

export const ItemsList = () => {
  const items = [...(Array(100).keys() as any)];

  return (
    <div className="items-list">
      {items.map((id) => (
        <SlowItem key={id} id={id} />
      ))}
    </div>
  );
};
