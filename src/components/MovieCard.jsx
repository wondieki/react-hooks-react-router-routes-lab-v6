import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2> {/* Movie title in <h2> */}
      <Link to={`/movie/${movie.id}`}>View Info</Link> {/* Link to movie detail page */}
    </div>
  );
}

export default MovieCard;