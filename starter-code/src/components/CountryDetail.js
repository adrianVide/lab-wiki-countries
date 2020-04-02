import countries from "../countries.json";
import { Link } from "react-router-dom";

import React from "react";

export const CountryDetail = () => {
  const countryCopy = [...countries];
  //   console.log(
  //     countryCopy.map((countryCode, index) => {
  //       return countryCode;
  //     })
  //   );

  return (
    <div>
      <h1>Countries</h1>
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: "scroll" }}
        >
          {countryCopy.map((eachCountry, index) => {
            return (
              <div className="list-group">
                <Link to={`/${eachCountry.cca3}`}>
                  <div
                    className="list-group-item list-group-item-action"
                    key={eachCountry.cca3}
                  >
                    <div>{eachCountry.flag}</div>
                    <h3>{eachCountry.name.common}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
          ;
        </div>
        <div className="col-7"></div>
      </div>
    </div>
  );
};
