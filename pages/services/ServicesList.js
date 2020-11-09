import React from "react";
import serviceData from "./serviceData";
import { Link } from "react-router-dom";

function ServicesList() {

  return (
    <div style={{width: "90%", margin: "auto" }}>
      <h1>Service List Page</h1>
      {serviceData.map((service) => (
        <div key={service._id}>
          <h3>
			  <Link to={`/services/${service._id}`}>{service.name} - ${service.price} </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
