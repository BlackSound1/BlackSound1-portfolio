import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Uses from "@/app/uses/page";

describe("Uses", () => {
  beforeEach(() => render(<Uses />));

  it("should render the Uses section", async () => {
    const section = await screen.findByTestId("uses-section");
    expect(section).toBeInTheDocument();
  });

  it("should test the paragraph", async () => {
    const p = await screen.findByRole("paragraph");
    expect(p.textContent).toBe("This page details all the important tools and technologies I use");
  });

  it("should render the social links", async () => {
    const links = await screen.findAllByRole("link");
    expect(links.length).toStrictEqual(2);

    const gh = links.find((link) => link.ariaLabel === "GitHub");
    expect(gh).toBeInTheDocument();
    expect(gh).toHaveAttribute("href", "https://github.com/BlackSound1");
    expect(gh).toHaveAttribute("rel", "noopener noreferrer");
    expect(gh).toHaveAttribute("target", "_blank");
    expect(gh?.textContent).toBe("GitHub");

    const li = links.find((link) => link.ariaLabel === "LinkedIn");
    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute("href", "https://www.linkedin.com/in/ordon/");
    expect(li).toHaveAttribute("rel", "noopener noreferrer");
    expect(li).toHaveAttribute("target", "_blank");
    expect(li?.textContent).toBe("LinkedIn");
  });

  it("should render the headings", async () => {
    const headings = await screen.findAllByRole("heading");
    expect(headings.length).toStrictEqual(7);

    const all_h2 = await screen.findAllByRole("heading", { level: 2 });
    expect(all_h2.length).toStrictEqual(3);

    const all_h3 = await screen.findAllByRole("heading", { level: 3 });
    expect(all_h3.length).toStrictEqual(3);

    const computers = all_h2.find((heading) => heading.ariaLabel === "Computers");
    expect(computers).toBeInTheDocument();

    const software = all_h2.find((heading) => heading.ariaLabel === "Software");
    expect(software).toBeInTheDocument();

    const hardware = all_h2.find((heading) => heading.ariaLabel === "Hardware");
    expect(hardware).toBeInTheDocument();
  });

  it("should ensure the list cards are at least populated", async () => {
    const listProgramming = await screen.findAllByRole("listitem", { name: "list-item-Programming" });
    expect(listProgramming.length).toBeGreaterThan(0);

    const listMusic = await screen.findAllByRole("listitem", { name: "list-item-Music" });
    expect(listMusic.length).toBeGreaterThan(0);

    const listPeripherals = await screen.findAllByRole("listitem", { name: "list-item-Peripherals" });
    expect(listPeripherals.length).toBeGreaterThan(0);

    const listInstruments = await screen.findAllByRole("listitem", { name: "list-item-Instruments" });
    expect(listInstruments.length).toBeGreaterThan(0);
  });
});
