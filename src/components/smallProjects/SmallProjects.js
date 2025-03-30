import React from "react";
import SmallProject from "./SmallProject";
import { smallProjectsData } from "../../data";

export default function SmallProjects() {
  return (
    <>
      {smallProjectsData.map((ele) => (
        <SmallProject {...ele} />
      ))}
    </>
  );
}
