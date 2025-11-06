"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      fill="none"
      viewBox="0 0 16 20"
      aria-hidden="true"
      className="cursor-pointer"
    >
      <path
        fill="#000"
        d="M7.992 9.955c2.5 0 4.66-1.335 4.66-2.981 0-1.647-2.16-2.982-4.66-2.982-2.5 0-4.66 1.335-4.66 2.982 0 1.646 2.16 2.98 4.66 2.98Zm0 1.26c-3.056 0-6.294 1.28-6.294 3.874v1.874h12.588v-1.87c0-2.593-3.238-3.878-6.294-3.878Z"
      />
    </svg>
  );
}

export default function UserModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <UserIcon />
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-md p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold mb-4">Client Sign In</DialogTitle>
          <DialogDescription>
            <nav className="flex space-x-4 border-b border-gray-200 mb-6">
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
                Clients
              </a>
              <a
                href="https://www.translated.com/top/?_gl=1*m54ha9*_gcl_au*MTI2MTc2MDkwNC4xNzQ4NzAyODky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline cursor-not-allowed"
                aria-disabled="true"
              >
                Translators ↗
              </a>
              <a
                href="https://www.translated.net/aop/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline cursor-not-allowed"
                aria-disabled="true"
              >
                Affiliates ↗
              </a>
            </nav>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="usernameEmail" className="block mb-1 font-medium">
                  Email or username<span className="text-red-500">*</span>
                </label>
                <Input
                  id="usernameEmail"
                  type="text"
                  name="usernameEmail"
                  autoComplete="email username"
                  placeholder=""
                  maxLength={180}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    maxLength={20}
                    required
                  />
                  <button
                    type="button"
                    aria-label="Show password"
                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                  >
                    👁️
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <Button type="submit" className="button--compact bg-blue-600 hover:bg-blue-700">
                  Sign in
                </Button>
                <a
                  href="#"
                  className="text-blue-600 text-sm hover:underline"
                  tabIndex={0}
                  aria-label="Forgot username or password?"
                >
                  Forgot username or password?
                </a>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>

      {/* Overlay style */}
      <style jsx global>{`
        [data-headlessui-overlay] {
          background-color: rgba(0, 0, 0, 0.25) !important;
          backdrop-filter: blur(8px);
        }
      `}</style>
    </Dialog>
  );
}
