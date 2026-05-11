"use client";

import { PDFViewer, ZoomMode } from "@embedpdf/react-pdf-viewer";
import { ReactElement } from "react";

import { Card, CardContent, CardDescription } from "./card";

interface PDF_Props {
  file: string;
}

/**
 * A viewer for a single PDF. Has many options disabled for safety/ ease of use.
 * @param file The PDF file to load.
 * @returns A PDF_Viewer element with the `file` loaded.
 */
export default function PDF_Viewer({ file }: PDF_Props): ReactElement {
  return (
    <Card
      className="py-0 bg-mantle hover:border-accent focus-visible:border-accent group flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none"
      data-testid="pdf viewer card"
    >
      <CardContent className="px-0">
        <CardDescription className="h-200 overflow-hidden rounded-xl shadow-lg">
          <PDFViewer
            config={{
              src: file,
              tabBar: "never",
              zoom: {
                defaultZoomLevel: ZoomMode.FitPage,
              },
              disabledCategories: ["annotation", "redaction", "document", "panel-comment", "page"],
            }}
            style={{ height: "100%" }}
          />
        </CardDescription>
      </CardContent>
    </Card>
  );
}
