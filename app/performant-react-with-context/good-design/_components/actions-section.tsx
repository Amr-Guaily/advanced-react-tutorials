import { useFormAPI } from '../_context/form-providor';
import { Section } from './section';

export const ActionsSection = () => {
  const { onSave } = useFormAPI();
  console.info('ActionsSection render');
  return (
    <Section title="Actions">
      <button onClick={onSave}>Save form</button>
    </Section>
  );
};
