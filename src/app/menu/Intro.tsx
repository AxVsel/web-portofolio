import { MapPin } from "lucide-react";
import ButtonMessage from "../components/ButtonMessage";

export default function Intro() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-50 gap-8  p-8">
        <div
          className="w-full max-w-[360px] sm:max-w-[360px] h-auto rounded-sm 
  shadow-xl shadow-red-500/40 
  hover:shadow-2xl hover:shadow-blue-500/60 transition duration-300 hover:scale-110"
        >
          <img
            src="/me.jpg"
            alt="me"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        <div className="ml-0 sm:ml-4 max-w-full sm:max-w-2xl space-y-6 ">
          {/* Nama */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-600 leading-tight text-center md:text-justify">
            Hi, I'm <span className="text-red-600">Yaumil Aksah</span> 👋
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl font-semibold text-gray-600 text-center md:text-justify mt-2">
            Junior Full-Stack Developer
          </p>

          {/* Deskripsi */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center md:text-justify mt-4">
            I am a Junior Full-Stack Web Developer passionate about building web
            applications from the ground up to production. I enjoy learning new
            technologies and focus on creating end-to-end solutions, from
            frontend to backend. With a strong eagerness to learn and grow, I am
            committed to continuously improving my skills in designing,
            developing, and maintaining applications to keep them relevant and
            impactful.
          </p>

          {/* Lokasi */}
          <p className="flex items-center text-base sm:text-lg md:text-xl text-gray-600">
            <MapPin className="w-6 h-6 mr-2 text-red-600" />
            Central Sulawesi, Poso Regency, Indonesia
          </p>
          <div className="flex gap-4 mt-1">
            <a
              href="https://github.com/AxVsel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img
                src="/githubAnimated.webp"
                alt="Email"
                className="h-15 w-15"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yaumil-aksah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img
                src="/linkedidAnimated.webp"
                alt="Email"
                className="h-15 w-15"
              />
            </a>{" "}
            <a
              href="https://instagram.com/yaumil_aksah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img
                src="/intagramAnimated.webp"
                alt="Email"
                className="h-15 w-15"
              />
            </a>
          </div>
          <ButtonMessage />
        </div>
      </div>
    </>
  );
}
