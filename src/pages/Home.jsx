import React, { useEffect, useState } from "react";
import MovieLayout from "../components/MovieLayout";
import { fetchMovies } from "../api/swapi";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../redux/allMoviesSlice";

export default function Home() {
  const dispatch = useDispatch();
  const allMoviesArray =
    useSelector((state) => state.movies.allMovies.allMovies) || [];
  const movies = allMoviesArray.flat();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allMovies = await fetchMovies();
        dispatch(addMovies(allMovies));
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    if (movies.length === 0) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [movies, dispatch]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 col-span-full text-yellow-500 mt-5">
        All Star Movies
      </h1>
      {loading ? (
        <>
          <p className="text-sm text-gray-400 ">Loading...</p>
        </>
      ) : (
        <>
          {movies.length === 0 ? (
            <p>No favorite movies yet.</p>
          ) : (
            <MovieLayout movies={movies}></MovieLayout>
          )}
        </>
      )}
    </>
  );
}
