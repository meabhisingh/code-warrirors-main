import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SearchForm } from "../client/form";
import { ThemeToggleButton } from "../client/buttons";
import {
  LogOut,
  LucideFileStack,
  LucideLayoutDashboard,
  LucideUserCircle,
  Settings,
  User as UserIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";

const practices: { title: string; href: string; description: string }[] = [
  {
    title: "Lab",
    href: "/lab",
    description:
      "Code in the browser with a real-time code editor with AI integrated.",
  },
  {
    title: "Web Playground",
    href: "/web-playground",
    description:
      "Code HTML,CSS and JavaScript in the browser and see the output in real-time.",
  },
  {
    title: "Compiler",
    href: "/compiler",
    description: "Compile and run code in multiple languages in browser.",
  },
];

const courses: { title: string; href: string; description: string }[] = [
  {
    title: "AWS",
    href: "/courses/aws",
    description: "Master AWS services and prepare for AWS certifications.",
  },
  {
    title: "Interview Preparation",
    href: "/courses/interview-preparation",
    description:
      "Prepare for technical interviews with specific topics and mock interviews.",
  },
  {
    title: "CI/CD with Jenkins",
    href: "/courses/ci-cd-with-jenkins",
    description: "Learn to automate the deployment process with Jenkins.",
  },
  {
    title: "CI/CD with GitHub Actions",
    href: "/courses/ci-cd-with-github-actions",
    description:
      "Learn to automate the deployment process with GitHub Actions.",
  },
  {
    title: "Full Stack Web Development",
    href: "/courses/full-stack-web-development",
    description:
      "Learn to build and deploy full-stack web applications with React, Node.js, and MongoDB.",
  },
  {
    title: "DSA & Problem Solving",
    href: "/courses/dsa-and-problem-solving",
    description:
      "Master data structures and algorithms to solve coding problems.",
  },
  {
    title: "Frontend Development",
    href: "/courses/frontend-development",
    description: "Learn to build modern web applications with React.",
  },
  {
    title: "Backend Development",
    href: "/courses/backend-development",
    description: "Learn to build scalable backend applications with Node.js.",
  },
  {
    title: "System Design",
    href: "/courses/system-design",
    description:
      "Learn to design scalable systems and prepare for system design interviews.",
  },
  {
    title: "React",
    href: "/courses/react",
    description: "Learn to build modern web applications with React.",
  },
  {
    title: "Node.js",
    href: "/courses/nodejs",
    description: "Learn to build scalable backend applications with Node.js.",
  },
  {
    title: "DevOps",
    href: "/courses/devops",
    description:
      "Learn to deploy and manage applications with DevOps practices.",
  },
  {
    title: "Machine Learning",
    href: "/courses/machine-learning",
    description:
      "Learn to build and deploy machine learning models with Python.",
  },
  {
    title: "Competitive Programming",
    href: "/courses/competitive-programming",
    description:
      "Prepare for coding interviews and competitive programming contests.",
  },
  {
    title: "Interview Preparation",
    href: "/courses/interview-preparation",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "Python",
    href: "/courses/python",
    description:
      "Learn to build and deploy machine learning models with Python.",
  },
  {
    title: "Java",
    href: "/courses/java",
    description:
      "Prepare for coding interviews and competitive programming contests.",
  },
  {
    title: "C++",
    href: "/courses/c++",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "JavaScript",
    href: "/courses/javascript",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "Data Science",
    href: "/courses/data-science",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "Android Development",
    href: "/courses/android-development",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "iOS Development",
    href: "/courses/ios-development",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "Flutter",
    href: "/courses/flutter",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "Blockchain",
    href: "/courses/blockchain",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
  {
    title: "Cyber Security",
    href: "/courses/cyber-security",
    description:
      "Prepare for technical interviews with coding problems and mock interviews.",
  },
];

const study: { title: string; href: string }[] = [
  {
    title: "DSA & Problem Solving",
    href: "/dsa-and-problem-solving",
  },
  {
    title: "System Design",
    href: "/system-design",
  },
  {
    title: "React",
    href: "/react",
  },
  {
    title: "Node.js",
    href: "/nodejs",
  },
  {
    title: "DevOps",
    href: "/devops",
  },
  {
    title: "Machine Learning",
    href: "/machine-learning",
  },
  {
    title: "Competitive Programming",
    href: "/competitive-programming",
  },
  {
    title: "Interview Preparation",
    href: "/interview-preparation",
  },
  {
    title: "Python",
    href: "/python",
  },
  {
    title: "Java",
    href: "/java",
  },
  {
    title: "C++",
    href: "/c++",
  },
  {
    title: "JavaScript",
    href: "/javascript",
  },
  {
    title: "Data Science",
    href: "/data-science",
  },
  {
    title: "Android Development",
    href: "/android-development",
  },
  {
    title: "iOS Development",
    href: "/ios-development",
  },
  {
    title: "Flutter",
    href: "/flutter",
  },
  {
    title: "Blockchain",
    href: "/blockchain",
  },
  {
    title: "Cyber Security",
    href: "/cyber-security",
  },
  {
    title: "AWS",
    href: "/aws",
  },
  {
    title: "CI/CD with Jenkins",
    href: "/ci-cd-with-jenkins",
  },
  {
    title: "CI/CD with GitHub Actions",
    href: "/ci-cd-with-github-actions",
  },
  {
    title: "Full Stack Web Development",
    href: "/full-stack-web-development",
  },
  {
    title: "Frontend Development",
    href: "/frontend-development",
  },
  {
    title: "Backend Development",
    href: "/backend-development",
  },
  {
    title: "DevOps",
    href: "/devops",
  },
  {
    title: "Machine Learning",
    href: "/machine-learning",
  },
  {
    title: "Competitive Programming",
    href: "/competitive-programming",
  },
  {
    title: "Interview Preparation",
    href: "/interview-preparation",
  },
  {
    title: "Python",
    href: "/python",
  },
  {
    title: "Java",
    href: "/java",
  },
  {
    title: "C++",
    href: "/c++",
  },
  {
    title: "JavaScript",
    href: "/javascript",
  },
  {
    title: "Data Science",
    href: "/data-science",
  },
  {
    title: "Android Development",
    href: "/android-development",
  },
  {
    title: "iOS Development",
    href: "/ios-development",
  },
  {
    title: "Flutter",
    href: "/flutter",
  },
  {
    title: "Blockchain",
    href: "/blockchain",
  },
  {
    title: "Cyber Security",
    href: "/cyber-security",
  },
  {
    title: "TypeScript",
    href: "/typescript",
  },
  {
    title: "Rust",
    href: "/rust",
  },
  {
    title: "Kotlin",
    href: "/kotlin",
  },
  {
    title: "Go",
    href: "/go",
  },
  {
    title: "Django",
    href: "/django",
  },
  {
    title: "React Native",
    href: "/react-native",
  },
];

const interviews: { title: string; href: string; description: string }[] = [
  {
    title: "Mock Interview",
    href: "/mock-interview",
    description: "Prepare for technical interviews with mock interviews.",
  },
  {
    title: "Interview Questions",
    href: "/interview-questions",
    description: "Prepare for technical interviews with coding problems.",
  },
];

// type subdomains = "blogs" | "jobs" | "interviews" | "study" | "playground";

const domain = "serverless.com";
const user = true;

// Courses, Docs, Jobs, Practice, Mock Interview, Blog, Community
const Header = () => {
  return (
    <header className="z-50 sticky top-0 bg-white dark:bg-zinc-950 dark:text-white flex items-center px-6 py-2">
      <h3 className="text-xl font-sans uppercase font-bold flex gap-2 items-center mr-auto">
        {/* <Image src="/katana.svg" width={30} height={30} alt="logo" /> */}
        Code Warriors
      </h3>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent className="overflow-auto max-h-lvh">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[800px]">
                {courses.map((course) => (
                  <ListItem
                    key={course.href}
                    title={course.title}
                    href={course.href}
                  >
                    {course.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Study</NavigationMenuTrigger>
            <NavigationMenuContent className="overflow-auto max-h-lvh">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-5 lg:w-[800px] ">
                {study.map((i) => (
                  <Link
                    className="hover:bg-zinc-100 hover:dark:bg-zinc-900 p-4 flex justify-center  items-center text-center rounded-md"
                    key={`https://study.${domain}${i.href}`}
                    target="blank"
                    href={`https://study.${domain}${i.href}`}
                  >
                    {i.title}
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
            <NavigationMenuContent className="overflow-auto max-h-lvh">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[800px]">
                {practices.map((practice) => (
                  <ListItem
                    key={`https://playground.${domain}${practice.href}`}
                    title={practice.title}
                    href={`https://playground.${domain}${practice.href}`}
                  >
                    {practice.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Interview Prep</NavigationMenuTrigger>
            <NavigationMenuContent className="overflow-auto max-h-lvh">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2  lg:w-[800px]">
                {interviews.map((interview) => (
                  <ListItem
                    key={`https://interviews.${domain}${interview.href}`}
                    title={interview.title}
                    href={`https://interviews.${domain}${interview.href}`}
                  >
                    {interview.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              target="blank"
              href={`https://jobs.${domain}`}
              className={navigationMenuTriggerStyle()}
            >
              Jobs
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              target="blank"
              href={`https://blogs.${domain}`}
              className={navigationMenuTriggerStyle()}
            >
              Blogs
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              target="blank"
              href={`https://youtube.com/6packprogrammer`}
              className={navigationMenuTriggerStyle()}
            >
              Community
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mx-2 ml-auto ">
        <SearchForm />
      </div>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="mx-2">
            <UserIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-20">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <Link className="gap-2 flex items-center  " href="/dashboard">
              <DropdownMenuItem className="w-full cursor-pointer">
                <LucideLayoutDashboard size={"1rem"} />
                Dashboard
              </DropdownMenuItem>
            </Link>

            <Link className="gap-2 flex items-center" href="/projects">
              <DropdownMenuItem className="w-full cursor-pointer">
                <LucideFileStack size={"1rem"} />
                My Projects
              </DropdownMenuItem>
            </Link>

            <Link className="gap-2 flex items-center" href="/profile">
              <DropdownMenuItem className="w-full cursor-pointer">
                <LucideUserCircle size={"1rem"} />
                Profile
              </DropdownMenuItem>
            </Link>

            <Link className="gap-2 flex items-center" href={"/settings"}>
              <DropdownMenuItem className="w-full cursor-pointer">
                <Settings size={"1rem"} /> Settings
              </DropdownMenuItem>
            </Link>

            <DropdownMenuItem className="w-full cursor-pointer">
              <form
                action={async () => {
                  "use server";
                  console.log("signing out");
                  redirect("/login");
                }}
              >
                <button type="submit" className="gap-2 flex items-center">
                  <LogOut size={"1rem"} /> Logout
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link className="mx-2" href="/login">
          Login
        </Link>
      )}

      <ThemeToggleButton />
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
