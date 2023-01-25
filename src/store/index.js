import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    todosState: todoSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
