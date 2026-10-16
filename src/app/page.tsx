import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-lg">Castair</div>
        <nav className="flex gap-6 text-sm text-[var(--muted)]">
          <Link href="/app" className="hover:text-[var(--foreground)]">
            Open product
          </Link>
          <Link href="/docs" className="hover:text-[var(--foreground)]">
            Docs
          </Link>
        </nav>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center max-w-3xl mx-auto">
        <p className="text-sm text-[var(--muted)] mb-4 tracking-wide uppercase">
          Aircraft Quality Control · RTS · Aviation Safety
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          The inspector platform engineered for airworthiness.
        </h1>
        <p className="text-[var(--muted)] text-lg mb-10 max-w-xl">
          Agentic specialists for AD/SB, visual inspection, work packages and
          explainable airworthiness — inside hard-encrypted tenant sandboxes.
          Human authority remains on every return-to-service decision.
        </p>
        <div className="flex gap-4">
          <Link
            href="/app"
            className="bg-[var(--accent)] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90"
          >
            Enter Castair
          </Link>
          <Link
            href="https://github.com/MichaelSwann2x/castair"
            className="border border-[var(--border)] px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[var(--surface)]"
          >
            View source
          </Link>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] px-6 py-8 text-sm text-[var(--muted)] text-center">
        Castair — sandboxed, encrypted, human-in-the-loop by design.
      </footer>
    </main>
  );
}
