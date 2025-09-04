import { Country, SelectCountry } from '../../_select-country-library';
import {
  useFormAPI,
  useFormCountry,
} from '../../good-design/_context/form-providor';

export type { Country };

export const SelectCountryFormComponent = () => {
  const { onCountryChange } = useFormAPI();
  const country = useFormCountry();
  console.info('SelectCountryFormComponent render');

  return <SelectCountry onChange={onCountryChange} activeCountry={country} />;
};
