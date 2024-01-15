import React from "react";
import MovieCard from "./MovieCard";
const MovieLayout = ({ movies }) => {
  return (
    <section className="py-4 px-2 md:px-5 lg:px-7 mt-7 pb-7 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.episode_id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieLayout;
