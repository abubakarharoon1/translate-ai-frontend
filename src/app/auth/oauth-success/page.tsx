"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OAuthSuccessClient() {
  const sp = useSearchParams();
  const router = useRouter();

  const [msg, setMsg] = useState("Signing you in…");

  useEffect(() => {
    const token = sp.get("token");
    const error = sp.get("error");

    if (error) {
      setMsg(error);
      return;
    }

    if (!token) {
      setMsg("Missing token.");
      return;
    }

    // Example: store token then redirect
    try {
      localStorage.setItem("access_token", token);
      setMsg("Success! Redirecting…");
      router.replace("/account"); // change to your target page
    } catch {
      setMsg("Could not store token.");
    }
  }, [sp, router]);

  return <div className="p-6">{msg}</div>;
}
