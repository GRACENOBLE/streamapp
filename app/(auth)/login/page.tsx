import React from "react";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

export default function page() {
  return (
    <div className="bg-black/80 rounded-md py-8 px-8">
      <form>
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-white">Log in</h1>
            <Input
              type="email"
              name="email"
              placeholder="email"
              className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-[233px] block"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-[233px] block"
            />
            <Button
              type="submit"
              variant="destructive"
              className=" w-16 bg-red-600 rounded-md mx-auto"
            >
              Login
            </Button>
            <div className="mx-auto text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                rel="stylesheet"
                href="/sign_up"
                className="font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
            <div className="flex gap-5 justify-center w-full">
              <Button className="flex" variant="outline" size="icon">
                <LuGithub />
              </Button>
              <Button className="flex" variant="outline" size="icon">
                <FcGoogle />
              </Button>
            </div>
          </div>
        </Container>
      </form>
    </div>
  );
}
