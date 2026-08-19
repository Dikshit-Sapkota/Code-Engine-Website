const engines = [
  { label: "Spring Boot", pct: "100%", color: "#5B8DEF", delay: "0s" },
  { label: "MERN", pct: "100%", color: "#3FB88F", delay: "0.15s" },
  { label: "WordPress", pct: "100%", color: "#E8A548", delay: "0.3s" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint">
      <div className="mx-auto grid max-w-studio gap-16 px-6 pb-24 pt-20 md:grid-cols-[1.15fr_1fr] md:items-center md:pb-32 md:pt-28">
        <div>
          <p className="reveal font-mono text-[12px] uppercase tracking-[0.2em] text-signal-blue">
            Software engineering studio — Kathmandu
          </p>
          <h1
            className="reveal mt-5 font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[56px]"
            style={{ animationDelay: "0.1s" }}
          >
            Software,
            <br />
            engineered to run.
          </h1>
          <p
            className="reveal mt-6 max-w-md text-[16px] leading-relaxed text-ash"
            style={{ animationDelay: "0.2s" }}
          >
            We design and build full-stack products on Java Spring Boot, the
            MERN stack, and WordPress — from backend systems that hold up
            under load to the websites that bring customers in.
          </p>
          <div
            className="reveal mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="border border-signal-blue bg-signal-blue px-6 py-3 font-mono text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href="#stack"
              className="border border-ink-line px-6 py-3 font-mono text-[13px] text-white transition-colors hover:border-white/40"
            >
              See our stack
            </a>
          </div>
        </div>

        {/* Signature element: schematic build trace, echoed later as engine markers */}
        <div
          className="reveal border border-ink-line bg-ink-soft/60 p-6"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="mb-5 flex items-center justify-between font-mono text-[11px] text-ash">
            <span>code-engine --deploy=all</span>
            <span className="flex items-center gap-1.5 text-signal-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-teal" />
              live
            </span>
          </div>

          <div className="space-y-5">
            {engines.map((e) => (
              <div key={e.label}>
                <div className="mb-1.5 flex items-center justify-between font-mono text-[12px]">
                  <span className="text-white">{e.label}</span>
                  <span style={{ color: e.color }}>{e.pct}</span>
                </div>
                <div className="h-[3px] w-full bg-white/[0.06]">
                  <div
                    className="trace-fill h-full"
                    style={{ background: e.color, animationDelay: e.delay }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-ink-line pt-4 font-mono text-[12px] text-ash">
            ✓ all systems running
          </div>
        </div>
      </div>
    </section>
  );
}
