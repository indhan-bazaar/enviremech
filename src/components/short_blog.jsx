import { Image } from "./image";
import React from "react";

export const Blog = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Engagements</h2>
          <p>Discover our environmental collaborations and efforts towards a sustainable planet.</p>
        </div>

        {props.data && props.data ? (
          props.data.map((blog, index) => (
            <div className="row blog-item" key={index}>
              {/* Image on the left */}
              <div className="col-xs-12 col-md-6">
                <img src={blog.img} alt="Blog" className="img-responsive blog-image" />
              </div>

              {/* Text on the right */}
              <div className="col-xs-12 col-md-6">
                <div className="blog-text">
                  <h3>{blog.title}</h3>
                  <p className="justify-text">{blog.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
