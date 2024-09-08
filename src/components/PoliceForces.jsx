import React from "react";

const PoliceForces = ({ policeForces, setSelectedForce }) => {
  return (
    <div>
      <h2>Select a Police Force</h2>
      <select onChange={(e) => setSelectedForce(e.target.value)}>
        <option value="">-- Select a Force --</option>
        {policeForces.map((force) => (
          <option key={force.id} value={force.id}>
            {force.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PoliceForces;
