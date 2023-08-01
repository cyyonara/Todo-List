import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../slice/todolist';

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
});