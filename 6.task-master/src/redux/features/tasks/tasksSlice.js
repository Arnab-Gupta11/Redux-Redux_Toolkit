import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  userSpecificTask: [],
};
//tasks slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log(payload);
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    setUserTasks: (state, { payload }) => {
      state.userSpecificTask = state.tasks.filter((task) => task.assignedTo === payload);
    },
  },
});
export const { addTask, updateStatus, removeTask, setUserTasks } = taskSlice.actions;
export default taskSlice.reducer;
