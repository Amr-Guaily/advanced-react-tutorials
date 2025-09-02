import { useFormState } from '../../_context/form-providor';
import { Section } from './section';

export const ActionsSection = () => {
  const { onSave } = useFormState();
  console.info('ActionsSection render');
  return (
    <Section title="Actions">
      <button onClick={onSave}>Save form</button>
    </Section>
  );
};
