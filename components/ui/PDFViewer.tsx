'use client';

import { PDFViewer, ZoomMode } from '@embedpdf/react-pdf-viewer';
import { ReactElement } from 'react';

import { Card, CardContent, CardDescription } from './card';

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
    <Card className="bg-mantle hover:border-accent focus-visible:border-accent group h-full flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
      <CardContent className="flex-1">
        <CardDescription className="h-200 w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
          <PDFViewer
            config={{
              src: file,
              tabBar: 'never',
              zoom: {
                defaultZoomLevel: ZoomMode.FitPage,
              },
              disabledCategories: ['annotation', 'redaction', 'document', 'panel-comment', 'page'],
            }}
            style={{ height: '100%' }}
          />
        </CardDescription>
      </CardContent>
    </Card>
  );
}
