import React from "react";

const categories = [
  {
    title: "Software",
    items: [
      "properties",
      "resx",
      "xml",
      "sxml",
      "txml",
      "dita",
      "strings",
      "Android xml",
      "srt",
      "wix",
      "po",
      "g",
    ],
  },
  {
    title: "Desktop Publishing",
    items: ["mif", "idml", "icml", "xml", "dita"],
  },
  {
    title: "Interchange Formats",
    items: ["xliff", "sdlxliff", "tmx", "ttx", "xlf"],
  },
  {
    title: "Text formats",
    items: [
      "MS Word",
      "MS Excel",
      "MS Power Point",
      "MS Access",
      "MS OneNote",
      "MS Publisher",
      "Open Office",
      "Google Docs",
      "Google Sheets",
      "Google Slides",
      "Zip",
    ],
  },
  {
    title: "Web development",
    items: ["htm", "html", "xhtml", "dtd", "json", "yaml", "yml"],
  },
];

const scannedFiles = ["pdf", "bmp", "png", "gif", "jpeg", "jpg", "tiff"];

export default function SupportedFileFormats() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 md:px-8 py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Supported file formats
      </h2>

      <div className="flex flex-wrap justify-between gap-y-10">
        {/* Categories */}
        {categories.map(({ title, items }) => (
          <div key={title} className="w-1/2 md:w-auto md:flex-1">
            <h3 className="font-semibold mb-6 text-lg">{title}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-base">
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Scanned files */}
      <div className="mt-16 w-full max-w-xs mx-auto text-center">
        <h3 className="font-semibold mb-6 text-lg">Scanned Files</h3>
        <ul className="space-y-2">
          {scannedFiles.map((file) => (
            <li key={file} className="flex items-center justify-center gap-2 text-base">
              <svg
                className="w-5 h-5 flex-shrink-0 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{file}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
