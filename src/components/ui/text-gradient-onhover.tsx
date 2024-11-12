"use client";

import { useEffect, useRef, useState } from "react";

type TextSVGProps = {
  text: string;
  mouseSize?:
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20;
  fontSize?: string;
  hoverColor?: string[];
  color?: string;
};

const TextSVG = ({
  text,
  color = "#404040",
  hoverColor = ["#fff"],
  mouseSize = 5,
  fontSize = "1rem",
}: TextSVGProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement || !isHovered) return;

    const handleMouseMove = (e: MouseEvent) => {
      const svgRect = svgElement.getBoundingClientRect();
      const cx = ((e.clientX - svgRect.left) / svgRect.width) * 100;
      const cy = ((e.clientY - svgRect.top) / svgRect.height) * 100;
      console.log(cx, cy);
      setGradientCenter({ cx: `${cx}%`, cy: `${cy}%` });
    };

    svgElement.addEventListener("mousemove", handleMouseMove);
    return () => {
      svgElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);
  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="border border-black inline "
    >
      <defs>
        <radialGradient
          id="multiColorGradient"
          gradientUnits="userSpaceOnUse"
          r={`${mouseSize}%`}
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {isHovered && (
            <>
              {hoverColor.map((color, index) => (
                <stop
                  key={index}
                  offset={`${((index + 1) * 100) / hoverColor.length}%`}
                  stopColor={color}
                  stopOpacity={0.75}
                />
              ))}

              {/* <stop offset="60%" stopColor={hoverColor} stopOpacity="0.50" />
              <stop offset="80%" stopColor={hoverColor} stopOpacity="0.25" />
              <stop offset="90%" stopColor={hoverColor} stopOpacity="0.2" /> */}
            </>
          )}
          <stop offset="100%" stopColor={color} stopOpacity="0.75" />
        </radialGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fill="none"
        stroke="url(#multiColorGradient)"
        strokeWidth="0.5"
        style={{ cursor: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </text>
    </svg>
  );
};

export default TextSVG;
