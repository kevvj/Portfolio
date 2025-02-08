import Hero from "./Hero";
import Section from "./Section";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import FLProyects from "./FLProyects";





export default function Home() {
  return (
    <div className="container">
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <FLProyects></FLProyects>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
}
