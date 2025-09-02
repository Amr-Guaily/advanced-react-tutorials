'use client';

import { useState } from 'react';
import { FormDataProvider } from '../_context/form-providor';
import { Country } from '../_select-country-library';
import { ActionsSection } from './_components/actions-section';
import { PersonalInfoSection } from './_components/personal-info-section';
import { ValueCalculationsSection } from './_components/value-calculation-section';

type State = {
  name: string;
  country: Country;
  discount: number;
};

const defaultState = {};

const Form = () => {
  const [state, setState] = useState<State>(defaultState as State);
  console.info('Form render');

  return (
    <div className="App">
      <FormDataProvider>
        <PersonalInfoSection />
        <ValueCalculationsSection />
        <ActionsSection />
      </FormDataProvider>
    </div>
  );
};

export default function App() {
  return <Form />;
}
