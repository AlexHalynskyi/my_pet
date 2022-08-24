import React from 'react';
import classNames from 'classnames/bind';
import styles from './navBar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const NavMap = {
  Contacts: 'contacts',
  Blog: 'blog',
  Resume: 'resume',
  Home: '/',
}

export const NavBar = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>Alex Halynskyi</div>
      <div>
        {Object.entries(NavMap).map(([ name, path]) => {
          return (
            <NavLink
              className={({ isActive }) =>
                cx('link', { isActive })
              }
              to={path}
            >
              {name}
            </NavLink>
          )})}
      </div>
    </div>
  );
}