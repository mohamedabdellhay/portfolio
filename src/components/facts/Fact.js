import "./style.css";

import React from "react";

export default function Fact({ fact }) {
  return (
    <div>
      <div className="border-grey padding-10">
        <p className="color-grey">{fact}</p>
      </div>
    </div>
  );
}
