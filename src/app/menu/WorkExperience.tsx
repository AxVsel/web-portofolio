import ExperienceCard from "../components/ExperienceCard";

export default function WorkExperience() {
  return (
    <>
      <div id="experience" className="mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-600 leading-tight text-center">
          Work Experience
        </h1>
      </div>
      <div className="p-6 bg-white  flex justify-center items-center">
        <ExperienceCard
          logo="/dumbways.png"
          role="Talent Full Stack Web Developer"
          company="Dumbways Indonesia"
          date="Nov 2024 - Sep 2025"
          points={[
            "Building scalable web applications using react",
            "Next.js",
            "Node.js and Express.js",
            "Writing clean maintainable efficient code in Javascript and Typescript",
            "Collaborating in team projects code reviews and workflows",
            "Solving real-world case studies to sharpen problem-solving skills",
            "Preparing for technical interviews and industry-level assessments",
          ]}
          techs={[
            "Node.js",
            "Express.js",
            "PostgreSql",
            "React.js",
            "Next.js",
            "Typescript",
            "Javascript",
          ]}
        />
      </div>{" "}
      <div className="p-6 bg-white  flex justify-center items-center">
        <ExperienceCard
          logo="/campuslogo.jpg"
          role=" Bachelor of Informatics Engineering"
          company="University Amikom of Yogyakarta"
          date="May 2024 - Aug 2024"
          points={[
            "IMPLEMENTATION OF THE YOLO ALGORITHM ON LETTERS OF THE INDONESIAN SIGN LANGUAGE SYSTEM (SIBI), (Thesis)",
            "Designed an object detection system for Indonesian Sign Language (SIBI).",
            "Utilized Roboflow for dataset annotation and labeling.",
            "Trained the dataset using Google Colab with GPU acceleration.",
            "Monitored and analyzed training results using CometML.",
            "Deployed and tested the trained model on Android devices.",
          ]}
          techs={[
            "Python",
            "Java",
            "Android Studio",
            "Roboflow",
            "PyTorch",
            "CometML",
            "YOLOv5",
            "Google Colaboratory",
          ]}
        />
      </div>
      <div className="p-6 bg-white  flex justify-center items-center">
        <ExperienceCard
          logo="/company1.jpg"
          role="Internship Computer Technician"
          company="DigiParts"
          date="Jan 2019 - Mar 2019"
          points={[
            " Perform routine maintenance and repair for computers and laptops",
            "Diagnose and troubleshoot hardware and software issues",
            "Install and configure operating systems, drivers, and applications",
            "Provide data backup, recovery, and system optimization",
            "Ensure devices run efficiently and securely for end users",
          ]}
          techs={[
            "Windows OS",
            "Linux",
            "Hardware Repair",
            "Software Troubleshooting",
            "Networking",
            "Data Recovery",
            "Microsoft Office",
            "Printer Setup",
          ]}
        />
      </div>
    </>
  );
}
