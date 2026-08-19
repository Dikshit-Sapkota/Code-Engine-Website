"use client";

import { useState, FormEvent } from "react";

const details = [
  {
    label: "Visit us",
    lines: ["Code Engine", "Kalanki – 15, Chandragiri Municipality", "Kathmandu, Nepal"],
  },
  { label: "Phone", lines: ["+977 9707254642"] },
  { label: "Email", lines: ["codeengine.np@gmail.com"] },
  { label: "Hours", lines: ["Sun–Fri, 10:00–18:00 NPT"] },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form handler / email service of choice.
    setSent(true);
  }

  return (
    <section id="contact" className="bg-paper-grid py-24 text-ink">
      <div className="mx-auto max-w-studio px-6">
        <div className="max-w-xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-signal-blue">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">
            Tell us what you&rsquo;re building.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Send a few details and we&rsquo;ll follow up to talk through the
            right stack for your project.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-paper-line bg-paper/60 p-7"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
                  Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full border border-paper-line bg-white px-3.5 py-2.5 text-[14px] outline-none placeholder:text-ink/30"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
                  Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full border border-paper-line bg-white px-3.5 py-2.5 text-[14px] outline-none placeholder:text-ink/30"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
                Project type
              </span>
              <select
                defaultValue="Spring Boot backend"
                className="mt-2 w-full border border-paper-line bg-white px-3.5 py-2.5 text-[14px] outline-none"
              >
                <option>Spring Boot backend</option>
                <option>Full-stack web app (MERN)</option>
                <option>Website / WordPress</option>
                <option>API or integration</option>
                <option>Maintenance & support</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
                Project details
              </span>
              <textarea
                required
                rows={4}
                placeholder="What are you trying to build?"
                className="mt-2 w-full resize-none border border-paper-line bg-white px-3.5 py-2.5 text-[14px] outline-none placeholder:text-ink/30"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-ink px-6 py-3 font-mono text-[13px] font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              {sent ? "Message sent ✓" : "Send message"}
            </button>
            <p className="font-mono text-[11px] text-ink/40">
              We typically reply within one business day.
            </p>
          </form>

          <div className="space-y-8">
            {details.map((d) => (
              <div key={d.label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal-blue">
                  {d.label}
                </p>
                <div className="mt-2 space-y-0.5">
                  {d.lines.map((line) => (
                    <p key={line} className="text-[15px] leading-relaxed text-ink/80">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
