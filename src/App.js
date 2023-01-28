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
          setCountries(() => data.slice(0, 20));
        });
    }

    return () => {
      subscribed = false;
    };
  }, []);

  if (countries.length !== 0) {
    return (
      <>
        <header>
          <p>
            <strong>Where in the world?</strong>
          </p>
          <button> Dark Mode</button>
        </header>

        <main>
          <section className="filter-search">
            <form>
              <input placeholder="Search For a Country..." />
            </form>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Filter by Region
            </button>
          </section>

          <div className="App">
            {countries.map((country) => {
              //console.log(`${index} country=${country.name}`);
              return (
                <div key={country.name} className="country-cotainer">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="country-flags"
                  />
                  <p>
                    <strong>{country.name}</strong>
                  </p>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
  }
}

export default App;
