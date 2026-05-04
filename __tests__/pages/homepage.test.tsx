import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";
import { AccentProvider } from "@/context/AccentContext";
import { ThemeProvider } from "@/context/ThemeContext";

describe("Home", () => {
  beforeEach(() => {
    render(
      <AccentProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </AccentProvider>,
    );
  });

  it("should render all the sections", async () => {
    const aboutMe = await screen.findByTestId("about-me-section");
    expect(aboutMe).toBeInTheDocument();

    const work = await screen.findByTestId("work-section");
    expect(work).toBeInTheDocument();

    const projects = await screen.findByTestId("projects-section");
    expect(projects).toBeInTheDocument();

    const fun = await screen.findByTestId("fun-section");
    expect(fun).toBeInTheDocument();
  });

  it("renders the links", async () => {
    const links = await screen.findAllByRole("link");
    expect(links.length).toBeGreaterThan(2);

    // Social links
    const gh = links.find((l) => l.ariaLabel === "GitHub");
    expect(gh).toBeInTheDocument();
    const li = links.find((l) => l.ariaLabel === "LinkedIn");
    expect(li).toBeInTheDocument();

    // Company links
    const tecsys = links.find((l) => l.ariaLabel === "Tecsys");
    expect(tecsys).toBeInTheDocument();
    const verbit = links.find((l) => l.ariaLabel === "Verbit");
    expect(verbit).toBeInTheDocument();

    // Project links
    const allProjects = await screen.findAllByTestId("project link");
    expect(allProjects.length).toBeGreaterThan(1);
  });

  it("renders the headings", async () => {
    const allHeadings = await screen.findAllByRole("heading");
    expect(allHeadings.length).toBeGreaterThan(1);

    const headings = [
      "Work Experience",
      "Some Projects",
      "Fun Stuff",
      "Theme Selector",
      "Accent Color Picker",
      "Some of My Music",
    ];

    headings.forEach((requiredHeading) => {
      expect(allHeadings.some((heading) => heading.textContent === requiredHeading)).toBeTruthy();
    });
  });

  it("should render the main paragraph", async () => {
    const mainPara = await screen.findByTestId("about me paragraph");
    expect(mainPara).toHaveTextContent("I am a developer");
  });
});
