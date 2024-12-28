import React, { useState } from 'react';
import updateIcon from '../icons/search_icon.png'; // Icon-Datei importieren

const LocationInputField = ({ onCoordinatesChange }) => {
  const [coordinates, setCoordinates] = useState('');

  const handleButtonClick = () => {
    const [latitude, longitude] = coordinates.split(';');
    if (latitude && longitude) {
      onCoordinatesChange({
        latitude: parseFloat(latitude.trim()),
        longitude: parseFloat(longitude.trim()),
      });
      console.log({
        latitude: parseFloat(latitude.trim()),
        longitude: parseFloat(longitude.trim()),
      });
    } else {
      alert('Please enter valid coordinates in the format "latitude;longitude"');
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
      <input
        type="text"
        placeholder="Latitude;Longitude"
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 40px 10px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "24px",
          width: "24px",
        }}
      >
        <img
          src={updateIcon}
          alt="Update"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default LocationInputField;
