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
          <div className="mx-auto flex flex-col items-center w-full max-w-2xl space-y-8">
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
                        Download CV
                      </button>
                    </Link>
                  </ShineBorder>
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <a
                    href="https://github.com/choudharyabhishekk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-500 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>

                  <a
                    href="https://linkedin.com/in/choudharyabhishekk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>

                  <a
                    href="mailto:choudharyabhishekk@gmail.com"
                    className="hover:text-neutral-500 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </BlurFade>
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
                    I love building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of full stack projects. Here
                    are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
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

            {/* <div className="flex flex-col md:flex-row  gap-2 mb-4">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <div className="flex w-36 gap-2 items-center">
                  <MonitorSmartphone size={18} />
                  <h2 className="text-md font-bold">Frontend</h2>
                </div>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {DATA.technologies.slice(0, 8).map((skill, id) => (
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

            {/* <div className="flex flex-col md:flex-row  gap-2 mb-4">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <div className="flex w-36 gap-2 items-center">
                  <DatabaseZap size={18} />
                  <h2 className="text-md font-bold">Backend</h2>
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
            </div> */}

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
                          className={`flex-1 h-10 w-[250px] px-2 md:px-2 py-1 rounded-lg border cursor-pointer text-xs flex items-center gap-2`}
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
        <section id="work">
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
                <div className="flex justify-center items-center gap-6 mt-6">
                  <a
                    href="https://linkedin.com/in/choudharyabhishekk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-white text-slate-800 border rounded-full hover:bg-white/90"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <ShineBorder
                    className="inline-block" // This ensures proper sizing
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderRadius={9999}
                  >
                    <a
                      href="mailto:choudharyabhishekk@gmail.com"
                      className="flex items-center gap-2 px-8 py-2 rounded-lg font-semibold hover:transition-colors"
                      aria-label="Email"
                    >
                      Email
                    </a>
                  </ShineBorder>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
