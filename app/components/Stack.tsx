const engines = [
  {
    id: "01",
    name: "Spring Boot",
    color: "#5B8DEF",
    heading: "For systems that need to last",
    body: "Java and Spring Boot power the backends where correctness matters more than speed of iteration — internal tools, financial logic, and anything with real consequences for downtime.",
    tags: ["Java", "Spring Boot", "REST", "MySQL / PostgreSQL"],
  },
  {
    id: "02",
    name: "MERN",
    color: "#3FB88F",
    heading: "For products that need to move",
    body: "MongoDB, Express, React, and Node let us take an idea to a working product fast, then keep shipping as real users push back on it.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "03",
    name: "WordPress",
    color: "#E8A548",
    heading: "For businesses that need to be online",
    body: "A site your team can actually edit — built lean, without the plugin sprawl that makes most WordPress sites slow and fragile.",
    tags: ["WordPress", "PHP", "WooCommerce", "Custom themes"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="bg-blueprint py-24">
      <div className="mx-auto max-w-studio px-6">
        <div className="max-w-xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-signal-blue">
            Our stack
          </p>
          <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight text-white sm:text-[38px]">
            Three engines, one team.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ash">
            Every project runs on one of these — chosen for what the job
            actually needs, not what&rsquo;s easiest for us.
          </p>
        </div>

        <div className="mt-14 space-y-px bg-ink-line">
          {engines.map((e) => (
            <div
              key={e.id}
              className="grid gap-6 bg-ink px-1 py-8 md:grid-cols-[100px_1fr_1fr] md:items-center md:px-2"
            >
              <div className="flex items-center gap-3 md:block">
                <span
                  className="font-mono text-[12px] tracking-[0.15em]"
                  style={{ color: e.color }}
                >
                  ENGINE {e.id}
                </span>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: e.color }}
                  />
                  <h3 className="font-display text-[20px] font-semibold text-white">
                    {e.name}
                  </h3>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ash">
                  {e.heading}
                </p>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ash">
                  {e.body}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-ink-line px-2.5 py-1 font-mono text-[11px] text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
