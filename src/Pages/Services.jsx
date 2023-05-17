import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="services">
      <h2>Services</h2>
      {services.map((service) => (
        <Link to={service.id.toString()} key={service.id}>
          <p>{service.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Services;

export const ServiceLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
};
