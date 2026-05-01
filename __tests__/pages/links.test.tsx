import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Links from "@/app/links/page";

describe("Links", () => {
  it("should render the Links page", async () => {
    render(<Links />);

    // Test section was rendered
    const section = await screen.findByTestId("links-section");
    expect(section).toBeInTheDocument();

    // Test paragraphs
    const allParagraphs = await screen.findAllByRole("paragraph");
    expect(allParagraphs.length).toStrictEqual(1);

    const p = await screen.findByRole("paragraph");
    expect(p.textContent).toBe("This page has a bunch of cool links I found.");

    // Test headings
    const allHeadings = await screen.findAllByRole("heading");
    expect(allHeadings.length).toBeGreaterThan(0);

    const allH2 = await screen.findAllByRole("heading", { level: 2 });
    expect(allH2.length).toStrictEqual(4);

    const headingCompSci = allH2.find((h2) => h2.ariaLabel === "Computer Science");
    expect(headingCompSci).toBeInTheDocument();
    expect(headingCompSci?.textContent).toBe("Computer Science");

    const headingProgramming = allH2.find((h2) => h2.ariaLabel === "Programming");
    expect(headingProgramming).toBeInTheDocument();
    expect(headingProgramming?.textContent).toBe("Programming");

    const headingOther = allH2.find((h2) => h2.ariaLabel === "Other Personal Sites I Think are Cool");
    expect(headingOther).toBeInTheDocument();
    expect(headingOther?.textContent).toBe("Other Personal Sites I Think are Cool");

    const headingMisc = allH2.find((h2) => h2.ariaLabel === "Miscellaneous");
    expect(headingMisc).toBeInTheDocument();
    expect(headingMisc?.textContent).toBe("Miscellaneous");

    // Test subsections
    const sectionCompSci = await screen.findByTestId("links-compsci");
    expect(sectionCompSci).toBeInTheDocument();

    const sectionProgramming = await screen.findByTestId("links-programming");
    expect(sectionProgramming).toBeInTheDocument();

    const sectionOther = await screen.findByTestId("links-other");
    expect(sectionOther).toBeInTheDocument();

    const sectionMisc = await screen.findByTestId("links-misc");
    expect(sectionMisc).toBeInTheDocument();

    // Test the social links
    const links = await screen.findAllByRole("link");
    expect(links.length).toBeGreaterThan(2);

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

    // Test all other links
    const otherLinks = links.filter((li) => li.ariaLabel !== "GitHub" && li.ariaLabel !== "LinkedIn");
    expect(otherLinks.length).toBeGreaterThan(2);
  });
});
