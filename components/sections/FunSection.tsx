import { ReactElement } from "react";

import MusicSection from "@/components/sections/MusicSection";
import ThemeSection from "@/components/sections/ThemeSection";
import Heading from "@/components/ui/Heading";

import ColorPickerSection from "./ColorPickerSection";

/**
 * A section containing the non-professional aspects of the site.
 * @returns {ReactElement} A section containing the non-professional aspects of the site.
 */
export default function FunSection(): ReactElement {
  return (
    <section id="fun-section" className="px-4 md:px-0">
      <div className="mb-8">
        <Heading level={2} text="Fun Stuff" />
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
        {/* Themes */}
        <ThemeSection />

        {/* Color Picker */}
        <ColorPickerSection />
      </div>

      {/* Music */}
      <MusicSection />
    </section>
  );
}
