'use client';

export const SlowComponent = () => {
  const items = [...(Array(10).keys() as any)];

  return (
    <ul>
      {items.map((id) => (
        <SlowItem id={id} key={id}></SlowItem>
      ))}
    </ul>
  );
};

const SlowItem = ({ id }: { id: number }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 5) {
    // Do Nothing for 5ms per item to emulate extremely solw code
  }

  console.log(`Post #{${id} + 1}`);
  return <></>;
};
