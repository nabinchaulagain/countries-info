import React, { useContext } from "react";
import { Context } from "../context";
const CountryShow = props => {
  const context = useContext(Context);
  const selectedCountry = context.countries.find(
    country => country.name === props.match.params.countryName
  );
  if (!selectedCountry && context.countries.length !== 0) {
    return "Country Not found";
  }
  if (!selectedCountry && context.countries.length === 0) {
    return "Loading....";
  }
  return (
    <div className="container-fluid">
      <h2 className="text-center">{selectedCountry.name}</h2>
      <div className=" col-6 mx-auto ">
        <div className="col-md-6 mx-auto">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.names}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 mx-auto text-center">
          <div>Capital:{selectedCountry.capital}</div>
          <div>
            Languages:
            {selectedCountry.languages.map(language => (
              <li key={language.name}>{language.name} </li>
            ))}
          </div>
          <div>Area: {selectedCountry.area} km</div>
          <div>Population: {selectedCountry.population}</div>
          <div>Continent: {selectedCountry.region}</div>
          <div>Sub Continent: {selectedCountry.subregion}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryShow;
