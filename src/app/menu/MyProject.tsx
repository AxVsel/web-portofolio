import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    image: "/circleProject.jpg",
    title: "Circle",
    description:
      "Circle is a social platform that makes it easy to connect and share experiences effortlessly.",
    techStack: ["React", "TypeScript", "Tailwind", "Express", "Redux", "Redis"],
    repositoryType: "Private Repository",
  },
  {
    image: "/FutsalGo.png",
    title: "Futsal Go",
    description: "A Web-Based Application for Online Futsal Field Booking",
    techStack: ["React", "TypeScript", "Tailwind", "Express", "Redux"],
    repositoryType: "Private Repository",
  },
  {
    image: "/ShareNote.png",
    title: "Share Note",
    description:
      "A web-based application that allows users to easily and conveniently share notes.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "Express",
      "Supabase",
      "useContext",
    ],
    repositoryType: "Private Repository",
  },
  {
    image: "/chatFilm.png",
    title: "Chatfilm",
    description:
      "A web-based application integrated with AI, allowing users to chat about movies.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "Google Ai Studio",
    ],
    repositoryType: "Private Repository",
    demoLink: "#",
  },
];

export default function MyProject() {
  return (
    <>
      <div
        id="MyProject"
        className="flex flex-col justify-center items-center mt-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 leading-tight text-center md:text-left">
          My Project
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-full sm:w-4/5 md:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 p-4 justify-items-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
