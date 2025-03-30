import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function SmallProject({
  title,
  description,
  technologies,
  action,
}) {
  return (
    <div>
      <div className="border-grey">
        <div className="padding-10 flex flex-row gap-10">
          {technologies.map((ele) => (
            <span className="font-400 font-16 color-grey">{ele}</span>
          ))}
        </div>
        <div className="border-grey padding-15 flex flex-col gap-15 ">
          <div>{title}</div>
          <div style={{ marginBottom: "10px" }}>
            <p className="color-grey">{description}</p>
          </div>
          <div className="padding-bottom-10">
            <div>
              <Link
                to={action.uri}
                className="border-primary padding-10 color-grey padding-5"
              >
                {action.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
