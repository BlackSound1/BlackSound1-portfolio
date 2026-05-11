import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import WorkCard from "@/components/cards/workCard";
import { AccentProvider } from "@/context/AccentContext";
import { ThemeProvider } from "@/context/ThemeContext";

describe("Work Card", () => {
  beforeEach(() =>
    render(
      <ThemeProvider>
        <AccentProvider>
          <WorkCard
            company="test"
            description={<>test</>}
            technologies={["test"]}
            time="now"
            title="test"
            url="www.google.ca"
            key="test"
          />
        </AccentProvider>
      </ThemeProvider>,
    ),
  );

  it("should render the card", async () => {
    const card = await screen.findByTestId("work card");
    expect(card).toBeInTheDocument();
  });

  it("should render the work card link", async () => {
    const links = await screen.findAllByRole("link");
    expect(links.length).toStrictEqual(1);
    expect(links[0]).toHaveAttribute("href", "www.google.ca");
  });

  it("should render the work card title", async () => {
    const title = await screen.findByTestId("work card title");
    expect(title.textContent).toBe("test");
  });

  it("should render the work card company", async () => {
    const company = await screen.findByTestId("work card company");
    expect(company.textContent).toBe("test");
  });

  it("should render the work card tags", async () => {
    const tags = await screen.findAllByTestId("tag");
    expect(tags.length).toBeGreaterThan(0);
    expect(tags[0].textContent).toBe("test");
  });

  it("should render the work card description", async () => {
    const desc = await screen.findByTestId("work card description");
    expect(desc.textContent).toBe("test");
  });

  it("should render the work card tag SVG", async () => {
    const svg = await screen.findByTestId("work card svg");
    expect(svg).toBeInTheDocument();
  });

  it("should render the work card time", async () => {
    const time = await screen.findByTestId("work card time");
    expect(time).toBeInTheDocument();
    expect(time.textContent).toBe("now");
  });
});
