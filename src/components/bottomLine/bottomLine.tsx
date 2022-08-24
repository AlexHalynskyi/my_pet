import React from 'react';
import classNames from 'classnames/bind';
import styles from './bottomLine.module.scss';

const cx = classNames.bind(styles);

export const BottomLine = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>&#169; {currentYear} Alex Halynskyi</div>
    </div>
  );
}