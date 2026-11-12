"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // The error is intentionally not sent anywhere until monitoring is configured.
    void error;
  }, [error]);

  return (
    <main className="centered-state">
      <div className="state-icon state-icon-error">
        <AlertCircle size={22} aria-hidden="true" />
      </div>
      <p className="eyebrow">Something went wrong</p>
      <h1>We couldn’t load this page.</h1>
      <p className="muted-copy">Please try again. If this keeps happening, contact support.</p>
      <button className="button button-primary" onClick={reset} type="button">
        <RefreshCw size={16} aria-hidden="true" />
        Try again
      </button>
    </main>
  );
}

