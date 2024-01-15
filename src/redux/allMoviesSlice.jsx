import { createSlice } from "@reduxjs/toolkit";
export const allMoviesSlice = createSlice({
  name: "all-movies",
  initialState: {
    allMovies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.allMovies.push(action.payload);
    },
  },
});

export const { addMovies } = allMoviesSlice.actions;
export default allMoviesSlice.reducer;
