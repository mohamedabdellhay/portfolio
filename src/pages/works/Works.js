import React from "react";
import { useState } from "react";
import {
  PageHeader,
  PageInnerHeader,
  Projects,
  SmallProjects,
} from "../../components";
import "./style.css";
import { projectsLength } from "../../data";

export default function Works() {
  const [count, setCount] = useState(5);
  // const [disapled, setDesaled] = useState()
  const max = projectsLength;
  const [disabled, setEleDisabled] = useState(count >= max);

  const handleClick = () => {
    setCount(count + 5);
    if (count >= max) setEleDisabled(true);
  };

  return (
    <div className="page-content">
      <div className="container">
        <div>
          <PageHeader title="Projects" description="List of my projects" />
          <div>
            <PageInnerHeader title="Complete-Apps" />
            <div className="completed-projects">
              <div className="grid-projects">
                <Projects limit={count} />
              </div>
              <button
                onClick={disabled ? undefined : handleClick}
                className={`show-more position-right btn ${
                  disabled ? "color-grey" : "primary-color"
                }`}
                disabled={disabled}
              >
                Show More →
              </button>
            </div>
          </div>
          <div>
            <PageInnerHeader title="small-projects" />
          </div>
          <div className="grid-projects">
            <SmallProjects />
          </div>
        </div>
      </div>
    </div>
  );
}
