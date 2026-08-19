const links = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-blueprint border-t border-ink-line py-14">
      <div className="mx-auto max-w-studio px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center border border-signal-blue/50 text-[13px] font-mono text-signal-blue">
                &gt;_
              </span>
              <span className="font-display text-[16px] font-semibold text-white">
                Code&nbsp;Engine
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ash">
              A software engineering company in Kathmandu, building on
              Spring Boot, MERN, and WordPress.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
              Studio
            </p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
              Contact
            </p>
            <div className="mt-3 space-y-1 text-[13px] leading-relaxed text-white/70">
              <p>Kalanki – 15, Chandragiri Municipality</p>
              <p>Kathmandu, Nepal</p>
              <p>codeengine.np@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-line pt-6 font-mono text-[11px] text-ash">
          © 2026 Code Engine Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
