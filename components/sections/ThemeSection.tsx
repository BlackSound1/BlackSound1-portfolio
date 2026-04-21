"use client";

import { ReactElement } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/ui/Heading";
import ThemeDropdown from "@/components/ui/ThemeDropdown";
import VariantDropdown from "@/components/ui/VariantDropdown";

export default function ThemeSection(): ReactElement {
  return (
    <section id="theme-section" className="px-4">
      <div className="mb-8">
        <Heading level={3} text="Theme Selector" />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors duration-200 shadow-lg hover:shadow-xl">
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <span>
                <div className="font-semibold">Choose a theme</div>
                <ThemeDropdown />
              </span>
              <span className="lg:mt-6">
                <div className="font-semibold">Choose a variant</div>
                <VariantDropdown />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
