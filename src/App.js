import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState("");
  useEffect(() => {
    const COUNTRIES_URL =
      "https://restcountries.com/v2/all?fields=name,flag,population,region,capital";
    let subscribed = true;
    if (subscribed) {
      fetch(COUNTRIES_URL)
        .then((response) => response.json())
        .then((data) => {
          setCountries(() => data);
        });
    }

    return () => {
      subscribed = false;
    };
  }, []);

  if (countries.length !== 0) {
    return (
      <div className="App">
        {countries.map((country, index) => {
          //console.log(`${index} country=${country.name}`);
          return (
            <div key={country.name} className="country-cotainer">
              <img
                src={country.flag}
                alt={country.name}
                className="country-flags"
              />
              <p>{country.name}</p>
              <p>{country.population}</p>
              <p>{country.region}</p>
              <p>{country.capital}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
