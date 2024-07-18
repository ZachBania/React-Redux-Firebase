import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: null,
  postsByAuthor: [],
};

const sortPostsDesc = (posts) => {
  return posts.slice().sort((a, b) => b.id - a.id);
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.post = action.payload;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    getPostsByAuthor: (state, action) => {
      state.postsByAuthor = action.payload;
    },
    createPost: (state, action) => {
      state.posts.push(action.payload);
      state.posts = sortPostsDesc(state.posts);
    },
    updatePost: (state, action) => {
      if (state.post && state.post.id === action.payload.id) {
        state.post = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setPostRating: (state, action) => {
      const { postId, rating, ratingOfActiveUser } = action.payload;
      const fetchByPosts = state.posts.find(post => post.id == postId);
      const fetchByPostsByAuthor = state.postsByAuthor.find(post => post.id == postId);

      if(fetchByPosts) {
        const post = fetchByPosts;
        post.rating = rating;
        post.ratingOfActiveUser = ratingOfActiveUser
      }

      if(fetchByPostsByAuthor) {
        const post = fetchByPostsByAuthor;
        post.rating = rating;
        post.ratingOfActiveUser = ratingOfActiveUser
      }

    },
    postError: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const { getPost, getPosts, createPost, updatePost, deletePost, getPostsByAuthor, setPostRating, postError } = postSlice.actions;
export default postSlice.reducer;
