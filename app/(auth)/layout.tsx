import Container from "@/components/Container";
import Header from "@/components/Header";
import Header_one from "@/components/Header_one";
import { LogIn } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  //this code takes children as params which are of type react node and displays them wherever there are {children}
  return (
    <div>
      <Header_one />
      <Image
        src="/images/login_background.jpg"
        alt=""
        className="h-full w-full absolute object-cover brightness-50 -z-20"
        priority
        fill
      ></Image>

      <div className="relative flex flex-col h-screen w-screen justify-center items-center border z-10">
        {children}
      </div>
    </div>
  );
}
