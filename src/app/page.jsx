// components
import Container from "@/components/Container";
import Title from "@/components/Title";

// the main conent
import HeroMainContent from "./partials/Hero/MainContent";
import ProjectsMainContent from "./partials/Projects/MainContent";
import AboutMainContent from "./partials/About/MainContent";
import Services from "./partials/About/Services";
import Contact from "./partials/Contact/MainContent";

export default function Home({projects}) {
  return (
    <>
      {/* hero section */}
      <Container id="home" className="section flex flex-col items-center h-screen w-full relative md:mt-16 scroll-mt-32">
        <HeroMainContent />
      </Container>

      {/* about section */}
      <Container id="about" className="section max-w-3xl md:mt-[200px] border-dashed-y lg:border-x border-accent/20 border-dashed 2xl:px-20 scroll-mt-32">
        <AboutMainContent />
      </Container>

      <Container className="flex mt-8 max-w-3xl justify-center border-b pb-12 border-dashed border-accent/20 relative border-dashed-x w-[90%] md:w-full">
        <Services />
      </Container>

      {/* Projects section */}
      <Container id="projects" className={"section mt-[200px] scroll-mt-32"}>
        <Title content="Projects" className="text-center " />
        <ProjectsMainContent />
      </Container>

      {/* Contact Section */}
      <Container id="contact" className={"section mt-[200px] scroll-mt-32"}>
        <Title content="Contact" className="text-center " />

        <div className="w-full flex justify-center px-2 sm:p-0 mt-8">
          <Contact/>
        </div>
      </Container>
    </>
  );
}
