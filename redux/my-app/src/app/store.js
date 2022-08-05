import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from './loginSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer,
    note:noteReducer
  },
});
