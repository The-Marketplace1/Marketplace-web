import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="centered-state">
      <div className="state-icon">
        <SearchX size={22} aria-hidden="true" />
      </div>
      <p className="eyebrow">Page not found</p>
      <h1>This page isn’t here.</h1>
      <p className="muted-copy">The address may be out of date or the page may have moved.</p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to home
      </Link>
    </main>
  );
}

