import React from 'react';
import { Map } from '../map/map';
import classNames from 'classnames/bind';
import styles from './contacts.module.scss';
import { ButtonLink } from '../buttonLink/buttonLink';
import { buttons, location } from '../../constants/contacts';

const cx = classNames.bind(styles);

export const Contacts = () => {
  return (
    <>
      <h2 className={cx('h2')}>Contact Me</h2>
      <div className={cx('wrapper')}>
        <Map location={location} zoomLevel={17} />
        <div className={cx('card')}>
          <h3 className={cx('h3')}>Contacts</h3>
          <div className={cx('buttons')}>
            {buttons.map(({ text, icon, link }) => <ButtonLink link={link} icon={icon} text={text} />)}
          </div>
        </div>
      </div>
    </>
  )
}