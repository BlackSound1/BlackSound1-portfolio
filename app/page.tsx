import posthog from "posthog-js";

import AboutMeSection from "@/components/sections/AboutMeSection";
import FunSection from "@/components/sections/FunSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import WorkSection from "@/components/sections/WorkSection";
import Break from "@/components/ui/break";
import Heading from "@/components/ui/Heading";

export default function Home() {
  posthog.capture("$pageview", { page: "homepage" });

  return (
    <div>
      <Heading level={1} text="BlackSound1" />

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
