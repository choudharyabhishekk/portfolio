import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Nav from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";

import {
  CodeXml,
  Cog,
  DatabaseZap,
  FileCheck,
  FolderSync,
  Github,
  GraduationCap,
  Hammer,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Wallpaper,
} from "lucide-react";
import { ShineBorder } from "@/components/magicui/shine-border";
import { MagicCard } from "@/components/magicui/magic-card";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <section id="hero">
          <div className="mx-auto flex justify-center flex-col items-center w-full max-w-3xl space-y-8 h-96  border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl">
            <div className="flex-col items-center flex space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl sm:text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-violet-400 via-pink-200 to-orange-200 text-transparent bg-clip-text"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />{" "}
              <BlurFadeText
                className="text-base/relaxed"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="flex flex-col justify-center items-center space-y-6">
                <div className="flex flex-row items-center gap-3 sm:flex-row md:gap-4">
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors">
                      Get In Touch
                    </button>
                  </Link>
                  <ShineBorder
                    className="inline-block" // This ensures proper sizing
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderRadius={9999}
                  >
                    <Link
                      href="/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open my resume in a new tab"
                    >
                      <button className=" px-8 py-3 rounded-full bg-transparent text-white font-semibold transition-colors w-full">
                        View Resume
                      </button>
                    </Link>
                  </ShineBorder>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="work" className="mt-4">
          <div className="flex min-h-0 flex-col gap-y-3 max-w-4xl mx-auto p-8 border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I love bringing ideas to life
                  </h2>
                </div>
              </div>
            </BlurFade>
            <div className="flex min-h-0 flex-col gap-y-3 max-w-4xl mx-auto p-8 border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Products</h2>
              </BlurFade>
              {DATA.ventures.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.technologies}
                    image={project.image}
                    thumbnail={project?.thumbnail}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="flex max-w-4xl min-h-0 flex-col gap-y-3 mx-auto border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl p-8">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold mb-3">Skills & Technologies</h2>
            </BlurFade>

            {/* Languages Section */}
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <div className="flex w-36 gap-2 items-center">
                  <CodeXml size={18} />
                  <h2 className="text-md font-bold">Languages</h2>
                </div>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {DATA.languages.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge variant="secondary" className="cursor-pointer">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>

            {/* Technologies Section */}

            <div className="flex flex-col md:flex-row  gap-2 mb-4">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <div className="flex w-36 gap-2 items-center">
                  <Hammer size={18} />
                  <h2 className="text-md font-bold">Technologies</h2>
                </div>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {DATA.technologies.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge variant="secondary" className="cursor-pointer">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>

            {/* Concepts Section */}
            <div className="flex flex-col md:flex-row   gap-2">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <div className="flex gap-2 w-36 items-center">
                  <Cog size={18} />
                  <h2 className="text-md  font-bold">Concepts</h2>
                </div>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {DATA.concepts.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge variant="secondary" className="cursor-pointer">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="certifications">
          <div className="flex max-w-4xl min-h-0 flex-col gap-y-3 mx-auto border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl p-8">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold mb-3">Certifications</h2>
            </BlurFade>

            {/* Certifications Section */}
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-wrap gap-4">
                {DATA.certifications.map((cert, id) => {
                  return (
                    <BlurFade
                      key={cert.name}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        title="view credentials"
                      >
                        <Badge
                          variant={"secondary"}
                          className={`flex-1 h-10 px-2 md:px-2 py-1 rounded-lg border cursor-pointer text-xs flex items-center gap-2`}
                        >
                          <Image
                            src={cert.icon}
                            width={20}
                            height={20}
                            alt={cert.name}
                          />

                          {cert.name}
                        </Badge>
                      </a>
                    </BlurFade>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3 max-w-4xl mx-auto p-8 border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  // href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me an email{" "}
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    here
                  </Link>{" "}
                  and I&apos;ll respond quickly.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
                  <a
                    href="https://linkedin.com/in/choudharyabhishekk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                    aria-label="GitHub Profile"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>

                  <a
                    href="mailto:choudharyabhishekk@gmail.com"
                    className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Send Email"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
