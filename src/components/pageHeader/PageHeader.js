import React from "react";
import "./style.css";
export default function PageHeader({ title, description }) {
  return (
    <>
      <div className="page-header-container">
        <h1 className="page-title">{title}</h1>
        <p className="page-description color-grey">{description}</p>
      </div>
    </>
  );
}
