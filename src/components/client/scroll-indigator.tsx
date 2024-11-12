"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed z-40 top-0 left-0 right-0 bg-cyan-500"
      style={{ height: 69, scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};

export default ScrollIndicator;
