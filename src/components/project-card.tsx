import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { MagicCard } from "./magicui/magic-card";
import { ShineBorder } from "./magicui/shine-border";
import { Button } from "./ui/button";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <MagicCard
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 p-2 ease-out h-full"
      }
      gradientColor="#262626"
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top rounded-t-lg" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-60 w-full overflow-hidden object-cover object-top rounded-t-lg"
          />
        )}
      </Link>
      <CardHeader className="px-2 py-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-lg">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 my-2">
        {tags && tags.length > 0 && (
          <div className=" flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0 text-[12px] cursor-default"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 flex flex-col items-start py-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Button
                  variant="secondary"
                  key={idx}
                  className=" flex gap-2 px-3 text-[12px] cursor-pointer hover:border-gray-400"
                >
                  {link.icon}
                  {link.type}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </MagicCard>
  );
}
