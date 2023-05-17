import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error">
      <div>Error404</div>
      <Link to="/">home</Link>
    </div>
  );
};

export default Error404;
