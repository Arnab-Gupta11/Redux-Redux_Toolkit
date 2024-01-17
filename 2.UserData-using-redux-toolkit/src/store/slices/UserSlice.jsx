import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, action) {
      state.push(action.payload);
      // console.log("🚀 ~ adduser ~ state:", state);
    },
    removeUser(state, action) {
      // console.log(action.payload);
      // const index = state.indexOf(action.payload); //If I send the user then I can get the index  like this.
      // console.log(index);

      state.splice(action.payload, 1); //Optimize way to pass the id.
    },
    deleteUsers(state, action) {},
  },
});
// console.log(userSlice.actions);

export default userSlice.reducer;
export const { adduser, removeUser } = userSlice.actions;
// export { userSlice };
