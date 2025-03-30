// import logo from "./logo.svg";
import AboutMe from "../components/aboutMe/AboutMe";
import FirstSection from "../components/first/FirstSection";

import { RenderProjects } from "../components";
import Quotes from "../components/quotes/Quotes";
import Skills from "../components/skills/Skills";
import Contacts from "../components/contacts/Contacts";

function Home() {
  return (
    <div className="App">
      <FirstSection />
      <Quotes />
      <RenderProjects />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}

export default Home;
