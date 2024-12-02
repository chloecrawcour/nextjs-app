"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import Carousel from "./components/carousel";
import propertiesData from "./data/properties.json";
import sidebarData from "./data/sidebar.json";
import popularRegions from "./data/popularRegions.json";
import articlesData from "./data/articles.json";

const HomePage = () => {
  // state management for properties
  const [featuredProperties] = useState(propertiesData.properties);

  const nightOptions = Array.from({ length: 14 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1} Night{i + 1 > 1 ? "s" : ""}
    </option>
  ));

  const bedroomOptions = Array.from({ length: 6 }, (_, i) => (
    <option key={i} value={i}>
      {i} {i === 1 ? "Bedroom" : "Bedrooms"}
    </option>
  ));

  bedroomOptions.push(
    <option key="5plus" value="5plus">
      5+ Bedrooms
    </option>
  );

  return (
    <div>
      {/* Carousel */}
      <Carousel />

      {/* BEGIN HOME ADVANCED SEARCH */}
      <div id="home-advanced-search" className="open py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <form>
                <div className="row g-3">
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Arrive on..."
                    />
                  </div>
                  <div className="col-md-2">
                    <select
                      id="search_status"
                      name="search_status"
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="">Stay...</option>
                      {nightOptions}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <select
                      id="search_bedrooms"
                      name="search_bedrooms"
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="">Bedrooms</option>
                      {bedroomOptions}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="City, State, Country, etc..."
                    />
                  </div>
                  <div className="col-md-1">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* END HOME ADVANCED SEARCH */}

      {/* BEGIN MAIN CONTENT */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Featured Properties */}
            <div className="main col-sm-8">
              <h1 className="section-title">Featured Properties</h1>
              <div className="grid-style1 clearfix">
                {featuredProperties.map((property, index) => (
                  <div key={index} className="item col-md-4">
                    <div className="image">
                      <a href={property.detailLink}>
                        <h3>{property.title}</h3>
                        <span className="location">{property.location}</span>
                      </a>
                      <img src={property.image} alt={property.title} />
                    </div>
                    <div className="price">
                      <span>{property.price}</span>
                      <p>{property.price_period}</p>
                    </div>
                    <ul className="amenities">
                      <li>
                        <i className="icon-bedrooms"></i> {property.bedrooms}
                      </li>
                      <li>
                        <i className="icon-bathrooms"></i> {property.bathrooms}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar col-sm-4">
              <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                  {sidebarData.sidebar.lastMinuteDeals.map((deal, index) => (
                    <li key={index} className="col-md-12">
                      <div className="image">
                        <a href={deal.link}></a>
                        <img alt="" src={deal.image} />
                      </div>
                      <ul className="top-info">
                        <li>
                          <i className="fa fa-calendar"></i>
                          {deal.availability}
                        </li>
                      </ul>
                      <h4>
                        <a href={deal.link}>{deal.title}</a>
                        <p>{deal.location}</p>
                      </h4>
                    </li>
                  ))}
                </ul>
                <p className="center">
                  <a className="btn btn-fullcolor" href="#">
                    More deals
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Regions */}
        <div className="container">
          <h1 className="section-title">Popular Regions</h1>
          <div id="regions" className="row">
            {popularRegions.regions.slice(0, 6).map((region, index) => (
              <div className="col-md-4" key={index}>
                <div className="item">
                  <a href={region.link}>
                    <img src={region.image} alt={region.name} />
                    <h3>{region.name}</h3>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="container">
          <h1 className="section-title">Recent Articles</h1>
          <div className="grid-style1">
            {articlesData.articles.map((article, index) => (
              <div key={index} className="item col-md-4">
                <div className="image">
                  <a href={article.link}>
                    <span className="btn btn-default">
                      <i className="fa fa-file-o"></i> Read More
                    </span>
                  </a>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="info-blog">
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar"></i> {article.date}
                    </li>
                    <li>
                      <i className="fa fa-comments-o"></i> {article.comments}
                    </li>
                    <li>
                      <i className="fa fa-tags"></i> {article.tags}
                    </li>
                  </ul>
                  <h3>
                    <a href={article.link}>{article.title}</a>
                  </h3>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="center">
            <a href="#" className="btn btn-default-color">
              View All News
            </a>
          </div>
        </div>
      </div>
      {/* END MAIN CONTENT */}
    </div>
  );
};

export default HomePage;
