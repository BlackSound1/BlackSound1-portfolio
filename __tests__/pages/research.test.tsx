import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Research from "@/app/research/page";

// On the Research page, the PDF_Viewer is imported as a default export from
// "@/components/ui/PDFViewer". Reflect this in the mock
jest.mock("@/components/ui/PDFViewer", () => ({
  __esModule: true, // This ensures the mock is treated as an ES module
  default: ({ file }: { file: string }) => (
    <div data-testid="mock-pdf-viewer" data-file={file}>
      Mock PDF Viewer
    </div>
  ),
}));

describe("Research", () => {
  beforeEach(() => render(<Research />));

  it("should render the Research section", async () => {
    const section = await screen.findByTestId("research-section");
    expect(section).toBeInTheDocument();
  });

  it("should test the mocked PDF_Viewer", async () => {
    const pdfViewer = screen.getByTestId("mock-pdf-viewer");
    expect(pdfViewer).toHaveAttribute("data-file", "/static/PDFs/ewaste-report.pdf");
    expect(pdfViewer.textContent).toBe("Mock PDF Viewer");
  });

  it("should render the paragraphs", async () => {
    const paragraphs = await screen.findAllByRole("paragraph");
    expect(paragraphs.length).toStrictEqual(2);

    const intro = paragraphs.find((p) => p.ariaLabel === "paragraph-intro");
    expect(intro).toBeInTheDocument();
    expect(intro?.textContent).toBe("This page details my original academic research.");

    const description = paragraphs.find((p) => p.ariaLabel === "research-description");
    expect(description).toBeInTheDocument();
    expect(description?.textContent.length).toBeGreaterThan(0);
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
});
