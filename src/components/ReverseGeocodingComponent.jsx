import React, { useEffect, useState } from 'react';

const ReverseGeocodingComponent = ({ coordinates }) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      reverseGeocoding(coordinates.latitude, coordinates.longitude, setAddress);
    }
  }, [coordinates]);

  return (
    <div>
      <h3>Address:</h3>
      <p>{address}</p>
    </div>
  );
};

const reverseGeocoding = (lat, lon, callback) => {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lon=${lon}&lat=${lat}`)
    .then(response => response.json())
    .then(json => {
      const pos = json.address;
      const dorf = pos.hamlet || "";

      let city = "";
      if (pos.city) {
        city = pos.city;
      } else if (pos.town) {
        city = pos.town;
      } else if (pos.village) {
        city = pos.village;
      } else if (pos.municipality) {
        city = pos.municipality;
      } else if (pos.farm) {
        city = pos.farm;
      }

      let houseNumber = pos.house_number || "";
      let road = pos.road || "";

      const addressParts = [road, houseNumber, dorf, city].filter(part => part).join(', ');
      callback(addressParts);
    })
    .catch(error => console.error('Error:', error));
};

export { ReverseGeocodingComponent, reverseGeocoding };