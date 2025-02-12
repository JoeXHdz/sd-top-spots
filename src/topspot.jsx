import React from "react";

function TopSpot(props) {
  console.log(props.lat, props.lon);

  // Construct Google Maps URL
  const googleMapsUrl = `https://maps.google.com/?q=${props.lat},${props.lon}`;

  return (
    <div className="well">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View on Google Maps
      </a>
    </div>
  );
}

export default TopSpot;
