import React, { useState, useEffect } from 'react';
import PoliceForces from './components/PoliceForces';
import Neighbourhoods from './components/Neighbourhoods';
import NeighbourhoodDetails from './components/NeighbourhoodDetails';
import './App.css';

function App() {
  const [policeForces, setPoliceForces] = useState([]);
  const [selectedForce, setSelectedForce] = useState(null);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState(null);

  // Fetch all police forces
  useEffect(() => {
    const fetchPoliceForces = async () => {
      const response = await fetch('https://data.police.uk/api/forces');
      const data = await response.json();
      setPoliceForces(data);
    };
    fetchPoliceForces();
  }, []);

  // Fetch neighbourhoods when a force is selected
  useEffect(() => {
    if (selectedForce) {
      const fetchNeighbourhoods = async () => {
        const response = await fetch(
          `https://data.police.uk/api/${selectedForce}/neighbourhoods`
        );
        const data = await response.json();
        setNeighbourhoods(data);
      };
      fetchNeighbourhoods();
    }
  }, [selectedForce]);

  return (
    <div className="App">
      <h1>UK Police Neighbourhood Information</h1>
      <PoliceForces
        policeForces={policeForces}
        setSelectedForce={setSelectedForce}
      />
      {selectedForce && (
        <Neighbourhoods
          neighbourhoods={neighbourhoods}
          setSelectedNeighbourhood={setSelectedNeighbourhood}
        />
      )}
      {selectedNeighbourhood && (
        <NeighbourhoodDetails
          selectedForce={selectedForce}
          selectedNeighbourhood={selectedNeighbourhood}
        />
      )}
    </div>
  );
}

export default App;
