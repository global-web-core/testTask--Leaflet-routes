import {MapContainer, TileLayer} from 'react-leaflet';
import styles from './Main.module.css';
import "leaflet/dist/leaflet.css";
import {PolylinesRoute, TableRoutes} from '../../components';
import React from 'react';

export const Main = () => {
  return (
    <>
      <div className={styles.map}>
        <TableRoutes />
        <MapContainer
          zoom={13}
          scrollWheelZoom={false}
          className={styles['leaflet-container']}
        >
          <TileLayer
            attribution=''
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <PolylinesRoute />
        </MapContainer>
      </div>
    </>
  );
}