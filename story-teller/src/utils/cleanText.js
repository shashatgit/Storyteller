export function cleanPageText(rawText) {
  if (!rawText) return "";

  return rawText
    // remove excessive whitespace
    .replace(/\s+/g, " ")

    // remove standalone page numbers
    .replace(/\b\d+\b/g, "")

    // remove common header/footer noise
    .replace(/chapter\s+\d+/gi, "")
    .replace(/page\s+\d+/gi, "")

    // trim edges
    .trim();
}
