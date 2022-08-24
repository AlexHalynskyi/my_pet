import React  from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import classNames from 'classnames/bind';
import styles from './map.module.scss'

const cx = classNames.bind(styles);

interface ILocation {
  lat: number;
  lng: number;
  text: string;
}

export const LocationPin = ({ text }: ILocation) => (
  <div className={cx('pin')}>
    <Icon icon={locationIcon} className={cx('pin-icon')} />
    <p className={cx('pin-text')}>{text}</p>
  </div>
)