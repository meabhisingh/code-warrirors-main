import { Separator } from "../ui/separator";

const domain = "sample.com";
// type subdomainsType = "blogs" | "jobs" | "interview" | "study" | "playground";

const solutionsData = [
  {
    title: "Study Material",
    link: `study.${domain}`,
  },
  {
    title: "Playground",
    link: `playground.${domain}`,
  },
  {
    title: "Interview Preparation",
    link: `interview.${domain}`,
  },

  {
    title: "Community",
    link: `community.${domain}`,
  },
  {
    title: "Career",
    link: `jobs.${domain}`,
  },

  {
    title: "Blogs",
    link: `blogs.${domain}`,
  },
];

const socials = [
  {
    title: "Twitter",
    link: "https://twitter.com/",
  },
  {
    title: "Facebook",
    link: "https://facebook.com/",
  },
  {
    title: "Instagram",
    link: "https://instagram.com/",
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/",
  },
];

const company = [
  {
    title: "About Us",
    link: `${domain}/about`,
  },
  {
    title: "Contact Us",
    link: `${domain}/contact`,
  },
  {
    title: "Privacy Policy",
    link: `${domain}/privacy`,
  },
  {
    title: "Terms & Conditions",
    link: `${domain}/terms`,
  },
];

const support = [
  {
    title: "FAQs",
    link: `${domain}/faqs`,
  },
  {
    title: "Help",
    link: `${domain}/help`,
  },
  {
    title: "Support",
    link: `${domain}/support`,
  },
];

const Footer = () => {
  return (
    <footer className=" p-8 text-black dark:textw bg-white dark:bg-zinc-900 dark:text-white ">
      <main className=" md:flex  gap-16 justify-center ">
        <div>
          <h3 className=" text-center text-8xl" data-firebolt-zoom>
            CW
          </h3>
        </div>
        <div className="grid  justify-items-center md:grid-cols-4 w-full max-w-screen-lg">
          <FooterColumn heading="Solutions" data={solutionsData} />
          <FooterColumn heading="Social" data={socials} />
          <FooterColumn heading="Company" data={company} />
          <FooterColumn heading="Support" data={support} />
        </div>
      </main>

      <Separator className="max-w-screen-lg m-auto mt-8 mb-6" />

      <p className="text-muted-foreground text-center">
        © Code Warriors 2025 Company. All rights reserved.
      </p>
    </footer>
  );
};

const FooterColumn = ({
  data,
  heading,
}: {
  heading: string;
  data: { title: string; link: string }[];
}) => (
  <div className=" flex flex-col items-center  text-center md:items-stretch md:text-left">
    <h1 className="text-lg my-2 uppercase font-roboto-mono font-semibold">
      {heading}
    </h1>
    <div className="flex flex-col gap-1 ">
      {data.map((i) => (
        <a
          className="font-ubuntu font-light text-muted-foreground "
          key={i.title}
          href={`https://${i.link}`}
          data-firebolt-zoom
        >
          {i.title}
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
