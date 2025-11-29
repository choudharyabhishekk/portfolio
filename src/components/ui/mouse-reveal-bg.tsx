"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface MouseRevealWrapperProps {
  children: ReactNode;
  backgroundImage: string;
  revealRadius?: number;
  smoothing?: number;
  initialOpacity?: number;
}

export default function MouseRevealWrapper({
  children,
  backgroundImage,
  revealRadius = 150,
  smoothing = 0.15,
  initialOpacity = 0.2,
}: MouseRevealWrapperProps) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);
  const targetPosRef = useRef({ x: -1000, y: -1000 });
  const currentPosRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      // Smooth interpolation
      currentPosRef.current.x +=
        (targetPosRef.current.x - currentPosRef.current.x) * smoothing;
      currentPosRef.current.y +=
        (targetPosRef.current.y - currentPosRef.current.y) * smoothing;

      setMousePos({
        x: currentPosRef.current.x,
        y: currentPosRef.current.y,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [smoothing]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    targetPosRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseLeave = () => {
    targetPosRef.current = {
      x: -1000,
      y: -1000,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image - Initially Dimmed */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          opacity: initialOpacity,
        }}
      />

      {/* Revealed Image Layer with radial gradient mask */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          maskImage: `radial-gradient(circle ${revealRadius}px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Content - Your existing page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
