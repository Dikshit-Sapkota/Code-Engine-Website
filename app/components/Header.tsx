const links = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-studio items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center border border-signal-blue/50 text-[13px] font-mono text-signal-blue">
            &gt;_
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-white">
            Code&nbsp;Engine
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-ash transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 border border-signal-blue/60 px-4 py-2 font-mono text-[13px] text-signal-blue transition-colors hover:bg-signal-blue hover:text-ink sm:inline-block"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
