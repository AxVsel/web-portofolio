interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  repositoryType: string;
  demoLink?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  techStack,
  repositoryType,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="w-full rounded-xl shadow-lg bg-gray-200 overflow-hidden  transition duration-300 hover:scale-110">
      {/* Bagian gambar */}
      <div className="bg-gray-200 h-40 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Bagian isi */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md bg-slate-700 text-slate-200 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-slate-400">
          <span className="text-gray-600">{repositoryType}</span>
          {demoLink && (
            <a href={demoLink} className="text-blue-400 hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
