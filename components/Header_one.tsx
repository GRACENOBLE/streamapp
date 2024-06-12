import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

export default function Header_one() {
  return (
    <header className="flex h-60 bg-gradient-to-t from-transparent to-black py-4 fixed w-full z-10">
      <Container>
        <nav className="flex justify-between ">
          <div className=" h-10 flex items-center px-1">
            <Image
              src={"/Images/logo.png"}
              alt=""
              width={200}
              height={40}
              className="h-10 w-32 object-contain"
            />
          </div>
        </nav>
      </Container>
    </header>
  );
}
