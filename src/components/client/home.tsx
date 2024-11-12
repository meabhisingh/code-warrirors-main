"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { extractValueParts } from "@/utils/helpers";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { BarChart4, Briefcase, Clock, Star, User } from "lucide-react";
import { Fragment, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { LampContainer } from "../ui/lamp";
import { TypewriterEffect } from "../ui/typewriter-effect";

const textClassName = "text-white text-2xl font-mono ";

const words = [
  {
    text: "Become",
    className: textClassName,
  },

  {
    text: "Top",
    className: textClassName,
  },
  {
    text: "1%",
    className: textClassName,
  },
  {
    text: "Coder",
    className: textClassName,
  },
  {
    text: "In",
    className: textClassName,
  },
  {
    text: "The",
    className: textClassName,
  },
  {
    text: "World.",
    className: textClassName + "  text-cyan-500",
  },
];

export const HomeTypewriterEffect = () => {
  return (
    <TypewriterEffect
      cursorClassName="bg-cyan-500 "
      className="text-center"
      words={words}
    />
  );
};

{
  /* Over rating, Hours of content, Student trained, Average Salary Hike
"Hiring Partners"
 */
}

const achievements = [
  {
    title: "Over rating",
    value: "400K+",
    icon: <Star size={"1.5rem"} />,
  },
  {
    title: "Hours of content",
    value: "1000+",
    icon: <Clock size={"1.5rem"} />,
  },
  {
    title: "Student trained",
    value: "100K+",
    icon: <User size={"1.5rem"} />,
  },
  {
    title: "Average Salary Hike",
    value: "50%",
    icon: <BarChart4 size={"1.5rem"} />,
  },
  {
    title: "Hiring Partners",
    value: "100+",
    icon: <Briefcase size={"1.5rem"} />,
  },
];

const AchievementCard = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const { numberValue, suffixValue } = extractValueParts(value);

  useEffect(() => {
    const animation = animate(count, numberValue, {
      duration: 10,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, numberValue]);

  return (
    <div className="flex  font-bold text-2xl">
      <motion.p>{rounded}</motion.p>
      {suffixValue}
    </div>
  );
};

export const HomeAchievement = () => {
  return achievements.map((achievement, index) => (
    <Fragment key={index}>
      <div
        style={{
          backdropFilter: "blur(10px)",
          padding: "1rem",
        }}
        className="flex gap-2 items-center rounded-md bg-opacity-40 bg-black "
      >
        {achievement.icon}
        <div>
          <AchievementCard value={achievement.value} />
          <span className="text-lg text-muted-foreground ">
            {achievement.title}
          </span>
        </div>
      </div>
    </Fragment>
  ));
};

export const HomeBeamCard = () => {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
};

export const HomeBookNow = () => {
  return (
    <CardContainer containerClassName="py-0" className="inter-var">
      <CardBody className=" space-y-6 relative group/card h-full  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-zinc-950   w-auto sm:w-[30rem] p-6   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-center  w-full  text-white"
        >
          Get a free trial now
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          Watch a live class, get your doubts cleared, and participate in
          quizzes.
        </CardItem>
        <CardItem
          data-firebolt-zoom
          translateZ={20}
          as="button"
          className="px-4 py-2  my-4 rounded-xl  bg-white text-black text-xs font-bold"
        >
          Book Now
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export const HomeSectionTwo = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Premium Courses <br /> with <br /> Lab Access
      </motion.h1>
    </LampContainer>
  );
};
