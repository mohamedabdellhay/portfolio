import React from "react";
import "./style.css";

export default function PageInnerHeader({ title }) {
  return (
    <>
      <div>
        <h2 className="page-inner-header">{title}</h2>
      </div>
    </>
  );
}
