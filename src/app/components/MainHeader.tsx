"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Close sidebar on link click
  const handleLinkClick = () => setSidebarOpen(false);

  // Toggle modal visibility
  const toggleModal = () => setModalOpen((prev) => !prev);

  return (
    <>
      {/* Sticky navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-start gap-[30px] px-6 py-4 max-w-[1150px] mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 font-bold text-xl">
    <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
  <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-2xl font-bold cursor-pointer">
    t
  </div>
  <span>translated.</span>
</Link>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex space-x-8 ms-auto text-[16px] font-medium">
            <li>
              <Link href="/enterprise" className="hover:underline">
                Enterprises
              </Link>
            </li>
            <li>
              <Link href="/developer" className="hover:underline">
                Developers
              </Link>
            </li>
            <li>
              <Link href="/translator" className="hover:underline">
                Translators
              </Link>
            </li>
          </ul>

          {/* Desktop buttons & user icon */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              onClick={toggleModal}
              aria-label="Open user modal"
              className="focus:outline-none"
            >
              <UserIcon />
            </button>
            <Link
              href="/contact-us"
              className="text-[16px] ms-[20px] font-[medium] px-3 py-2 leading-[24px] border rounded-0 hover:bg-gray-100 transition"
            >
              Contact us
            </Link>
            <Link href="/quote">
              <button className="bg-[#0055b8] text-[16px] rounded-0 leading-[24px] font-medium px-3 py-2 hover:bg-blue-700 border-[#0055b8] text-white">
                Instant quote
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <HamburgerIcon open={sidebarOpen} />
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar menu */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-2xl font-bold">
                t
              </div>
              <span>translated.</span>
            </div>
            <button
              onClick={toggleSidebar}
              aria-label="Close menu"
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg font-medium">
            <Link
              href="/enterprise"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              Enterprises
            </Link>
            <Link
              href="/developers"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              Developers
            </Link>
            <Link
              href="/translators"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              Translators
            </Link>
          </nav>

          <div className="mt-auto space-y-4">
            <Link href="/contact-us" onClick={handleLinkClick}>
              <button className="w-full text-left text-sm font-medium px-6 py-4 border hover:bg-gray-100 transition">
                Contact us
              </button>
            </Link>
            <Link href="/quote" onClick={handleLinkClick}>
              <Button className="w-full bg-[#0055b8] rounded-sm px-6 py-4 hover:bg-blue-700 border-blue-600 text-white">
                Instant quote
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-4 pt-8 border-t border-gray-200">
            <UserIcon />
            <span className="text-sm font-medium">Logged in user</span>
          </div>
        </div>
      </aside>

      {/* Spacer so page content isn't hidden behind fixed navbar */}
      <div className="h-20 md:h-24" />

      {/* Modal overlay */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={toggleModal}
        >
          {/* Modal content */}
          <div
            className="bg-white p-6 rounded shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Client Sign In</h2>
              <button
                onClick={toggleModal}
                aria-label="Close modal"
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <form>
              <label className="block mb-2">
                Email or username <span className="text-red-600">*</span>
                <input
                  type="text"
                  className="block w-full mt-1 border border-gray-300 rounded px-3 py-2"
                  required
                />
              </label>
              <label className="block mb-4 relative">
                Password <span className="text-red-600">*</span>
                <input
                  type="password"
                  className="block w-full mt-1 border border-gray-300 rounded px-3 py-2"
                  required
                />
                {/* You can add show/hide password icon logic here */}
              </label>
              <button
                type="submit"
                className="w-full bg-[#0055b8] text-white py-2 rounded hover:bg-blue-700"
              >
                Sign in
              </button>
              <p className="mt-2 text-sm text-blue-700 underline cursor-pointer">
                Forgot username or password?
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      fill="none"
      viewBox="0 0 16 20"
      aria-hidden="true"
    >
      <path
        fill="#000"
        d="M7.992 9.955c2.5 0 4.66-1.335 4.66-2.981 0-1.647-2.16-2.982-4.66-2.982-2.5 0-4.66 1.335-4.66 2.982 0 1.646 2.16 2.98 4.66 2.98Zm0 1.26c-3.056 0-6.294 1.28-6.294 3.874v1.874h12.588v-1.87c0-2.593-3.238-3.878-6.294-3.878Z"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
    </svg>
  );
}
