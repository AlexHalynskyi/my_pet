import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/posts/postSlicer';
import classNames from 'classnames/bind';
import styles from './createPost.module.scss';

const cx = classNames.bind(styles);

interface IEditPost {
  id: number;
  textValue: string;
  headerValue: string;
  onEditHandler: () => void;
}

export const EditPost = ({ id, textValue, headerValue, onEditHandler }:IEditPost ) => {
  const dispatch = useDispatch()
  const [header, setHeaderState] = useState(headerValue)
  const [text, setTextState] = useState(textValue)

  const handleSave = () => {
    dispatch(updatePost({ id, header, text, time: new Date() }));
    onEditHandler();
  };

  const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => setHeaderState(event.target.value);
  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => setTextState(event.target.value);

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('h3')}>Edit post</div>
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