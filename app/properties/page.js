'use client';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import propertiesData from "../data/properties.json"; 

const PropertyGallery = () => {
  const [index, setIndex] = useState(0);
  const [featuredProperties] = useState(propertiesData.properties);

  function handleClick() {
    setIndex((index + 1) % featuredProperties.length);  
  }

  let property = featuredProperties[index];

  return (
    <div className="container my-4">
      {/* properties */}
      <h1 className="section-title text-center mb-4">Featured Properties</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <img src={property.image} alt={property.title} className="card-img-top" />

            <div className="card-body">
              <h5 className="card-title">{property.title}</h5>
              <p className="card-text">{property.location}</p>
              <p className="card-text">
                <strong>{property.price}</strong> {property.price_period}
              </p>
            </div>

            {/* next button */}
            <div className="card-footer text-center">
              <button className="btn btn-primary btn-sm" onClick={handleClick}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
