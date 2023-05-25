import { ErrorOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContainer">
        <ErrorOutline style={{ color: "white" }} />
        <Typography variant="h4" style={{ padding: "2vmax", color: "white" }}>
          Page Not Found
        </Typography>

        <Link to="/">
          <Typography variant="h5" style={{ color: "white" }}>
            Go to Home
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
