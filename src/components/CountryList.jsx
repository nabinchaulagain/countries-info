import React from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
const CountryList = () => {
  const renderList = countries => {
    if (countries.length === 0) {
      return "Loadding...";
    }
    return countries.map(country => {
      return (
        <div
          className="card p-3 mx-auto col-md-4 text-center mt-4"
          style={{ background: "lightgray" }}
          key={country.name}
        >
          <Link to={`/country/${country.name}`} className="text-dark">
            <h3>{country.name}</h3>
          </Link>
          <div className="col-5 mx-auto ">
            <img
              src={country.flag}
              alt={country.name}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <Context.Consumer>
      {context => {
        if (context.error) {
          return <h1>{context.error}</h1>;
        }
        return renderList(context.countries);
      }}
    </Context.Consumer>
  );
};

export default CountryList;
