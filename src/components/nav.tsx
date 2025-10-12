"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import { CodeXmlIcon, Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BlurFade delay={0.03 * 5}>
      <nav aria-label="Main" data-orientation="horizontal" className="w-full ">
        <div
          className={`relative flex flex-col md:flex-row max-w-3xl items-center justify-between mx-auto my-6 text-sm ${
            isMenuOpen ? "rounded-3xl" : "rounded-2xl"
          }`}
        >
          {/* Mobile header */}
          <div className="flex w-full items-center justify-between md:hidden px-4 py-3">
            <div className="text-lg font-bold">
              <a href="/">
                <CodeXmlIcon />
              </a>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 text-neutral-400 hover:text-neutral-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop and mobile menu */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex w-full items-center justify-between`}
          >
            {/* Logo - Left side (desktop only) */}
            <div className="hidden md:block">
              <a href="/" className="text-neutral-400 hover:text-neutral-100">
                <CodeXmlIcon size={32} />
              </a>
            </div>

            {/* Navigation items - Right side */}
            <ul
              data-orientation="horizontal"
              className="flex flex-col md:flex-row list-none items-center border border-neutral-800 border-dashed px-5 py-2 rounded-2xl md:space-x-1 gap-4 md:gap-4 w-full md:w-auto"
            >
              <li className="hover:text-neutral-500 w-full md:w-auto text-center">
                <a href="#work">Experience</a>
              </li>
              <li className="hover:text-neutral-500 w-full md:w-auto text-center">
                <a href="#projects">Projects</a>
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
        </div>
      </nav>
    </BlurFade>
  );
};

export default Nav;
