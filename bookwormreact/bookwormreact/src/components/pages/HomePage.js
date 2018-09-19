import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </div>
);

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
