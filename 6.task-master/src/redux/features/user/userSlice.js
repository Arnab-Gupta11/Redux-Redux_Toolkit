import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "Nahid Hasan",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
