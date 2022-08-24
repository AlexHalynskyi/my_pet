import React from 'react';
import { Link } from 'react-router-dom';
import { PostsList } from './postsList/postsList';
import classNames from 'classnames/bind';
import styles from './blog.module.scss';

const cx = classNames.bind(styles);

export const Blog = () => {
  return (
    <div className={cx('wrapper')}>
      <PostsList />
      <Link to="newpost" className={cx('link')}>
        <button className={cx('button')}>Add new post</button>
      </Link>
    </div>
  )
}