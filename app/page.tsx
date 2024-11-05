import { Nav } from "@/components/nav";
import { HeroParallax } from "@/components/hero";
import Technologies from "@/components/technologies";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroParallax />
      <Technologies />
      <Experience />
      <Projects />
    </>
  );
}
