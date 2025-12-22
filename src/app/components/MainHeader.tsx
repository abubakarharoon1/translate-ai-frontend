// src/components/MainHeader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { removeToken } from "@/lib/auth/token";

export function MainHeader() {
  const { loggedIn } = useIsLoggedIn();

  const [accountOpen, setAccountOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const accountRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLLIElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;

      if (accountRef.current && !accountRef.current.contains(target)) {
        setAccountOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(target)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleLogout() {
    removeToken();
    window.location.href = "/";
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/70">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex items-center gap-8 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-2xl font-bold">
                t
              </div>
              <span>translated.</span>
            </Link>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium text-slate-800 ml-8">
              {/* Services (Mega menu) */}
              <li
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="hover:text-blue-700 flex items-center gap-1"
                >
                  Services <span className="text-xs">&#9662;</span>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full w-[980px] bg-white border border-slate-200 shadow-lg mt-3">
                    {/* little arrow */}
                    <div className="absolute -top-2 left-20 h-4 w-4 bg-white rotate-45 border-l border-t border-slate-200" />

                    <div className="p-8">
                      {/* top columns */}
                      <div className="grid grid-cols-3 gap-10 text-[14px] text-slate-800">
                        <div>
                          <h4 className="text-[13px] font-semibold text-slate-500 mb-4">
                            By content
                          </h4>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/services/document-translation"
                                className="hover:text-blue-700"
                              >
                                Online Document Translation Service
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/text-translation"
                                className="hover:text-blue-700"
                              >
                                Text translation by expert
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/email-translation"
                                className="hover:text-blue-700"
                              >
                                Email translation by expert
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[13px] font-semibold text-slate-500 mb-4">
                            By use cases
                          </h4>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/services/machine-translation"
                                className="hover:text-blue-700"
                              >
                                Machine translation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/human-translation"
                                className="hover:text-blue-700"
                              >
                                Human translation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/technical-translation"
                                className="hover:text-blue-700"
                              >
                                Technical translation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/medical-translation"
                                className="hover:text-blue-700"
                              >
                                Medical translation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/business-translation"
                                className="hover:text-blue-700"
                              >
                                Business translation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/certified-translation"
                                className="hover:text-blue-700"
                              >
                                Certified Translation
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[13px] font-semibold text-slate-500 mb-4">
                            By file type
                          </h4>
                          <ul className="space-y-2">
                            <li>
                              <Link href="/translate/pdf" className="hover:text-blue-700">
                                Translate .PDF
                              </Link>
                            </li>
                            <li>
                              <Link href="/translate/ppt" className="hover:text-blue-700">
                                Translate .PPT
                              </Link>
                            </li>
                            <li>
                              <Link href="/translate/doc" className="hover:text-blue-700">
                                Translate .DOC
                              </Link>
                            </li>
                            <li>
                              <Link href="/translate/json" className="hover:text-blue-700">
                                Translate .JSON
                              </Link>
                            </li>
                            <li>
                              <Link href="/translate/indd" className="hover:text-blue-700">
                                Translate .INDD, .IDML
                              </Link>
                            </li>
                            <li>
                              <Link href="/translate/ai" className="hover:text-blue-700">
                                Translate .AI
                              </Link>
                            </li>
                            <li>
                              <Link href="/translate/figma" className="hover:text-blue-700">
                                Translate .FIG
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="my-8 border-t border-slate-200" />

                      {/* languages */}
                      <div className="grid grid-cols-3 gap-y-3 gap-x-8 text-[14px]">
                        <Link href="/languages" className="font-semibold hover:text-blue-700">
                          All languages
                        </Link>
                        <Link href="/languages/spanish" className="hover:text-blue-700">
                          Spanish translation services
                        </Link>
                        <Link href="/languages/german" className="hover:text-blue-700">
                          German translation services
                        </Link>
                        <Link href="/languages/portuguese" className="hover:text-blue-700">
                          Portuguese translation services
                        </Link>
                        <Link href="/languages/french" className="hover:text-blue-700">
                          French translation services
                        </Link>
                        <Link href="/languages/italian" className="hover:text-blue-700">
                          Italian translation services
                        </Link>
                        <Link href="/languages/chinese" className="hover:text-blue-700">
                          Chinese translation services
                        </Link>
                        <Link href="/languages/japanese" className="hover:text-blue-700">
                          Japanese translation services
                        </Link>
                        <Link href="/languages/arabic" className="hover:text-blue-700">
                          Arabic translation services
                        </Link>
                        <Link href="/languages/korean" className="hover:text-blue-700">
                          Korean translation services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
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
              {/* Mobile hamburger */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-slate-200 hover:bg-slate-50"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Open menu"
              >
                <span className="text-xl leading-none">≡</span>
              </button>

              {/* My account dropdown */}
              <div className="relative hidden md:block" ref={accountRef}>
                <button
                  type="button"
                  onClick={() => setAccountOpen((v) => !v)}
                  className="px-4 py-2 rounded-sm bg-slate-100 text-[14px] font-semibold text-slate-900 hover:bg-slate-200 flex items-center gap-2"
                >
                  <span>My account</span>
                  <span className="text-xs">&#9662;</span>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-md bg-white shadow-lg border border-slate-200 text-sm z-50">
                    <div className="absolute -top-2 right-8 h-4 w-4 bg-white rotate-45 border-l border-t border-slate-200" />

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

                    <ul className="relative py-1">
                      {loggedIn ? (
                        <>
                          <li>
                            <Link
                              href="/client/orders"
                              className="block px-4 py-2 hover:bg-slate-50"
                            >
                              My orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/client/profile"
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

              {/* Translate now */}
              <Link href="/order" className="hidden md:block">
                <button className="bg-[#173593] text-white text-[14px] font-semibold px-4 py-2 rounded-sm hover:bg-[#10246a]">
                  Translate now
                </button>
              </Link>
            </div>
          </div>

          {/* MOBILE DRAWER */}
          {mobileOpen && (
            <div className="md:hidden border-t border-slate-200 bg-white" ref={mobileRef}>
              <div className="px-2 py-3">
                <div className="px-4 pb-3">
                  <Link href="/order">
                    <button className="w-full bg-[#173593] text-white text-[14px] font-semibold px-4 py-2 rounded-sm hover:bg-[#10246a]">
                      Translate now
                    </button>
                  </Link>
                </div>

                <details className="px-4 py-3 border-t border-slate-200">
                  <summary className="font-semibold cursor-pointer">Services</summary>
                  <div className="mt-3 grid gap-2 text-[14px] text-slate-800">
                    <Link href="/services/document-translation" className="hover:text-blue-700">
                      Online Document Translation Service
                    </Link>
                    <Link href="/services/business-translation" className="hover:text-blue-700">
                      Business translation
                    </Link>
                    <Link href="/services/technical-translation" className="hover:text-blue-700">
                      Technical translation
                    </Link>
                    <Link href="/services/medical-translation" className="hover:text-blue-700">
                      Medical translation
                    </Link>
                    <Link href="/services/certified-translation" className="hover:text-blue-700">
                      Certified Translation
                    </Link>
                    <Link href="/services" className="text-blue-700 font-semibold">
                      See all services →
                    </Link>
                  </div>
                </details>

                <div className="px-4 py-3 border-t border-slate-200 grid gap-2 text-[14px]">
                  <Link href="/plans" className="hover:text-blue-700">Subscription</Link>
                  <Link href="/company" className="hover:text-blue-700">Company</Link>
                  <Link href="/reviews" className="hover:text-blue-700">Reviews</Link>
                  <Link href="/translator" className="hover:text-blue-700">Become a translator</Link>
                </div>

                <div className="px-4 py-3 border-t border-slate-200">
                  <div className="font-semibold mb-2">My account</div>
                  {loggedIn ? (
                    <div className="grid gap-2 text-[14px]">
                      <Link href="/client/orders" className="hover:text-blue-700">My orders</Link>
                      <Link href="/client/profile" className="hover:text-blue-700">Profile</Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="text-left text-red-600"
                      >
                        Log out
                      </button>
                    </div>
                  ) : (
                    <div className="grid gap-2 text-[14px]">
                      <Link href="/auth/login" className="hover:text-blue-700">Log in</Link>
                      <Link href="/auth/signup" className="hover:text-blue-700">Sign up</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* spacer so content isn't hidden behind fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
