import React from "react";

const Neighbourhoods = ({ neighbourhoods, setSelectedNeighbourhood }) => {
  return (
    <div>
      <h2>Select a Neighbourhood</h2>
      <select onChange={(e) => setSelectedNeighbourhood(e.target.value)}>
        <option value="">-- Select a Neighbourhood --</option>
        {neighbourhoods.map((neighbourhood) => (
          <option key={neighbourhood.id} value={neighbourhood.id}>
            {neighbourhood.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Neighbourhoods;
