import React from "react";
import data from "../data/data.json"
const Features = (props) => {
  console.log("ddddddddata", data);
  
  return (

    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="col">
          {data.Features
            ? data.Features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <i className={d.icon}></i><img src={d.icon} alt={d.name} style={{ height: "60px", width: "60px" }} />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
export default Features;