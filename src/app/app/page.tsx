/**
 * Main product shell — Attio-style dense CRM for inspection work.
 * Placeholder data until backend + tenant auth are wired.
 */

const sampleAircraft = [
  { reg: "N123AB", type: "B737-800", status: "In Check", nextDue: "2026-10-22" },
  { reg: "G-EUUY", type: "A320neo", status: "Line", nextDue: "2026-10-18" },
  { reg: "VH-XZC", type: "B787-9", status: "RTS Pending", nextDue: "2026-10-17" },
];

export default function AppHome() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-56 border-r border-[var(--border)] bg-[var(--surface)] p-4 flex flex-col gap-1">
        <div className="font-semibold mb-6 px-2">Castair</div>
        {["Aircraft", "Work Packages", "Findings", "Agents", "Approvals", "Audit"].map(
          (item) => (
            <button
              key={item}
              className="text-left px-2 py-1.5 rounded text-sm hover:bg-white text-[var(--foreground)]"
            >
              {item}
            </button>
          )
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="border-b border-[var(--border)] px-6 py-3 flex items-center justify-between">
          <h1 className="font-medium">Aircraft</h1>
          <div className="text-sm text-[var(--muted)]">Tenant sandbox active</div>
        </header>

        <div className="p-6">
          <table className="castair-table">
            <thead>
              <tr>
                <th>Registration</th>
                <th>Type</th>
                <th>Status</th>
                <th>Next Due</th>
              </tr>
            </thead>
            <tbody>
              {sampleAircraft.map((a) => (
                <tr key={a.reg}>
                  <td className="font-medium">{a.reg}</td>
                  <td>{a.type}</td>
                  <td>
                    <span
                      className={
                        a.status === "RTS Pending"
                          ? "text-[var(--warning)]"
                          : "text-[var(--muted)]"
                      }
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="tabular-nums">{a.nextDue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
