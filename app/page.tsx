import posthog from "posthog-js";

import AboutMeSection from "@/components/sections/AboutMeSection";
import FunSection from "@/components/sections/FunSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import WorkSection from "@/components/sections/WorkSection";
import Break from "@/components/ui/break";

export default function Home() {
  posthog.capture("$pageview", { page: "homepage" });

  return (
    <div>
      <AboutMeSection />

      <Break />

      <WorkSection />

      <Break />

      <ProjectSection />

      <Break />

      <FunSection />
    </div>
  );
}
