import React from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationPin } from './locationPin';
import classNames from 'classnames/bind';
import styles from './map.module.scss'

const cx = classNames.bind(styles);

interface IMap {
  location: {
    address: string;
    lat:number;
    lng: number;
  };
  zoomLevel: number;
}

export const Map = ({ location, zoomLevel }: IMap) => {
  const { lat, lng, address } = location
  return (
  <div className={cx('google-map')}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDVkBwerWvusK2NWFQYGZZQdEIE2Nd_b_Q' }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin lat={lat} lng={lng} text={address} />
    </GoogleMapReact>
  </div>
)}

