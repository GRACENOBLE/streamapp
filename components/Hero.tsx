import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Hero() {
  return (<section className=" w-full h-[520px]  top-0 relative ">
      <div >
        <div className=" w-full h-full bg-gradient-to-t from-gray-900 via-gray-900/50 to-gray-900">
          <Container>
            <div className="flex items-center w-full h-[520px] max-h-[520px]">
              <div className=" flex flex-wrap items-center max-w-[480px] gap-6">
                <h1 className=" text-4xl uppercase font-bold text-white">
                  uncharted
                </h1>
                <p className="text-white font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  exercitationem molestiae quo modi id dolores officiis
                  aspernatur voluptate suscipit praesentium.
                </p>
                <button className="bg-red-600 rounded-md py-2 px-2">Watch Trailer</button>
              </div>
            </div>
          </Container>
        </div>
        <Image
          src="/Images/uncharted.jpg"
          alt=""
          width={1000}
          height={600}
          className="-z-40 absolute top-0 left-0 w-full h-full object-cover object-top"
        />
      </div>
    </section>
  )
}

