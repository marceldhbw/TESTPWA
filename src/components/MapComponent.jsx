import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet/dist/leaflet.css';
import { reverseGeocoding } from './ReverseGeocodingComponent';

function MapComponent({ coordinates, setCoordinates }) {
  useEffect(() => {
    const { latitude, longitude } = coordinates;
    const map = L.map('map').setView([latitude || 51.505, longitude || -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([latitude || 51.5, longitude || -0.09]).addTo(map);

    const updatePopup = (lat, lng) => {
      reverseGeocoding(lat, lng, (address) => {
        marker.bindPopup(address).openPopup();
      });
    };

    updatePopup(latitude, longitude);

    map.on("click", function (e) {
      const { lat, lng } = e.latlng;
      marker.setLatLng([lat, lng]);
      updatePopup(lat, lng);
    });

    return () => {
      map.remove();
    };
  }, [coordinates, setCoordinates]);

  return (
    <div id="map" style={{ width: '100%', height: '500px' }}></div>
  );
}

export default MapComponent;