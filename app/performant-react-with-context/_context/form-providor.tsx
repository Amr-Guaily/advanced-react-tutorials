import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Country } from '../_select-country-library';

interface State {
  name: string;
  country: Country;
  discount: number;
}

interface API {
  onNameChange: (name: string) => void;
  onDiscountChange: (discount: number) => void;
  onCountryChange: (name: Country) => void;
  onSave: () => void;
}

// INFO: Split the state part and the API part
const FormDataContext = createContext<State>({} as State);
const FormAPIContext = createContext<API>({} as API);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({} as State);

  /*
    - INFO: If we just leave it as it was before, the "spliting idea" is not going to work because we still would have to rely on the state as a dependency in `useMemo`
    - This will result in:
        1- api value changing with every state update 
        2- which would lead to the `FormAPIContext` triggering re-renders on every state update.
        3- which would make our split useless.

    TODO: We want our api to stay contant regardless of the `state` => So the consumers of this provider don't re-render.
  */
  const api = useMemo(() => {
    const onSave = () => {
      // send the request to the backend here
    };

    const onDiscountChange = (discount: number) => {
      setState((prevState) => ({ ...prevState, discount }));
    };

    const onNameChange = (name: string) => {
      setState((prevState) => ({ ...prevState, name }));
    };

    const onCountryChange = (country: Country) => {
      setState((prevState) => ({ ...prevState, country }));
    };

    return {
      onSave,
      onNameChange,
      onDiscountChange,
      onCountryChange,
    };
    /**
      If you remove state from the useMemo dependencies, the API functions will only be created once and never update, even if state changes. What's wrong?
        - The API functions will always use the initial state value (from the first render).
     */
  }, []);

  return (
    <FormAPIContext.Provider value={api}>
      <FormDataContext.Provider value={state}>
        {children}
      </FormDataContext.Provider>
    </FormAPIContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
export const useFormAPI = () => useContext(FormAPIContext);
