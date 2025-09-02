import { createContext } from 'react';
import { Country } from '../_select-country-library';

interface State {
  name: string;
  country: Country;
  discount: number;
}

interface Context {
  state: State;
  onNameChange: (name: string) => void;
  onDiscountChange: (discount: number) => void;
  onCountryChange: (name: Country) => void;
  onSave: () => void;
}

const FormContext = createContext<Context>({} as Context);
