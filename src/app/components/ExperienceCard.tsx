interface ExperienceCardProps {
  logo: string;
  role: string;
  company: string;
  date: string;
  points: string[];
  techs: string[];
}

export default function ExperienceCard({
  logo,
  role,
  company,
  date,
  points,
  techs,
}: ExperienceCardProps) {
  return (
    <div className="bg-gray-200 w-full sm:w-4/5 md:w-3/5 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md gap-4 transition duration-300 hover:scale-110">
      {/* Left Section */}
      <div className="flex gap-3 sm:gap-4">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg"
        />
        <div>
          <h3 className="text-gray-600 text-base sm:text-lg font-semibold">
            {role}
          </h3>
          <p className="text-red-700 font-medium text-sm sm:text-base">
            {company}
          </p>
          <ul className="mt-2 text-gray-600 text-xs sm:text-sm list-disc list-inside space-y-1">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-3">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 sm:px-3 bg-gray-700 text-gray-200 text-[10px] sm:text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-3 md:mt-0">
        <p className="text-gray-600 text-xs sm:text-sm">{date}</p>
      </div>
    </div>
  );
}
