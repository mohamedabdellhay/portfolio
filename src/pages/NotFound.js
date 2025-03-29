import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        404 - Page Not Found
        <span
          style={{
            background: "#c778dd",
            borderRadius: "10px",
            padding: "0px 5px",
            margin: "0 5px",
          }}
        >
          <Link to="/">Back To Home</Link>
        </span>
      </h1>
    </>
  );
}
