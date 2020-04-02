import React from "react";
import { CountryDetail } from "./CountryDetail";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export function Detail(props) {
  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);

//   console.log(foundCountry);

  return (
    <div className="col-7">
      <h1>
        {foundCountry.flag} {foundCountry.name.common}
      </h1>
      <h3>{foundCountry.capital}</h3>
      <h3>{foundCountry.area} km<sup>2</sup></h3>
      {foundCountry.borders.map(eachBorderCountry => {
        return (
          <Link key={eachBorderCountry} to={getCountry(eachBorderCountry).cca3}>
              <div>{getCountry(eachBorderCountry).name.common}</div>
              {/* {console.log(getCountry(eachBorderCountry).name.common)}
              {console.log(typeof(foundCountry.area))} */}
          </Link>
        );
      })}
    </div>
  );
}
