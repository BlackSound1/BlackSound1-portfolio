import { ReactElement } from "react";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import CommitTracker from "@/components/ui/CommitTracker";
import ViewCounter from "@/components/ui/ViewCounter";

/**
 * Define and display a global footer.
 * @returns The Footer.
 */
export default function Footer(): ReactElement {
  return (
    <Card
      id="footer"
      className="bg-mantle hover:border-accent focus-visible:border-accent group h-full flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none"
      data-testid="footer"
    >
      <CardContent>
        <CardDescription>
          <div className="text-muted-foreground font-semibold flex h-auto flex-col items-center justify-center text-sm md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
              <span className="hover:text-accent transition-colors duration-200" data-testid="copyright notice">
                &copy;2026 BlackSound1
              </span>
              <span className="hidden md:inline"></span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end mt-3 md:mt-0">
              <ViewCounter />
              <span className="hidden md:inline"></span>
              <CommitTracker />
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
