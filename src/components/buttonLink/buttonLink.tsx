import React from 'react';
import classNames from 'classnames/bind';
import styles from './buttonLink.module.scss';
import { Icon } from '@iconify/react'

const cx = classNames.bind(styles);

interface IButtonLink {
  link: string;
  icon: string;
  text: string;
}

export const ButtonLink = ({ link, icon, text }: IButtonLink) => {
  return (
    <a href={link} target='_blank' className={cx('wrapper')}>
      <Icon icon={icon} className={cx('icon')}/>
      <button className={cx('button')}>{text}</button>
    </a>
  );
}