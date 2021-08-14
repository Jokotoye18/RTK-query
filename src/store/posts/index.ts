import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = postsSlice.actions;

export default postsSlice.reducer;
