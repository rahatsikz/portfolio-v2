import { Toaster } from "react-hot-toast";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/skills/skills";
import data from "../data.json";

const Home = () => {
  const {
    heroData,
    aboutData,
    experienceData,
    // portfolioData,
    serviceData,
    // blogData,
    // sliderData,
    contactData,
    // footerData,
  } = data;
  return (
    <>
      <main className='wrapper'>
        <Hero data={heroData} />
        <About data={aboutData} />
        <Experience data={experienceData} />
        <Skills />
        <Projects data={serviceData} />
        <Contact data={contactData} />
        <Toaster />
      </main>
    </>
  );
};

export default Home;
