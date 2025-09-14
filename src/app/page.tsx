import Intro from "./menu/Intro";
import TechStack from "./menu/TechStack";
import WorkExperience from "./menu/WorkExperience";
import MyProject from "./menu/MyProject";
import Header from "./header/Header";
import LetsBuild from "./menu/LetsBuild.";
import Footer from "./header/Footrer";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Header />
          <Intro />
          <TechStack />
          <WorkExperience />
          <MyProject />
          <LetsBuild />
          <Footer />
        </div>
      </div>
    </>
  );
}
