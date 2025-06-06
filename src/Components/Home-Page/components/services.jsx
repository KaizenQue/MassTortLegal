import React from "react";
import data from "../data/data.json"
 const Services = (props) => {
  console.log("data" ,data.Services); 
  
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h1 className="text-[42px]">Our Services</h1>
        </div>
        <div className="row">
          {data.Services
            ? data.Services.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <img src={d.icon} alt={d.name} style={{ height: "60px", width: "60px" }} />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p >{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
export default Services