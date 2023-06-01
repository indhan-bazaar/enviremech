import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-offset-1 intro-text">
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <br />
                <h2>
                  {props.data ? props.data.title1 : "Loading"}
                  <span></span>
                </h2>
                <br />
                <h2>
                  {props.data ? props.data.title2 : "Loading"}
                  <span></span>
                </h2>
                </div>
                <div className="col-md-8 col-md-offset-2 intro-text2">
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
