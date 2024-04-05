import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Container from "./Container";

const Header = () => {
  return (
    <header className="flex h-20 items-center bg-gradient-to-t from-transparent to-black py-4 fixed w-full z-10">
      <Container>
        <nav className="flex justify-between ">
          <div className=" h-10 flex items-center px-1">
            <Link href="/">
              <Image
                src={"/Images/logo.png"}
                alt=""
                width={200}
                height={40}
                className="h-10 w-32 object-contain"
              />
            </Link>
          </div>
          <ul className=" h-10 flex gap-4 items-center">
            <Navlinks title={"Movies"} path={"/movies"}></Navlinks>
            <Navlinks title={"TV Shows"} path={"/tvShows"}></Navlinks>
            <li className="text-white font-semibold">
              <HiMagnifyingGlass />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

type NavLinkProps = { title: string; path: string };

const Navlinks = ({ title, path }: NavLinkProps) => (
  <li className="text-white font-semibold">
    <Link href={path}>{title}</Link>
  </li>
);
