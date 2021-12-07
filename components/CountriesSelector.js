import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

const CountriesSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('GBR');
  const {
    statistics: countries,
    loading,
    error,
  } = useStats('https://covid19.mathdro.id/api/countries');
  console.log(countries);
  if (loading) return 'Loading...';
  if (error) return 'Error...';
  return (
    <>
      <h1>Choose a country:</h1>
      <h3>Currently showing: {selectedCountry} Covid-19 Statistics</h3>
      <select onChange={(event) => setSelectedCountry(event.target.value)}>
        {!!countries?.countries &&
          Object.entries(countries.countries).map(([id, country]) => (
            <option
              key={id}
              value={country.iso3}
              selected={selectedCountry === country.iso3}
            >
              {country.name}
            </option>
          ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </>
  );
};

export default CountriesSelector;
