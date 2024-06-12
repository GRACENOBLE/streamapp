import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import Trending from "@/components/Trending";
import React from "react";

export default function page() {
  return (
    <main>
      <Header />
      <Hero />
      <Trending/>
      <MovieGrid/>
    </main>
  )
}

