// Task 1 — Country Info Lookup (40 min)
// Search a country name, fetch from https://restcountries.com/v3.1/name/{name}, display flag, capital, population, region. Handle loading, not-found (404), and network error states. Put the result in a separate CountryCard component that receives data as props.


import { useState, useEffect } from 'react'

function App() {
const [countryName, setCountryName] = useState("");
const [country, setCountry] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


async function fetchCountry() {
  try {
    setLoading(true);
    setError(null);

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (!res.ok) throw new Error("Country not found");

    const data = await res.json();
    setCountry(data[0]);
  } catch (err) {
    setError(err.message);
    setCountry(null);
  } finally {
    setLoading(false);
  }
}
 
  return (
  <div>
    <input
      value={countryName}
      onChange={(e) => setCountryName(e.target.value)}
      placeholder="Enter country"
    />

    <button onClick={fetchCountry}>Search</button>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    {country && (
      <div>
        <img src={country.flags.png} width="100" />
        <h2>{country.name.common}</h2>
        <p>{country.capital?.[0]}</p>
        <p>{country.population}</p>
        <p>{country.region}</p>
      </div>
    )}
  </div>
);
}

export default App 