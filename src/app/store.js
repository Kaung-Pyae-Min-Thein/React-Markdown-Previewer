import { configureStore } from "@reduxjs/toolkit";
import markedReducer from '../features/markedSlice';

export default configureStore({
  reducer: {
    marked: markedReducer
  }
});