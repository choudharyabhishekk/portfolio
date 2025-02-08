const Nav = () => {
  return (
    <BlurFade delay={0.03 * 5}>
      <ShineBorder
        borderRadius={9999}
        className="w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl min-h-0 p-0" // Added min-h-0 and p-0
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          className="flex max-w-lg items-center justify-center mx-auto px-5 py-2 rounded-full text-sm" // Removed my-8
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
            </ul>
          </div>
        </nav>
      </ShineBorder>
    </BlurFade>
  );
};
