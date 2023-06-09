import { useState, useEffect, useRef } from "react";
import DistrictSelector from "./DistrictSelector";
import { fetchMapPlaceData } from "../../../utils/api";
import markerImage from "../../../assets/images/marker.png";
import currentMarkerImage from "../../../assets/images/current.svg";
import styles from "../styles/home.module.css";

const GoogleMap = ({
  lat,
  lng,
  map,
  setMap,
  shelterMemo,
  toggleShelterClicked,
  handleMapClick,
}) => {
  const ref = useRef();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  window.initMap = async () => {
    try {
      const shelterData = await fetchMapPlaceData();

      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat, lng },
        zoom: 16,
      });

      shelterData.forEach((shelter, index) => {
        const marker = new window.google.maps.Marker({
          position: { lat: shelter.lat, lng: shelter.lng },
          map: newMap,
          title: shelter.name,
          icon: {
            url: markerImage,
            scaledSize: new window.google.maps.Size(40, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 50),
          },
        });

        marker.addListener("click", () => {
          toggleShelterClicked(index, shelter.name);
        });
      });

      new window.google.maps.Marker({
        position: { lat, lng },
        map: newMap,
        title: "현재 위치",
        icon: {
          url: currentMarkerImage,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        },
      });

      if (newMap instanceof window.google.maps.Map) {
        setMap(newMap);
        newMap.addListener("click", handleMapClick);
      } else {
        console.error("Invalid map instance");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.google_map_container}>
      <DistrictSelector map={map} />
      <div ref={ref} id={styles.map} data-testid="google-map" />
    </div>
  );
};

export default GoogleMap;
