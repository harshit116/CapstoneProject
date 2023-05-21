import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <b> {props.title} </b>
        </Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = { title: PropTypes.string };

NavBar.defaultProps = { title: "Enter Title" };
