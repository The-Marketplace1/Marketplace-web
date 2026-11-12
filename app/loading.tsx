export default function Loading() {
  return (
    <main className="page-loading" aria-live="polite" aria-busy="true">
      <span className="loading-mark" aria-hidden="true" />
      <p>Loading Marketplace…</p>
    </main>
  );
}

