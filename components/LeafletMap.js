"use client";  // (If you're using Next.js App Router) marks this component as client-only

import { useEffect } from "react";
import L from "leaflet";

export default function LeafletMap() {
  useEffect(() => {
    // Initialize the map inside the "map" div
    const map = L.map("map").setView([48.86, 2.352], 12);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      minZoom: 10,
      maxZoom: 20
    }).addTo(map);

    const numberIcon = L.divIcon({
      className: 'custom-number-icon',
      html: '<div class="number-bubble">5.5</div>',
      iconSize: [30, 42],
      iconAnchor: [15, 42]
    });

    const marker = L.marker([48.8322, 2.3131], { icon: numberIcon }).addTo(map)

    marker.bindPopup(`
      <div style="max-width: 200px;">
        <h2>L'escale de Plaisance</h2>
        <p style="margin: 4px 0;">
          Menu: <strong>5€50</strong><br/>
          Kebab + frites: <strong>4€70</strong><br/>
          <i>Prix vérifiés le 18/12/2024</i><br/>
          180 Rue d'Alésia, 75014 Paris
        </p>
      </div>
    `);


  }, []);

    // Return the container div for Leaflet to render the map into
    return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
    
  }