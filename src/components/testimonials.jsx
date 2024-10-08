import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.company_name}-${i}`} className="col-md-6">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">{d.company_name} </div>
                      <p className="testimonial-meta">{d.person_name} </p>
                      <p className="testimonial-meta">{d.designation} </p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
