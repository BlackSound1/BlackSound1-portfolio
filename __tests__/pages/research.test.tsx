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
  it("should render the Research page", async () => {
    render(<Research />);

    // Test section was rendered
    const section = await screen.findByTestId("research-section");
    expect(section).toBeInTheDocument();

    // Test that the mocked PDF Viewer was rendered
    const pdfViewer = screen.getByTestId("mock-pdf-viewer");
    expect(pdfViewer).toHaveAttribute("data-file", "/static/PDFs/ewaste-report.pdf");
    expect(pdfViewer).toHaveTextContent("Mock PDF Viewer");

    // Test the paragraphs
    const paragraphs = await screen.findAllByRole("paragraph");
    expect(paragraphs.length).toStrictEqual(2);

    const intro = paragraphs.find((p) => p.ariaLabel === "paragraph-intro");
    expect(intro).toBeInTheDocument();
    expect(intro).toHaveTextContent("This page details my original academic research.");

    const description = paragraphs.find((p) => p.ariaLabel === "research-description");
    expect(description).toBeInTheDocument();
    expect(description?.textContent.length).toBeGreaterThan(0);

    // Test the social links
    const links = await screen.findAllByRole("link");
    expect(links.length).toStrictEqual(2);

    const gh = links.find((link) => link.ariaLabel === "GitHub");
    expect(gh).toBeInTheDocument();
    expect(gh).toHaveAttribute("href", "https://github.com/BlackSound1");
    expect(gh).toHaveAttribute("rel", "noopener noreferrer");
    expect(gh).toHaveAttribute("target", "_blank");
    expect(gh).toHaveTextContent("GitHub");

    const li = links.find((link) => link.ariaLabel === "LinkedIn");
    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute("href", "https://www.linkedin.com/in/ordon/");
    expect(li).toHaveAttribute("rel", "noopener noreferrer");
    expect(li).toHaveAttribute("target", "_blank");
    expect(li).toHaveTextContent("LinkedIn");
  });
});
