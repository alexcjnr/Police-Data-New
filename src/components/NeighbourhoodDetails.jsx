import React, { useEffect, useState } from "react";

const NeighbourhoodDetails = ({ selectedForce, selectedNeighbourhood }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchNeighbourhoodDetails = async () => {
      const response = await fetch(
        `https://data.police.uk/api/${selectedForce}/${selectedNeighbourhood}`
      );
      const data = await response.json();
      setDetails(data);
    };
    fetchNeighbourhoodDetails();
  }, [selectedForce, selectedNeighbourhood]);

  if (!details) return <p>Loading details...</p>;

  return (
    <div>
      <h2>Neighbourhood Details</h2>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Website:</strong> {details.url_force}</p>
      <p><strong>Location:</strong> {details.centre?.latitude}, {details.centre?.longitude}</p>
      <p><strong>Contact:</strong> {details.contact_details?.email}</p>
    </div>
  );
};

export default NeighbourhoodDetails;
