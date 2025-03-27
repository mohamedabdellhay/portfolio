// import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import FirstSection from "./components/first/FirstSection";
import Header from "./components/header/Header";
import Media from "./components/media/Media";
import Projects from "./components/projects/Projects";
import Quotes from "./components/quotes/Quotes";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Media />
      <Header />
      <FirstSection />
      <Quotes />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />

      <Footer />
    </div>
  );
}

export default App;
