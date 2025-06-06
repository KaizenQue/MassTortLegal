import React from "react";

const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-2 intro-text">
                <h1>We Are Mass Tort Legal Experts
                </h1>
                <p>If you or a loved one were harmed by a dangerous drug, product, or exposure, we’re here to help. Our experienced legal team specializes in mass tort cases and helps victims pursue compensation with no upfront costs.</p>
                <button
            
                  className="btn btn-custom btn-lg page-scroll p-7"
                >
                  Check If You Qualify
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;