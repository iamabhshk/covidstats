import React, { Component } from "react";
import "./Home.css";
import Title from "./Title/Title";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    let navi = "";
    if (this.props.country === "") {
      navi = "/";
    } else {
      navi = "/data";
    }
    return (
      <div className="home">
        <Title />
        <div className="home_inputs">
          <input
            type="text"
            placeholder="Enter the country"
            className="form-control"
            onChange={(event) => this.props.updateCountryName(event)}
          />
          <Link to={navi}>
            <button className="btn btn-outline-success fix">Click me</button>
          </Link>
        </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
