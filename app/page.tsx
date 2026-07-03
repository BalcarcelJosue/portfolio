import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import BuildLog from "@/components/BuildLog";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <BuildLog />
      <Experience />
      <About />
      <Footer />
    </>
  );
}
