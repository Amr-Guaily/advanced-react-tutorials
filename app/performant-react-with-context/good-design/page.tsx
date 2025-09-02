'use client';

import { FormDataProvider } from '../_context/form-providor';
import { ActionsSection } from './_components/actions-section';
import { PersonalInfoSection } from './_components/personal-info-section';
import { ValueCalculationsSection } from './_components/value-calculation-section';

const Form = () => {
  console.info('Form render');

  return (
    <div className="App">
      <PersonalInfoSection />
      <ValueCalculationsSection />
      <ActionsSection />
    </div>
  );
};

export default function App() {
  return (
    <FormDataProvider>
      <Form />
    </FormDataProvider>
  );
}
