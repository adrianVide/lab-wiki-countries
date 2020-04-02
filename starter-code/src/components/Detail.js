import React from "react";
import { CountryDetail } from "./CountryDetail";
import countries from '../countries.json';

export function Detail(props) {
  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);

  console.log(foundCountry);

  return (
    <div>

      <h1>{foundCountry.flag} {foundCountry.name.common}</h1>
      <h3>{foundCountry.capital}</h3>
      <h3>{foundCountry.area}</h3>
    </div>
  );
};

