import Experience from "@/components/experience";
import { HeroParallax } from "@/components/hero/hero";
import { Nav } from "@/components/nav";
import Projects from "@/components/projects";
import Tech from "@/components/technologies";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroParallax />
      <Tech />
      <Experience />
      <Projects />
    </>
  );
}
