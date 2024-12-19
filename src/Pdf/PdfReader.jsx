import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Set the worker source (important for browser-based usage)
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const FileUploader = () => {
  const [fileContent, setFileContent] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        await extractPDFText(arrayBuffer);
      };
      reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const extractPDFText = async (arrayBuffer) => {
    try {
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map((item) => item.str).join(" ");
        text += `Page ${i}:\n${pageText}\n\n`;
      }

      setFileContent(text);
    } catch (err) {
      console.error("Error extracting text:", err);
      setFileContent("Failed to extract text from PDF.");
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      <textarea value={fileContent} readOnly style={{ width: "100%", height: "300px" }} />
    </div>
  );
};

export default FileUploader;
