import React, { Component } from "react";
import Home from "./Home/Home";
import Data from "./Data/Data";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home country={this.props.country} />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.countryName,
  };
};

export default connect(mapStateToProps)(Layout);
