import React from "react";

const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/court.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text mt-16">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "We help people who’ve been harmed by dangerous drugs, medical devices, or toxic exposures take the first step toward justice. Our platform connects individuals with experienced mass tort attorneys who understand the complexity and urgency of these cases.Whether you’re dealing with medical bills, lost wages, or the emotional toll of a serious diagnosis, we’re here to help. Our network of legal professionals offers free case reviews, and there are no fees unless you win."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;