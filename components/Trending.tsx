
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./Container";
import TrendingCard from "./TrendingCard";


import React from 'react'

async function  getData(){
  
}

export default function Trending() {
  return (
    <div className="bg-gray-900">
      <Container>
        <h1 className="text-white font-semibold text-2xl pb-2">Trending now</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <TrendingCard />
                <h2 className="text-white py-3">Uncharted</h2>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
}
