import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
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

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({} as State);

  const value = useMemo(() => {
    const onSave = () => {
      // send the request to the backend here
    };

    const onDiscountChange = (discount: number) => {
      setState({ ...state, discount });
    };

    const onNameChange = (name: string) => {
      setState({ ...state, name });
    };

    const onCountryChange = (country: Country) => {
      setState({ ...state, country });
    };

    return {
      state,
      onSave,
      onNameChange,
      onDiscountChange,
      onCountryChange,
    };
  }, [state]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormState = () => useContext(FormContext);
