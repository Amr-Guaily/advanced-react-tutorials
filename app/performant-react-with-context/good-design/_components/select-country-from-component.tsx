import { useFormAPI, useFormCountry } from '../../_context/form-providor';
import { Country, SelectCountry } from '../../_select-country-library';

export type { Country };

export const SelectCountryFormComponent = () => {
  const { onCountryChange } = useFormAPI();
  const country = useFormCountry();
  console.info('SelectCountryFormComponent render');

  return <SelectCountry onChange={onCountryChange} activeCountry={country} />;
};
