import Fact from "./Fact";
import { funFactsData } from "../../data/data";
import React from "react";

export default function Facts() {
  const funFactsDataLength = funFactsData.length;
  return (
    <div>
      {funFactsDataLength <= 0 && (
        <div style={{ display: "grid", placeItems: "center" }}>
          <p>No Fun Facts Data</p>
        </div>
      )}
      {funFactsDataLength && (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {funFactsData.map((ele) => (
              <Fact fact={ele} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
