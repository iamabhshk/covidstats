import React from "react";
import { connect } from "react-redux";
import isoCountries from "./iso";
import "./Graph.css";

const graph = (props) => {
  const capitalize = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  var countryCode = () => {
    const country = Object.keys(isoCountries).find(
      (key) => isoCountries[key] === capitalize(props.country)
    );
    return country;
  };

  return (
    <div>
      <img
        className="graph img-fluid"
        src={`https://corona.dnsforfamily.com/graph.png?c=${countryCode(
          props.country
        )}`}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    country: state.countryName,
  };
};

export default connect(mapStateToProps)(graph);
