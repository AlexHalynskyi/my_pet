import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './backButton.module.scss';
import { Icon } from '@iconify/react';

const cx = classNames.bind(styles);

export const BackButton = () => {
  const navigate = useNavigate();
  const onBackHandler = () => navigate(-1);

  return (
    <button onClick={onBackHandler} className={cx('wrapper')}>
      <Icon icon='akar-icons:arrow-back' className={cx('icon')}/>
      Back
    </button>
  );
}