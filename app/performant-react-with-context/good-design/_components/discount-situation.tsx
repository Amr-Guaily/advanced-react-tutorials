import { useFormState } from '../../_context/form-providor';

export const DiscountSituation = () => {
  const { state } = useFormState();

  console.info('Discount situation render');
  const discountPercent = Math.round((state.discount / 300) * 100);

  let discountSituation = '😊';
  if (discountPercent < 10) discountSituation = '😊';
  // eslint-disable-next-line react/no-unescaped-entities
  else if (discountPercent < 50) discountSituation = '😐';
  else discountSituation = '🤣';

  return <div>Your discount situation: {discountSituation}</div>;
};
