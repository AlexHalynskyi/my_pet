import React, { ChangeEvent, useState } from 'react';
import { BackButton } from '../../backButton/backButton';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../redux/posts/postSlicer';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './createPost.module.scss';

const cx = classNames.bind(styles);

export const CreatePost = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [header, setHeaderState] = useState('')
  const [text, setTextState] = useState('')

  const handleSave = () => {
    dispatch(createPost({ id: Date.now(), header, text, time: new Date() }));
    navigate(-1);
  };

  const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => setHeaderState(event.target.value);
  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => setTextState(event.target.value);

  return (
    <>
      <div className={cx('wrapper')}>
        <BackButton />
        <div className={cx('h3')}>Create new post</div>
        <div>
          <label>Header: </label>
          <input type="text" value={header} onChange={onChangeHeader} placeholder='Type header' />
        </div>
        <div>
          <label className={cx('text-label')}>Text: </label>
          <textarea value={text} onChange={onChangeText} placeholder='Type text' className={cx('text')} rows={5}/>
        </div>
        <button onClick={handleSave} className={cx('button')}>Save post</button>
      </div>
    </>
  );
}