const facts = [
  { label: "Studio", value: "Code Engine" },
  { label: "Based in", value: "Kathmandu, Nepal" },
  { label: "Core stacks", value: "Spring Boot · MERN · WordPress" },
  { label: "Works with", value: "Local & remote clients" },
  { label: "Engagement", value: "Project-based & ongoing" },
];

export default function About() {
  return (
    <section id="about" className="bg-blueprint py-24">
      <div className="mx-auto grid max-w-studio gap-14 px-6 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-signal-blue">
            About Code Engine
          </p>
          <h2 className="mt-4 font-display text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[38px]">
            Based in Kathmandu,
            <br />
            built for anywhere.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ash">
            Code Engine is a software engineering studio based in Kalanki,
            Kathmandu. We work with businesses across Nepal and abroad who
            need software that holds up — not just a demo that looks good
            once.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ash">
            You talk directly to the people building your system — no
            account managers relaying messages between you and the
            engineers who actually write the code.
          </p>
        </div>

        <dl className="divide-y divide-ink-line border-y border-ink-line">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center justify-between py-4">
              <dt className="font-mono text-[12px] uppercase tracking-[0.1em] text-ash">
                {f.label}
              </dt>
              <dd className="text-right font-display text-[14px] font-medium text-white">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
