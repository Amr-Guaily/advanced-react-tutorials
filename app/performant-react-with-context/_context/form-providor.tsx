import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';
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
const FormNameContext = createContext<State['name']>({} as State['name']);
const FormDiscountContext = createContext<State['discount']>(
  {} as State['discount']
);
const FormCountryContext = createContext<State['country']>(
  {} as State['country']
);
const FormAPIContext = createContext<API>({} as API);

// INFO: unions allow a type to be one of serval types
type Actions =
  | { type: 'updateName'; name: string }
  | { type: 'updateDiscount'; discount: number }
  | { type: 'updateCountry'; country: Country };

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.name };
    case 'updateDiscount':
      return { ...state, discount: action.discount };
    case 'updateCountry':
      return { ...state, country: action.country };
  }
};

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {} as State);

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
      dispatch({ type: 'updateDiscount', discount });
    };

    const onNameChange = (name: string) => {
      dispatch({ type: 'updateName', name });
    };

    const onCountryChange = (country: Country) => {
      dispatch({ type: 'updateCountry', country });
    };

    return {
      onSave,
      onNameChange,
      onDiscountChange,
      onCountryChange,
    };
  }, []);

  return (
    <FormAPIContext.Provider value={api}>
      <FormNameContext.Provider value={state.name}>
        <FormCountryContext.Provider value={state.country}>
          <FormDiscountContext.Provider value={state.discount}>
            {children}
          </FormDiscountContext.Provider>
        </FormCountryContext.Provider>
      </FormNameContext.Provider>
    </FormAPIContext.Provider>
  );
};

export const useFormName = () => useContext(FormNameContext);
export const useFormCountry = () => useContext(FormCountryContext);
export const useFormDiscount = () => useContext(FormDiscountContext);
export const useFormAPI = () => useContext(FormAPIContext);
