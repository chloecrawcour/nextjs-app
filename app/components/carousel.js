"use client";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Carousel = () => {
  return (
    <div
      id="carousel-example-generic"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          id="slide1"
          style={{
            background: 'url(http://placehold.it/1920x605) no-repeat center center',
            backgroundSize: 'cover',
            height: '605px',
          }}
        >
          <div className="carousel-caption d-none d-md-block">
            <div className="caption sfr slider-title">Breathtaking Views</div>
            <div className="caption sfl slider-subtitle">
              Relaxation in the Bay of Belfalas
            </div>
            <a href="#" className="caption sfb btn btn-default btn-lg">
              Learn More
            </a>
          </div>
        </div>
        <div
          className="carousel-item"
          id="slide2"
          style={{
            background: 'url(http://placehold.it/1920x605) no-repeat center center',
            backgroundSize: 'cover',
            height: '605px',
          }}
        >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">The Simple Life</div>
              <div className="caption sfl slider-subtitle">
                Lush gardens in Mordor
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
        </div>
      </div>

        {/* Blue Filter */}
        <div id="home-search-section"></div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-example-generic"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-example-generic"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
