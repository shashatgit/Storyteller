export function summarizeText(text) {
  if (!text) return "";

  // naive summary for now (placeholder for LLM)
  const sentences = text.split(". ");

  return sentences
    .slice(0, 3)
    .map(s => `• ${s.trim()}`)
    .join("\n");
}
