import { createSlice } from '@reduxjs/toolkit';

interface PostType {
  id: number;
  header: string;
  text: string;
  time: Date;
}

interface IPosts {
  postsList: PostType[],
}

const initialState: IPosts = {
  postsList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost(state, action) {
      state.postsList = [...state.postsList, action.payload];
    },
    updatePost(state, action) {
      state.postsList = state.postsList.map((post) => action.payload.id === post.id ? action.payload : post)
    },
    deletePost(state, action) {
      state.postsList = state.postsList.filter(({ id }) => action.payload !== id)
    },
  },
})

const { actions, reducer } = postsSlice
export const { createPost, updatePost, deletePost } = actions
export default reducer