/** @jsxImportSource @emotion/react */

import { DraggingBar } from '../../_dragging-bar-library';
import { useFormAPI } from '../_context/form-providor';

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
