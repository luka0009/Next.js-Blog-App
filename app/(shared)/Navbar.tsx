"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <p>AI Blog</p>
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <span className="text-2xl">✌</span>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">
            AI written blogs
          </h1>
          <p className="text-sm mt-3">Blogs, essays, articles and many more</p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
        {/* <Image
          src="https://www.shutterstock.com/image-illustration/drapery-fabric-stripes-3d-illustration-600w-1621785067.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          /> */}
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </>
  );
};

export default Navbar;
