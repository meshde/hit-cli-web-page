import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

// Import Prism.js for code syntax highlighting
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css';

// Initialize Prism for syntax highlighting
document.addEventListener('DOMContentLoaded', () => {
  Prism.highlightAll();
});

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
