import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import BlurFade from "./magicui/blur-fade";
const Nav = () => {
  return (
    <BlurFade delay={0.03 * 5}>
      <nav
        aria-label="Main"
        data-orientation="horizontal"
        className=" flex max-w-lg items-center justify-center mx-auto my-8 border border-neutral-800 px-5 py-2 rounded-full text-sm"
      >
        <div>
          <ul
            data-orientation="horizontal"
            className="group flex flex-1 list-none items-center justify-center space-x-1 gap-8"
          >
            <li className="text-lg font-bold">
              <a href="/">Abhishek</a>
            </li>
            <li className="hover:text-neutral-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-neutral-500">
              <a href="#work">Experience</a>
            </li>
            <li className="hover:text-neutral-500">
              <a href="#cv">Resume</a>
            </li>

            <li>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </div>
      </nav>
    </BlurFade>
  );
};

export default Nav;
