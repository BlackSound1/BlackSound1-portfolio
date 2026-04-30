import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Link from "next/link";

import Heading from "@/components/ui/Heading";
import { AccentProvider } from "@/context/AccentContext";
import { ThemeProvider } from "@/context/ThemeContext";

/**
 * A mock `ReactNode` to pretend the `RootLayout` is rendering with
 * @returns Blank HTML
 */
function MockReactNode() {
  return <></>;
}

/**
 * Create a fake RootLayout to test the main `<h1>` element
 * @param children The children
 * @returns the fake RootLayout
 */
function LayoutTestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AccentProvider>
      <ThemeProvider>
        <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
          <main className="flex-1 px-0 pb-8 md:px-5">
            <div className="mx-auto max-w-6xl space-y-12 px-0 md:space-y-16 md:px-4">
              <Link href="/">
                <Heading level={1} text="BlackSound1" />
              </Link>
              {children}
            </div>
          </main>
        </div>
      </ThemeProvider>
    </AccentProvider>
  );
}

describe("Root Layout", () => {
  it("should render the root layout", async () => {
    render(
      <LayoutTestWrapper>
        <MockReactNode />
      </LayoutTestWrapper>,
    );

    const h1 = await screen.findByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();

    const links = await screen.findAllByRole("link");
    expect(links.length).toStrictEqual(1);

    const link = links.find((link) => link.getAttribute("href") == "/");
    expect(link).toBeInTheDocument();
  });
});
