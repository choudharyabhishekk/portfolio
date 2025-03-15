"use client";
import { useRef, useEffect, useState } from "react";
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
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  thumbnail?: string; // New prop for thumbnail image
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
  thumbnail, // Added thumbnail prop
  links,
  className,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(!!video);

  useEffect(() => {
    const videoElement = videoRef.current;
    const card = cardRef.current;

    if (!videoElement || !card || !video) return;

    // Set initial loading state
    setIsVideoLoading(true);

    const handleCanPlayThrough = () => {
      setIsVideoLoading(false);
    };

    const handleLoadedData = () => {
      setIsVideoLoading(false);
    };

    const handleMouseEnter = () => {
      if (videoElement.readyState >= 3) {
        videoElement.play().catch((err) => console.error("Play failed:", err));
      } else {
        videoElement.load();

        videoElement.addEventListener(
          "canplay",
          () => {
            if (card.matches(":hover")) {
              videoElement
                .play()
                .catch((err) => console.error("Play failed after load:", err));
            }
          },
          { once: true }
        );
      }
    };

    const handleMouseLeave = () => {
      videoElement.pause();
    };

    // Add event listeners for video loading states
    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("loadeddata", handleLoadedData);

    // Attach listeners to the entire card for hover effects
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Handle video that's already cached and loaded
    if (videoElement.readyState >= 3) {
      setIsVideoLoading(false);
    }

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [video]);

  return (
    <div ref={cardRef}>
      <MagicCard
        className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 p-2 ease-out h-full"
        gradientColor="#262626"
      >
        <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
          <Link
            href={href || "#"}
            className={cn("block cursor-pointer w-full h-full", className)}
            title="View project"
          >
            {video && (
              <>
                {/* Show thumbnail instead of skeleton loader */}
                {isVideoLoading && thumbnail && (
                  <Image
                    src={thumbnail}
                    alt={`${title} thumbnail`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                    style={{ objectFit: "cover" }}
                  />
                )}

                {/* Fallback skeleton loader if no thumbnail is provided */}
                {isVideoLoading && !thumbnail && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-300 dark:border-gray-600 border-t-gray-400 dark:border-t-gray-500 animate-spin" />
                  </div>
                )}

                <video
                  ref={videoRef}
                  src={video}
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className={cn(
                    "w-full h-full object-cover object-top transition-opacity duration-300",
                    isVideoLoading ? "opacity-0" : "opacity-100"
                  )}
                />
              </>
            )}
            {image && !video && (
              <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className="w-full h-full object-cover object-top"
                style={{ objectFit: "cover" }}
              />
            )}
          </Link>
        </div>
        <CardHeader className="px-2 py-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-lg">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2 my-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
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
                    className="flex gap-2 px-3 text-[12px] cursor-pointer hover:border-gray-400"
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
    </div>
  );
}
