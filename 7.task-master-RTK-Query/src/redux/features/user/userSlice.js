import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../utils/firebase.config";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

//create user
export const createUser = createAsyncThunk("users/createUser", async ({ name, email, password }) => {
  const data = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
  return {
    name: data.user.displayName,
    email: data.user.email,
  };
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      (state.email = payload.email), (state.name = payload.name);
    },
    toggoleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logoutUser: (state) => {
      state.name = "";
      state.email = "";
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.isLoading = true), (state.isError = false), (state.email = "");
        state.name = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.isError = false), (state.email = payload.email);
        state.name = payload.name;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true), (state.email = "");
        state.name = "";
        state.error = action.error.message;
      });
  },
});
export const { setCurrentUser, toggoleLoading, logoutUser } = userSlice.actions;
export default userSlice.reducer;
