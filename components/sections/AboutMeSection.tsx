import { ReactElement } from "react";

import SocialLinksSection from "./SocialLinksSection";

/**
 * The About Me section.
 * @returns The About Me section.
 */
export default function AboutMeSection(): ReactElement {
  return (
    <section id="about-me-section" className="space-y-5">
      <p className="max-w-prose text-lg leading-relaxed">
        I am a developer from Montréal who wants to use technology to improve the world. I have been coding in Python
        for 17 years and have full-stack experience with multiple languages and frameworks. Before getting into tech, I
        worked in the entertainment industry. I also made some of my own music.
        <br />
        <br />
        This site is a <span className="text-accent">work in progress</span>. No vibe coding!
      </p>
      <SocialLinksSection />
    </section>
  );
}
