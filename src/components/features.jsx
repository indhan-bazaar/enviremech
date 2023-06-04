import React from "react";
import indhanbazaar from "../img/IndhanBazaar.png";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title products">
          <h2>OUR PRODUCTS</h2>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div> */}
        <img src={indhanbazaar} height={80} width={300} />
        <div className="card-container">
          <div className="float-layout">
            <div className="card">
              <div className="card-title">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://indhanbazaar.com/"
                >
                  Indhan Bazaar ™️
                </a>
              </div>
              <div className="card-desc">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://indhanbazaar.com/"
                >
                  Indhan Bazaar
                </a>{" "}
                is an online marketplace platform for Biofuel
                products(briquette/pellets) known as green fuel. Here you can
                discover and connect with verified manufacturer, compare the
                biomass products as per your specific requirements and
                streamline your procurement by applying location based searches
                for on time deliveries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
