import React from 'react';
import './App.css';  // Assuming you have a stylesheet named App.css for this component

function App() {
    // Construct the URL with the environment variable as a query parameter
    const vehiclesURL = `/vehicles.html?vehiclesServiceURL=${encodeURIComponent(process.env.REACT_APP_ATLANTA_VEHICLES_SERVICE)}&gridServiceURL=${encodeURIComponent(process.env.REACT_APP_ATLANTA_GRID_SERVICE)}&crimeDataURL=${encodeURIComponent(process.env.REACT_APP_ATLANTA_CRIME_DATA)}`;

    return (
        <div className="app-container">
            <iframe
                title="Vehicles Page"
                src={vehiclesURL}
                width="100%"
                height="100%"
                style={{border: "none"}}
            ></iframe>
        </div>
    );
}



export default App;