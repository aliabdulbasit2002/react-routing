import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = useLoaderData();

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>
        <span>Title: </span>
        {service.name}
      </h2>
      <p>
        <span>Description: </span> {service.email}
      </p>
      <p>
        <span>CatchPhrase: </span> {service.company.catchPhrase}
      </p>
    </div>
  );
};

export default ServiceDetails;

// data loader
export const serviceDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  return res.json();
};
