// src/hooks/useIsLoggedIn.ts
"use client";

import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth/token";

export function useIsLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setLoggedIn(!!getToken());

    const handleStorage = () => setLoggedIn(!!getToken());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return { loggedIn };
}
