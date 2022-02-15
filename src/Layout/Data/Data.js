import React, { Component } from "react";
import "./Data.css";
import Graph from "./Graph/Graph";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import isoCountries from "./Graph/iso";
import Message from "./message/message";
import Title from "./Title/Title";

class Data extends Component {
  render() {
    let display = "";
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
        (key) => isoCountries[key] === capitalize(this.props.country)
      );
      return country;
    };

    let code = countryCode();

    if (this.props.country === "") {
      display = <Title />;
    } else if (capitalize(this.props.country) !== isoCountries[code]) {
      display = <Message />;
    } else {
      display = <Graph />;
    }

    return (
      <div>
        <div className="data_inputss">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav stable dataaaa">
                <NavLink to="/">
                  <h4 className="linkss">Covid Tracker</h4>
                </NavLink>
              </div>
            </div>
          </nav>
          <input
            type="text"
            placeholder="Enter the country"
            className="form-control inputfix"
            onChange={(event) => this.props.updateCountryName(event)}
          />
        </div>
        {display}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.countryName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCountryName: (event) => dispatch({ type: "CHANGING", val: event }),
    onClickRoute: (name) => dispatch({ type: "ROUTING", val: name }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
