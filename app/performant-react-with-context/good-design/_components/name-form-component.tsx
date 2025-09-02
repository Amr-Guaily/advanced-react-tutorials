import { ChangeEvent } from 'react';
import { useFormState } from '../../_context/form-providor';

export const NameFormComponent = () => {
  const { onNameChange, state } = useFormState();
  console.info('NameFormComponent render');

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value);
  };

  return (
    <div>
      Type your name here: <br />
      <input onChange={onValueChange} value={state.name} />
    </div>
  );
};
