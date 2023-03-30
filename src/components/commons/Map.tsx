import React, { useEffect, useRef } from 'react';
export type props = {
  className?: string;
  center: google.maps.LatLngLiteral;
  zoom: number;
};

const Map: React.FC<props> = ({ center, zoom, className }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    const marker = new window.google.maps.Marker({ position: center, map });
  });

  return <div className={className} ref={ref} id="map" />;
};

export default Map;
