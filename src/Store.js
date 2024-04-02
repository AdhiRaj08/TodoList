import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Reducers'; // Import reducer

const store = configureStore({
  reducer: {
    todos: taskReducer,
  },
});

export default store;
