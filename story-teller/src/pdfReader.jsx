import { Document, Page } from "react-pdf";

/**
 * PdfReader
 * - Renders a single page
 * - Exposes the raw PDF.js page object via onPageLoad
 */
export default function PdfReader({
  pageNumber,
  onLoadSuccess,
  onPageLoad,
}) {
  return (
    <Document
      file="/sample.pdf"
      onLoadSuccess={onLoadSuccess}
      onLoadError={(err) => console.error("PDF load error:", err)}
      loading={<p>Loading PDF…</p>}
    >
      <Page
        pageNumber={pageNumber}
        scale={1.2}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        onLoadSuccess={onPageLoad}
      />
    </Document>
  );
}
