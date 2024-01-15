import React from "react";
import { useSelector } from "react-redux";
import MovieLayout from "../components/MovieLayout";
export default function Favourites() {
  const favoriteMovies = useSelector(
    (state) => state.movies.favorites.favorites
  );
  console.log(favoriteMovies);
  return (
    <>
      <p className="text-3xl font-bold mb-4 col-span-full text-yellow-500 mt-5">
        Favorites Movies
      </p>
      {favoriteMovies.length === 0 ? (
        <p className="mt-7 text-gray-400 pt-7">No favorite movies yet.</p>
      ) : (
        <MovieLayout movies={favoriteMovies}></MovieLayout>
      )}
    </>
  );
}
