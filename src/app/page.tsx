import dynamic from "next/dynamic";
import {
  HomeAchievement,
  HomeBookNow,
  HomeSectionTwo,
  HomeTypewriterEffect,
} from "@/components/client/home";

const Scene = dynamic(() => import("@/components/client/globe"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className=" cursor-none">
      <section className=" bg-zinc-950 relative  min-h-screen">
        <Scene />

        <div className="absolute right-4 ">
          <HomeBookNow />
        </div>

        <div className=" pointer-events-none absolute max-w-lg w-full h-5/6 bg-black rounded-lg bg-opacity-50 top-1/2 -translate-y-1/2 left-24  text-9xl  text-cyan-500 ">
          <HomeTypewriterEffect />
        </div>

        <div className="w-full   text-white   p-6  pointer-events-none absolute  bottom-28 md:bottom-14 flex flex-wrap gap-8 items-center justify-center">
          <HomeAchievement />
        </div>

        {/* Over rating, Hours of content, Student trained, Average Salary Hike
"Hiring Partners"
 */}
      </section>

      <section className="h-screen bg-zinc-900"></section>
      <HomeSectionTwo />
    </div>
  );
}
