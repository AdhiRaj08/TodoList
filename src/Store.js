import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Reducers'; // Import your reducer

const store = configureStore({
  reducer: {
    todos: taskReducer,
  },
});

export default store;