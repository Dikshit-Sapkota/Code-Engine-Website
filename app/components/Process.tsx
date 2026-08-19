const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We start by understanding the actual problem and constraints — budget, timeline, who maintains this after launch — before proposing a stack.",
  },
  {
    n: "02",
    title: "Design",
    body: "We map the system architecture and the screens before writing code, so structural decisions get made on paper, not mid-build.",
  },
  {
    n: "03",
    title: "Develop",
    body: "We build in short cycles with regular check-ins, so you're seeing real progress throughout — not a single reveal at the end.",
  },
  {
    n: "04",
    title: "Deploy",
    body: "We ship to production, set up monitoring and backups, and make sure the handover includes everything you need to run it.",
  },
  {
    n: "05",
    title: "Support",
    body: "We stay reachable after launch for fixes, updates, and the questions that only come up once real users are in the system.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-paper-grid py-24 text-ink">
      <div className="mx-auto max-w-studio px-6">
        <div className="max-w-xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-signal-blue">
            How we work
          </p>
          <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">
            How a project runs.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Same five steps whether it&rsquo;s a backend service or a
            five-page site — only the depth of each step changes.
          </p>
        </div>

        <ol className="mt-14 border-t border-paper-line">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid gap-2 border-b border-paper-line py-7 md:grid-cols-[80px_180px_1fr] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-[13px] text-signal-blue">
                {s.n}
              </span>
              <h3 className="font-display text-[19px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="max-w-lg text-[14px] leading-relaxed text-ink/60">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
