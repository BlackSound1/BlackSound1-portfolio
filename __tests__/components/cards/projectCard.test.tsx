import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProjectCard from "@/components/cards/projectCard";
import { AccentProvider } from "@/context/AccentContext";
import { ThemeProvider } from "@/context/ThemeContext";

describe("Project Card", () => {
  beforeEach(() =>
    render(
      <ThemeProvider>
        <AccentProvider>
          <ProjectCard
            name="test"
            alt="test"
            description="test"
            link="www.google.ca"
            technologies={["test"]}
            imagePath="test"
            key="test"
          />
        </AccentProvider>
      </ThemeProvider>,
    ),
  );

  it("should render the card", async () => {
    const card = await screen.findByTestId("project card");
    expect(card).toBeInTheDocument();
  });

  it("should render the project card link", async () => {
    const links = await screen.findAllByRole("link");
    expect(links.length).toStrictEqual(1);
    expect(links[0]).toHaveAttribute("href", "www.google.ca");
  });

  it("should render the project card title", async () => {
    const title = await screen.findByTestId("project card title");
    expect(title.textContent).toBe("test");
  });

  it("should render only 1 project card image", async () => {
    const images = await screen.findAllByRole("img");
    expect(images.length).toStrictEqual(1);

    const image = await screen.findByTestId("project card image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "test");
    expect(image).toHaveAttribute("src", "test");
  });

  it("should render the project card tags", async () => {
    const tags = await screen.findAllByTestId("tag");
    expect(tags.length).toBeGreaterThan(0);
    expect(tags[0].textContent).toBe("test");
  });

  it("should render the project card description", async () => {
    const desc = await screen.findByTestId("project card description");
    expect(desc.textContent).toBe("test");
  });

  it("should render the project card tag SVG", async () => {
    const svg = await screen.findByTestId("project card svg");
    expect(svg).toBeInTheDocument();
  });
});
