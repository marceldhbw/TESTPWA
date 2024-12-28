import React, { useState, useEffect } from 'react';

const LocatorComponent = ({ onCoordinatesChange }) => {
  const [geoCoords, setGeoCoords] = useState({ lon: 0, lat: 0 });

  useEffect(() => {
    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    function geoSuccess(pos) {
      const coords = {
        lon: pos.coords.longitude,
        lat: pos.coords.latitude
      };
      setGeoCoords(coords);
    }

    function geoError(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      switch (err.code) {
        case err.PERMISSION_DENIED:
          // Handle PERMISSION_DENIED error
          break;
        case err.POSITION_UNAVAILABLE:
          // Handle POSITION_UNAVAILABLE error
          break;
        case err.TIMEOUT:
          // Handle TIMEOUT error
          break;
        default:
          break;
      }
    }

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  }, []);

  const handleCurrentLocationClick = () => {
    onCoordinatesChange({ latitude: geoCoords.lat, longitude: geoCoords.lon });
    console.log({ latitude: geoCoords.lat, longitude: geoCoords.lon });
  };

  return (
    <div>
      <button onClick={handleCurrentLocationClick}>Use Current Location</button>
    </div>
  );
};

export default LocatorComponent;