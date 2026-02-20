import posthog from 'posthog-js';

import SocialLinksSection from '@/components/sections/SocialLinksSection';
import PDF_Viewer from '@/components/ui/PDFViewer';

export default function Research() {
  posthog.capture('$pageview', { page: 'research' });
  return (
    <section id="research-section" className="space-y-5">
      <p className="max-w-prose text-lg leading-relaxed">This page details my original academic research.</p>
      <SocialLinksSection />
      <p>
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
