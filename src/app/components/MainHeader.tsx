// src/components/MainHeader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { removeToken } from "@/lib/auth/token";

export function MainHeader() {
  const { loggedIn } = useIsLoggedIn();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: any) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen]);

  function handleLogout() {
    removeToken();              // ✅ clear token & cookie using your helper
    window.location.href = "/"; // redirect after logout (change if you want)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/70">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex items-center gap-8 py-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-xl"
            >
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-2xl font-bold">
                t
              </div>
              <span>translated.</span>
            </Link>

            {/* Left menu */}
            <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium text-slate-800 ml-8">
              <li>
                <Link href="/services" className="hover:text-blue-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-blue-700">
                  Subscription
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-blue-700">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-blue-700">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/translator" className="hover:text-blue-700">
                  Become a translator
                </Link>
              </li>
            </ul>

            {/* Right side */}
            <div className="ml-auto flex items-center gap-4">
              {/* My account button + dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="px-4 py-2 rounded-sm bg-slate-100 text-[14px] font-semibold text-slate-900 hover:bg-slate-200 flex items-center gap-2"
                >
                  <span>My account</span>
                  <span className="text-xs">&#9662;</span>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-md bg-white shadow-lg border border-slate-200 text-sm z-50">
                    {/* little arrow */}
                    <div className="absolute -top-2 right-8 h-4 w-4 bg-white rotate-45 border-l border-t border-slate-200" />

                    {/* top metrics – optional */}
                    <div className="relative pt-3 pb-2 px-4 border-b border-slate-100">
                      <p className="text-[11px] uppercase text-slate-400 font-semibold mb-1">
                        Usage overview
                      </p>
                      <div className="space-y-1.5 text-[12px] text-slate-700">
                        <div className="flex justify-between">
                          <span>Available HT words</span>
                          <span className="font-semibold text-slate-900">0</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available MT characters</span>
                          <span className="font-semibold text-slate-900">500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Active interactions</span>
                          <span className="font-semibold text-slate-900">0</span>
                        </div>
                      </div>
                    </div>

                    {/* dropdown links */}
                    <ul className="relative py-1">
                      {loggedIn ? (
                        <>
                          <li>
                            <Link
                              href="/client/orders"  // 🧾 your orders page
                              className="block px-4 py-2 hover:bg-slate-50"
                            >
                              My orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/client/profile" // 👤 your profile page
                              className="block px-4 py-2 hover:bg-slate-50"
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-2 hover:bg-slate-50 text-red-600"
                            >
                              Log out
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              href="/auth/login"
                              className="block px-4 py-2 hover:bg-slate-50"
                            >
                              Log in
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/auth/signup"
                              className="block px-4 py-2 hover:bg-slate-50"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Translate now → order page */}
              <Link href="/order">
                <button className="bg-[#173593] text-white text-[14px] font-semibold px-4 py-2 rounded-sm hover:bg-[#10246a]">
                  Translate now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* spacer so content isn't hidden behind fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
