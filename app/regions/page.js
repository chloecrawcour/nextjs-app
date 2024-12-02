"use client"; 

import React from "react"; 
import Gallery from "../components/gallery";  

export default function RegionsPage() {
  return (
    <div className="content py-5">
      <div className="container">
        <div className="row">
          <div className="main col-12">
            <h1 className="section-title">Regions in Australia</h1>
            {/* regions component */}
            <Gallery /> 
          </div>
        </div>
      </div>
    </div>
  );
}

