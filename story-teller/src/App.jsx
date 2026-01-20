import { useState } from "react";
import PdfReader from "./pdfReader";
import { cleanPageText } from "./utils/cleanText";
import { summarizeText } from "./utils/summarize";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pageText, setPageText] = useState("");
  const [summary, setSummary] = useState("");

  // Navigation
  const nextPage = () => setPageNumber(p => Math.min(p + 1, numPages));
  const prevPage = () => setPageNumber(p => Math.max(p - 1, 1));


const handlePageLoad = async (page) => {
  const textContent = await page.getTextContent();
  const rawText = textContent.items.map(i => i.str).join(" ");

  const cleaned = cleanPageText(rawText);
  setPageText(cleaned);

  if (cleaned.length < 25) {
    setSummary("No readable text on this page.");
    return;
  }

  const pageSummary = summarizeText(cleaned);
  setSummary(pageSummary);
};


  return (
    <div className="app">
      <header className="header">
        <h1>StoryTeller</h1>
      </header>

      <main className="main">
        {/* PDF PANEL */}
        <div className="pdf-panel">
          <PdfReader
            pageNumber={pageNumber}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onPageLoad={handlePageLoad}
          />
        </div>

        {/* CONTROLS */}
        <div className="controls">
          <button onClick={prevPage} disabled={pageNumber === 1}>
            Prev
          </button>

          <div>{pageNumber} / {numPages ?? "–"}</div>

          <button onClick={nextPage} disabled={pageNumber === numPages}>
            Next
          </button>
        </div>

        {/* TEXT PREVIEW (TEMPORARY) */}
        <div className="ai-panel">
          <h3>Page Summary</h3>

      <pre className="text-preview">
    {summary || "Generating summary…"}
      </pre>
      </div>

      </main>
    </div>
  );
}

export default App;
