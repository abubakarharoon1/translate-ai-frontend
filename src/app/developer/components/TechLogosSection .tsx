import React from "react";

const logos = [
  // First row logos (14)
  {
    name: "WordPress",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 6.627 5.37 12 12 12 6.628 0 12-5.373 12-12 0-6.63-5.372-12-12-12zm6.495 6.02l-2.56 6.958-2.86-7.947a9.707 9.707 0 00-2.97 0l-4.022 11.145H7.92L6.66 10.716 4.6 16.63H2.99L6.746 7.966a9.864 9.864 0 015.23-1.946 9.864 9.864 0 015.66 1.999zm-8.77 8.962l2.124-5.842 2.262 6.39a9.848 9.848 0 01-4.386-.548z"/>
      </svg>
    ),
  },
  {
    name: "Sitecore",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" stroke="none" />
        <path d="M12 2l3 7h7l-5.5 4 2 7-6-4-6 4 2-7L2 9h7l3-7z" fill="#b83227" />
      </svg>
    ),
  },
  {
    name: "Joomla",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <path fill="#f44336" d="M12 0L9 7H0l7 5-4 7 9-6 9 6-4-7 7-5h-9l-3-7z" />
        <circle cx="6.5" cy="12" r="2.5" fill="#43a047" />
        <circle cx="17.5" cy="12" r="2.5" fill="#2196f3" />
        <circle cx="12" cy="6.5" r="2.5" fill="#fbc02d" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 24 24" fill="#e2555a" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="#e2555a" />
        <circle cx="12" cy="12" r="4" fill="white" />
        <circle cx="17" cy="7" r="1.5" fill="white" />
        <path d="M15 10l3 4" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Drupal",
    svg: (
      <svg viewBox="0 0 24 24" fill="#0077c0" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14l3-4 3 4-3 4-3-4z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Magento",
    svg: (
      <svg viewBox="0 0 24 24" fill="#ec672a" className="w-10 h-10">
        <path d="M3 7l9-5 9 5v10l-9 5-9-5V7z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 24 24" fill="#7bb343" className="w-10 h-10">
        <path d="M7 3l10 0 1 4-12 5-1-9z" />
        <circle cx="7" cy="19" r="3" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    svg: (
      <svg viewBox="0 0 24 24" fill="#1798c1" className="w-10 h-10">
        <ellipse cx="12" cy="12" rx="10" ry="7" />
        <text x="7" y="15" fill="white" fontSize="7" fontWeight="bold">SF</text>
      </svg>
    ),
  },
  {
    name: "Zendesk",
    svg: (
      <svg viewBox="0 0 24 24" fill="#07333b" className="w-10 h-10">
        <path d="M5 12l7-7 7 7-7 7-7-7z" />
      </svg>
    ),
  },
  {
    name: "Mailchimp",
    svg: (
      <svg viewBox="0 0 24 24" fill="black" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <circle cx="15" cy="9" r="2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Google Ads",
    svg: (
      <svg viewBox="0 0 24 24" fill="#34a853" className="w-10 h-10">
        <path d="M2 12l6-10 4 8-10 6z" />
      </svg>
    ),
  },
  {
    name: "Google Play",
    svg: (
      <svg viewBox="0 0 24 24" fill="#4285f4" className="w-10 h-10">
        <path d="M2 2l18 10-18 10v-20z" />
      </svg>
    ),
  },
  // Second row logos (14)
  {
    name: "Android",
    svg: (
      <svg viewBox="0 0 24 24" fill="#a4c639" className="w-10 h-10">
        <path d="M6 20v-6l6 6 6-6v6H6z" />
      </svg>
    ),
  },
  {
    name: ".NET",
    svg: (
      <svg viewBox="0 0 24 24" fill="#68217a" className="w-10 h-10">
        <rect width="24" height="24" rx="3" />
        <text x="7" y="17" fill="white" fontSize="10" fontWeight="bold">.NET</text>
      </svg>
    ),
  },
  {
    name: "iOS",
    svg: (
      <svg viewBox="0 0 24 24" fill="black" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 6h6v12H9z" fill="white" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" fill="black" className="w-10 h-10">
        <path d="M12 2a10 10 0 00-3.16 19.47c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.34-3.35-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.94.83.1-.64.34-1.09.62-1.34-2.22-.25-4.55-1.1-4.55-4.87 0-1.08.39-1.97 1.03-2.67-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.49 9.49 0 012.5-.34 9.46 9.46 0 012.5.34c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.6 1.03 2.67 0 3.78-2.34 4.62-4.57 4.87.35.3.66.9.66 1.82v2.7c0 .27.18.58.68.48A10 10 0 0012 2z"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    svg: (
      <svg viewBox="0 0 24 24" fill="#00758f" className="w-10 h-10">
        <path d="M4 20c0-2 5-5 8-5s8 3 8 5H4z" />
        <circle cx="12" cy="12" r="8" fill="none" stroke="#00758f" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Oracle",
    svg: (
      <svg viewBox="0 0 24 24" fill="#e60012" className="w-10 h-10">
        <text x="4" y="18" fontWeight="bold" fontSize="14" fill="white">
          ORACLE
        </text>
      </svg>
    ),
  },
  {
    name: "Contentful",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="#ff5640" />
        <circle cx="12" cy="12" r="6" fill="#2a9edb" />
        <circle cx="12" cy="12" r="3" fill="#f4b400" />
      </svg>
    ),
  },
  {
    name: "SQL Server",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <rect width="24" height="24" fill="#e81123" />
        <path d="M5 3l14 18" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 24 24" fill="#336791" className="w-10 h-10">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <ellipse cx="12" cy="12" rx="4" ry="2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" fill="#3776ab" className="w-10 h-10">
        <path d="M7 6v6h6v-6H7z" />
        <path d="M17 12v6h-6v-6h6z" fill="#ffe052" />
      </svg>
    ),
  },
  {
    name: "PHP",
    svg: (
      <svg viewBox="0 0 24 24" fill="#6e4f99" className="w-10 h-10">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <text x="8" y="16" fill="white" fontWeight="bold" fontSize="10">
          PHP
        </text>
      </svg>
    ),
  },
  {
    name: "Java",
    svg: (
      <svg viewBox="0 0 24 24" fill="#f89820" className="w-10 h-10">
        <path d="M8 4s-1 3 2 3c3 0 2-3 2-3" fill="none" stroke="#f89820" strokeWidth="2" />
        <path d="M12 7v5" stroke="#f89820" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function TechLogosSection() {
  return (
    <section className="py-16">
         <section className=" border border-x-0 border-gray-200">
    <section className="max-w-[1200px] mx-auto  px-6 md:px-8 ">
      <table className="w-full border-collapse border border-gray-200 text-center">
        <tbody>
          <tr className="border-b border-gray-200">
            {logos.slice(0, 14).map((logo) => (
              <td
                key={logo.name}
                className="border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer"
                title={logo.name}
                aria-label={logo.name}
              >
                {logo.svg}
              </td>
            ))}
          </tr>
          <tr>
            {logos.slice(14).map((logo) => (
              <td
                key={logo.name}
                className="border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer"
                title={logo.name}
                aria-label={logo.name}
              >
                {logo.svg}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section></section>
    </section>


  );
}
