import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return res.data;
});
const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    isError: null,
    comments: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.isError = action.error.message;
    });
  },
});

// export const { isLoading, comments, isError } = commentsSlice.actions;
export default commentsSlice.reducer;
