const services = [
  {
    tag: "BACKEND",
    title: "Backend systems",
    body: "Java and Spring Boot APIs and services built for businesses that can't afford the backend going down — clean architecture, real error handling, and code the next engineer can read.",
  },
  {
    tag: "FULLSTACK",
    title: "Full-stack web apps",
    body: "React front ends backed by Node, Express, and MongoDB. Built for products that need to launch fast and keep changing shape as real users start using them.",
  },
  {
    tag: "CMS",
    title: "Websites & WordPress",
    body: "Fast, clean WordPress sites your own team can update after we leave — no page builder bloat, no mystery plugins, no calling a developer to fix a typo.",
  },
  {
    tag: "INTEGRATIONS",
    title: "APIs & integrations",
    body: "Connecting the systems you already run — payment gateways, CRMs, internal tools, third-party services — into one system that actually talks to itself.",
  },
  {
    tag: "SUPPORT",
    title: "Maintenance & support",
    body: "Ongoing care for what we built — and for systems we didn't. Bug fixes, security updates, performance tuning, and a team that picks up the phone.",
  },
  {
    tag: "STRATEGY",
    title: "Product consulting",
    body: "Help deciding what's worth building, which stack fits, and what to leave out of version one — before a single line of code gets written.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper-grid py-24 text-ink">
      <div className="mx-auto max-w-studio px-6">
        <div className="max-w-xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-signal-blue">
            What we build
          </p>
          <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">
            One studio, three ways to ship.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            We match the stack to the problem instead of forcing every
            project through the same pipeline.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group bg-paper p-7 transition-colors hover:bg-white">
              <p className="font-mono text-[11px] tracking-[0.15em] text-signal-blue">
                {s.tag}
              </p>
              <h3 className="mt-4 font-display text-[19px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
