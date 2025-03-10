"use client";
import React, { useState } from "react";
import BlurFade from "./magicui/blur-fade";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BlurFade delay={0.03 * 5}>
      <nav
        aria-label="Main"
        data-orientation="horizontal"
        className={`relative flex flex-col md:flex-row max-w-lg items-center justify-between mx-auto my-8 border border-neutral-800 px-5 py-2 text-sm ${
          isMenuOpen ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="text-lg font-bold">
            <a href="/">Abhix</a>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 text-neutral-400 hover:text-neutral-100"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex w-full`}>
          <ul
            data-orientation="horizontal"
            className="flex flex-col md:flex-row w-full list-none items-center justify-center md:space-x-1 gap-4 md:gap-8 py-4 md:py-0"
          >
            <li className="text-lg font-bold hidden md:block">
              <a href="/">Abhix</a>
            </li>
            <li className="hover:text-neutral-500 w-full md:w-auto text-center">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-neutral-500 w-full md:w-auto text-center">
              <a href="#work">Experience</a>
            </li>
            <li className="hover:text-neutral-500 w-full md:w-auto text-center">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-neutral-500 w-full md:w-auto text-center">
              <a href="/resume" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </BlurFade>
  );
};

export default Nav;
