/** @jsxImportSource @emotion/react */

import { useFormAPI } from '../../_context/form-providor';
import { DraggingBar } from '../../_dragging-bar-library';

export const DiscountFormComponent = () => {
  const { onDiscountChange } = useFormAPI();

  console.info('DiscountFormComponent render');
  return (
    <div>
      Please select your discount here: <br />
      <DraggingBar onChange={(value: number) => onDiscountChange(value)} />
    </div>
  );
};
