import React from 'react';
import { Post } from '../post/post';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


export const PostsList = () => {
  const { postsList } = useSelector((state: RootState) => state.posts)

  return (
    <div>
      {postsList.map(({ id, text, header, time }) =>
        <Post key={id} text={text} header={header} time={time} id={id} />)}
    </div>
  );
}