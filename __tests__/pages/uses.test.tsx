import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Uses from "@/app/uses/page";

describe("Uses", () => {
  it("should render the Uses page", async () => {
    render(<Uses />);

    // Test section was rendered
    const section = await screen.findByTestId("uses-section");
    expect(section).toBeInTheDocument();

    // Test the paragraph
    const p = await screen.findByRole("paragraph");
    expect(p.textContent).toBe("This page details all the important tools and technologies I use");

    // Test the social links
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

    // Test we have all the headings
    const headings = await screen.findAllByRole("heading");
    expect(headings.length).toStrictEqual(6);

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

    // Ensure our list cards are populated
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
