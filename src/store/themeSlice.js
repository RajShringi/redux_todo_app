import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    switchTheme(state, action) {
      if (state === "light") {
        return "dark";
      } else {
        return "light";
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice;
