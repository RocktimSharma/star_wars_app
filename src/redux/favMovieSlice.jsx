import { createSlice } from "@reduxjs/toolkit";

export const favMovieSlice = createSlice({
  name: "fav-movies",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.episode_id !== action.payload.episode_id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favMovieSlice.actions;
export default favMovieSlice.reducer;
