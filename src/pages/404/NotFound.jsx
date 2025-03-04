import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFoundBg">
        <Link to="/" className="homeLink">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
