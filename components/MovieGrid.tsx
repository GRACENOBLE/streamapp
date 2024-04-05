import React from "react";
import MovieCard from "./MovieCard";
import Container from "./Container";

const MovieGrid = () => {
  return (
    <section className="bg-gray-900">
      <Container>
        <h1 className="text-2xl text-white pt-5 pb-2 font-semibold">Popular</h1>
        <div className="w-max grid grid-cols-7 gap-4 mx-auto">
            {Array.from({ length: 100}).map((_, index) =>(
                <MovieCard/>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default MovieGrid;
