import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";
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
    //When we dont use createAction
    // deleteUsers(state, action) {
    //   return [];
    // },
  },
  //If action is supposed to be handaled by one reducer, use reducer
  //If action is supposed to be handaled by multiple reducer, use extraReducer
  extraReducers(builder) {
    builder.addCase(deleteUsers, () => {
      return [];
    });
  },
});
// console.log(userSlice.actions);

export default userSlice.reducer;
export const { adduser, removeUser } = userSlice.actions;
// export { userSlice };
