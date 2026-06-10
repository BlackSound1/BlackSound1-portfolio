import posthog from "posthog-js";

import SocialLinksSection from "@/components/sections/SocialLinksSection";
import Break from "@/components/ui/break";
import Heading from "@/components/ui/Heading";
import PDF_Viewer from "@/components/ui/PDFViewer";

export default function Research() {
  posthog.capture("$pageview", { page: "research" });
  return (
    <section id="research-section" data-testid="research-section" className="space-y-5">
      <Heading level={1} text="Research" />

      <p className="max-w-prose text-lg leading-relaxed" aria-label="paragraph-intro">
        This page details my original academic research.
      </p>

      <SocialLinksSection />

      <Break />

      <p aria-label="research-description">
        This is the culmination of the research I did Concordia University&apos;s Sustainability Perspectives
        graduate-level microprogram. It focuses on electronic waste: what it is; where it comes from; where it goes; and
        the environmental, health, and equity concerns inherent to recycling it. I propose an alternative model of
        recycling based on the existing 3R model (reduce, reuse, recycle), that considers these three activities in
        proper proportion.
      </p>

      <PDF_Viewer file="/static/PDFs/ewaste-report.pdf" />
    </section>
  );
}
