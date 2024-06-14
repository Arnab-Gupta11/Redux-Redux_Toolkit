import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    user: userReducer,
  },
});

export default store;
