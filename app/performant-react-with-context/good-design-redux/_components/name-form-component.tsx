import { ChangeEvent } from 'react';
import {
  useFormAPI,
  useFormName,
} from '../../good-design/_context/form-providor';

export const NameFormComponent = () => {
  const name = useFormName();
  const { onNameChange } = useFormAPI();
  console.info('NameFormComponent render');

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value);
  };

  return (
    <div>
      Type your name here: <br />
      <input onChange={onValueChange} value={name ?? ''} />
    </div>
  );
};
