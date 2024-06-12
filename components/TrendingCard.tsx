import Image from "next/image";
import React from "react";

export default function TrendingCard() {
  return (
    <section className="">
      <Image
        src="/Images/uncharted.jpg"
        alt=""
        width={720}
        height={450}
        className="rounded-md object-cover  w-full h-auto"
      />
    </section>
  )
}
