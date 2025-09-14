import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiNodedotjs,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org/id",
  },
  {
    node: <SiExpress />,
    title: "Express",
    href: "https://expressjs.com/",
  },
  {
    node: <SiPostgresql />,
    title: "Postgresql",
    href: "https://www.postgresql.org/",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
    href: "https://www.prisma.io/",
  },
  {
    node: <SiSupabase />,
    title: "Supabase",
    href: "https://supabase.com/",
  },
  {
    node: <SiJavascript />,
    title: "Javascript",
    href: "https://www.javascripttutorial.net/",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function TechStack() {
  return (
    <>
      {" "}
      <div id="TechStack" className="h-50 mt-20 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 leading-tight text-center md:text-left">
            Tech Stack - Tools I Use Everyday
          </h1>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col justify-center items-center mt-2 ">
          <div
            className="w-full sm:w-4/5 md:w-3/5 mx-auto"
            style={{
              height: "250px", // default untuk HP
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={50} // lebih kecil di HP
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </>
  );
}
