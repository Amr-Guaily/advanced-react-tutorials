import { DiscountFormComponent } from './discount-form-component';
import { Section } from './section';

export const ValueCalculationsSection = () => {
  console.info('ValueCalculationsSection render');
  return (
    <Section title="Value calculation">
      <DiscountFormComponent />
    </Section>
  );
};
