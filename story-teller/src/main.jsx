import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Configure the pdf.js worker from the local package build so the app
// doesn't try to fetch the worker from a CDN (which can 404).
import { pdfjs } from 'react-pdf'
import workerSrc from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
