import Header from "./header/Header";
import Intro from "./menu/Intro";
import TechStack from "./menu/TechStack";
import WorkExperience from "./menu/WorkExperience";
import MyProject from "./menu/MyProject";
import Education from "./menu/Education";
import LetsBuild from "./menu/LetsBuild.";
import Footer from "./header/Footrer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-red-500 selection:text-white transition-colors duration-300">
      <Header />
      <Intro />
      <TechStack />
      <WorkExperience />
      <MyProject />
      <Education />
      <LetsBuild />
      <Footer />
    </main>
  );
}
