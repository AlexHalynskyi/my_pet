import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './post.module.scss';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../redux/posts/postSlicer';
import { EditPost } from '../createPost/editPost';

const cx = classNames.bind(styles);

interface IPost {
  id: number;
  header: string;
  text: string;
  time: Date;
}

export const Post = ({ header, text, time, id }:IPost ) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false)

  const displayTime = time.toLocaleTimeString().slice(0, 5) + ', ' + time.toLocaleDateString()
  const onDeleteHandler = () => dispatch(deletePost(id));
  const onEditHandler = () => setIsEdit((prev) => !prev);

  return (
    <>
      {isEdit && <EditPost id={id} headerValue={header} textValue={text} onEditHandler={onEditHandler} />}
      {!isEdit && <div className={cx('wrapper')}>
        <div className={cx('buttons')}>
          <button onClick={onEditHandler} className={cx('button')}>
            <Icon icon='bx:calendar-edit' className={cx('icon')}/>
            Edit
          </button>
          <button onClick={onDeleteHandler} className={cx('button')}>
            <Icon icon='fluent:delete-dismiss-24-filled' className={cx('icon')}/>
            Delete
          </button>
        </div>
        <div className={cx('h3')}>{header}</div>
        <div className={cx('text')}>{text}</div>
        <div className={cx('time')}>{displayTime}</div>
      </div>}
    </>
  );
}