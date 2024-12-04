"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import propertiesData from "../../data/properties.json"; 

export const runtime = "edge";

export default function PropertyItem({ params }) {
  // get "id" from parameter
  const { id } = use(params);

  // match property with id
  const property = propertiesData.properties.find((item) => item.id == id);

  if (!property) {
    notFound();
  }

  return (
    <div className="box mt-1">
      {property ? (
        <>
          <h2 className="title is-5">
            <i>{property.title}</i>
          </h2>
          <h3 className="subtitle is-6">{property.location}</h3>
          <h3 className="subtitle is-6">
            {property.price} {property.price_period}
          </h3>
          <Image
            src={property.image}
            alt={property.title}
            width={400}
            height={250}
          />
          <p>{property.description}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        </>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}
