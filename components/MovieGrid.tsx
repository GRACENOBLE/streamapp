import React from "react";
import MovieCard from "./MovieCard";
import Container from "./Container";

export default function MovieGrid() {
  return (
    <section className="bg-gray-900">
      <Container>
        <h1 className="text-2xl text-white pt-5 pb-2 font-semibold flex flex-end">
          Popular
        </h1>

        <div className="max-w-[1500px] h-max flex flex-wrap gap-4 mx-auto">
          {Array.from({ length: 100 }).map((_, index) => (
            <MovieCard />
          ))}
        </div>
      </Container>
    </section>
  )
}
