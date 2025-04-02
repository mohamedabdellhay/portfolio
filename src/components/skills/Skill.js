import React from "react";

export default function Skill({ name, list }) {
  return (
    <>
      <div>
        <div className="border-grey">
          <h3 className="border-bottom-grey">
            <span className="padding-left-10 font-16 font-500">{name}</span>
          </h3>
          <div className="flex flex-col gap-10 padding-left-10 padding-top-10">
            {list.map((ele, index) => (
              <span key={index} className="color-grey">
                {ele}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
