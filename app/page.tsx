
"use client";

import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Server,
  Settings2,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const services = [
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Scalable and secure backend systems built with Java Spring Boot, Node.js and modern architecture.",
  },
  {
    icon: Layers3,
    title: "Full-stack Web Apps",
    description:
      "Complete web applications with powerful APIs, responsive interfaces and reliable infrastructure.",
  },
  {
    icon: Globe2,
    title: "Websites & WordPress",
    description:
      "Fast, responsive and conversion-focused websites using WordPress and modern web technologies.",
  },
  {
    icon: Zap,
    title: "APIs & Integrations",
    description:
      "REST APIs and third-party integrations that connect your products, services and business systems.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Continuous improvements, security updates, performance optimization and technical support.",
  },
  {
    icon: Sparkles,
    title: "Product Consulting",
    description:
      "Technical guidance that helps turn your product idea into a practical and scalable solution.",
  },
];

const stacks = [
  {
    icon: Code2,
    title: "Spring Boot",
    description:
      "Enterprise-grade backend applications and APIs designed for reliability and scale.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    icon: Layers3,
    title: "MERN",
    description:
      "Modern JavaScript applications with fast interfaces and flexible backend architecture.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    icon: Globe2,
    title: "WordPress",
    description:
      "Professional business websites and custom WordPress solutions built around your needs.",
    technologies: [
      "WordPress",
      "PHP",
      "ACF",
      "Elementor",
      "WooCommerce",
      "REST API",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, users and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clear product structure and intuitive user experience.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our engineers build the product using the right technology stack.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "We test, optimize and deploy your application to production.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We continue improving, maintaining and supporting your product.",
  },
];

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-header">
      <div className="section-label">{label}</div>

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function TerminalBar() {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />

        <span className="terminal-title">
          code-engine
        </span>
      </div>

      <div className="terminal-body">
        <div className="terminal-command">
          $ code-engine --deploy=all
        </div>

        <div className="progress-row">
          <span className="progress-label">
            Spring Boot
          </span>

          <div className="progress">
            <span />
          </div>

          <span className="progress-value">
            100%
          </span>
        </div>

        <div className="progress-row">
          <span className="progress-label">
            MERN
          </span>

          <div className="progress">
            <span />
          </div>

          <span className="progress-value">
            100%
          </span>
        </div>

        <div className="progress-row">
          <span className="progress-label">
            WordPress
          </span>

          <div className="progress">
            <span />
          </div>

          <span className="progress-value">
            100%
          </span>
        </div>

        <br />

        <div className="terminal-success">
          ✓ all systems running
        </div>
      </div>
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="contact-detail">
      <div className="contact-detail-icon">
        <Icon size={18} />
      </div>

      <div>
        <strong>{title}</strong>

        <span>{children}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* =====================================
         HERO ANIMATION
      ===================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".eyebrow", {
          opacity: 0,
          y: 25,
          duration: 0.7,
        })
        .from(
          ".hero h1",
          {
            opacity: 0,
            y: 60,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".terminal",
          {
            opacity: 0,
            x: 80,
            scale: 0.96,
            duration: 1,
          },
          "-=0.7"
        );

      /* =====================================
         TERMINAL FLOAT
      ===================================== */

      gsap.to(".terminal", {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================
         SECTION HEADERS
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(".section-header")
        .forEach((header) => {
          gsap.from(header, {
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 45,
            duration: 0.8,
            ease: "power3.out",
          });
        });

      /* =====================================
         SERVICE CARDS
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(".service-card")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
          });
        });

      /* =====================================
         TECHNOLOGY CARDS
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(".stack-card")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 0.75,
            delay: index * 0.12,
            ease: "power3.out",
          });
        });

      /* =====================================
         PROCESS CARDS
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(".process-card")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 40,
            scale: 0.97,
            duration: 0.65,
            delay: index * 0.08,
            ease: "power3.out",
          });
        });

      /* =====================================
         ABOUT SECTION
      ===================================== */

      gsap.from(".about-grid > div:first-child", {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".about-info-item", {
        scrollTrigger: {
          trigger: ".about-info",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 50,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* =====================================
         CONTACT SECTION
      ===================================== */

      gsap.from(".contact-section .section-label", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
      });

      gsap.from(".contact-section .section-title", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".contact-details", {
        scrollTrigger: {
          trigger: ".contact-details",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.15,
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: "power3.out",
      });

      /* =====================================
         BUTTON HOVER
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(
          ".button-primary, .button-secondary, .nav-button"
        )
        .forEach((button) => {
          const enter = () => {
            gsap.to(button, {
              y: -3,
              scale: 1.02,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          const leave = () => {
            gsap.to(button, {
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          button.addEventListener(
            "mouseenter",
            enter
          );

          button.addEventListener(
            "mouseleave",
            leave
          );
        });

      /* =====================================
         REFRESH SCROLL TRIGGER
      ===================================== */

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef}>

      {/* =====================================
          NAVIGATION
      ===================================== */}

      <header className="navbar">
        <div className="container navbar-inner">

          <a href="#home" className="logo">
            <img
              src="/logo.png"
              alt="Code Engine Pvt Ltd"
              className="logo-image"
            />
          </a>

          <nav className="nav-links">
            <a href="#services">
              Services
            </a>

            <a href="#stack">
              Stack
            </a>

            <a href="#process">
              Process
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

            <a
              href="#contact"
              className="nav-button"
            >
              Start a project
            </a>
          </nav>

        </div>
      </header>

      {/* =====================================
          HERO
      ===================================== */}

      <section id="home" className="hero">

        <div className="container hero-grid">

          <div>

            <div className="eyebrow">
              <span className="eyebrow-dot" />

              Software engineering studio —
              Kathmandu
            </div>

            <h1>
              Software,
              <br />

              <span>engineered</span>
              <br />

              to run.
            </h1>

            <p className="hero-description">
              We design and build reliable digital
              products, APIs, websites and business
              systems using modern technologies and
              practical engineering.
            </p>

            <div className="hero-actions">

              <a
                href="#contact"
                className="button-primary"
              >
                Start a project

                <ArrowRight size={17} />
              </a>

              <a
                href="#services"
                className="button-secondary"
              >
                Explore services
              </a>

            </div>

          </div>

          <TerminalBar />

        </div>

      </section>

      {/* =====================================
          SERVICES
      ===================================== */}

      <section
        id="services"
        className="section section-white"
      >

        <div className="container">

          <SectionHeader
            label="What we do"
            title="Engineering that solves real problems."
            description="From a simple business website to a complete software platform, we build technology around your actual business requirements."
          />

          <div className="services-grid">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.title}
                >

                  <div className="service-icon">
                    <Icon size={21} />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================
          TECHNOLOGY STACK
      ===================================== */}

      <section
        id="stack"
        className="section section-light"
      >

        <div className="container">

          <SectionHeader
            label="Technology"
            title="The right stack for the right product."
            description="We choose technologies based on your product requirements, scalability needs and long-term maintainability."
          />

          <div className="stack-grid">

            {stacks.map((stack) => {
              const Icon = stack.icon;

              return (
                <article
                  className="stack-card"
                  key={stack.title}
                >

                  <div className="service-icon">
                    <Icon size={21} />
                  </div>

                  <h3>
                    {stack.title}
                  </h3>

                  <p>
                    {stack.description}
                  </p>

                  <div className="stack-list">

                    {stack.technologies.map(
                      (technology) => (
                        <span
                          className="stack-item"
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================
          PROCESS
      ===================================== */}

      <section
        id="process"
        className="section section-white"
      >

        <div className="container">

          <SectionHeader
            label="Our process"
            title="From idea to production."
            description="A straightforward engineering process that keeps projects clear, focused and moving forward."
          />

          <div className="process-grid">

            {process.map((item) => (
              <article
                className="process-card"
                key={item.number}
              >

                <span className="process-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          ABOUT
      ===================================== */}

      <section
        id="about"
        className="section section-light"
      >

        <div className="container about-grid">

          <div>

            <div className="section-label">
              About Code Engine
            </div>

            <h2 className="about-title">
              Based in Kathmandu,
              <br />
              built for anywhere.
            </h2>

            <p className="about-text">
              Code Engine Pvt Ltd is a software
              engineering studio based in Kathmandu,
              Nepal. We work with businesses,
              startups and organizations to design,
              develop and maintain dependable digital
              products.
            </p>

            <p className="about-text">
              Whether you need a custom backend, a
              full-stack application, a WordPress
              website or ongoing technical support,
              we focus on clean engineering and
              solutions that are built to last.
            </p>

          </div>

          <div className="about-info">

            <div className="about-info-item">
              <MapPin size={18} />

              Kalanki, Kathmandu
            </div>

            <div className="about-info-item">
              <Globe2 size={18} />

              Local & remote clients
            </div>

            <div className="about-info-item">
              <Settings2 size={18} />

              Project-based & ongoing
            </div>

            <div className="about-info-item">
              <Check size={18} />

              Practical engineering
            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          CONTACT
      ===================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="container contact-grid">

          <div>

            <div className="section-label">
              Start a conversation
            </div>

            <h2 className="section-title">
              Have a project in mind?
            </h2>

            <p className="contact-description">
              Tell us what you are building. We will
              help you understand the best technical
              approach and next steps.
            </p>

            <div className="contact-details">

              <ContactDetail
                icon={MapPin}
                title="Office"
              >
                Kalanki – 15, Chandragiri
                Municipality, Kathmandu, Nepal
              </ContactDetail>

              <ContactDetail
                icon={Phone}
                title="Phone"
              >
                +977 9707254642
              </ContactDetail>

              <ContactDetail
                icon={Mail}
                title="Email"
              >
                codeengine.np@gmail.com
              </ContactDetail>

              <ContactDetail
                icon={Settings2}
                title="Working hours"
              >
                Sunday – Friday · 10:00 – 18:00 NPT
              </ContactDetail>

            </div>

          </div>

          <form
            className="contact-form"
            action="mailto:codeengine.np@gmail.com"
            method="POST"
            encType="text/plain"
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="Name"
                className="form-input"
                type="text"
                placeholder="Your name"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="Email"
                className="form-input"
                type="email"
                placeholder="you@example.com"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="project">
                Project type
              </label>

              <select
                id="project"
                name="Project Type"
                className="form-select"
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
                  Select project type
                </option>

                <option value="Backend">
                  Backend system
                </option>

                <option value="Full Stack">
                  Full-stack application
                </option>

                <option value="WordPress">
                  WordPress website
                </option>

                <option value="API">
                  API / integration
                </option>

                <option value="Maintenance">
                  Maintenance & support
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            <div className="form-group">

              <label htmlFor="details">
                Project details
              </label>

              <textarea
                id="details"
                name="Project Details"
                className="form-textarea"
                placeholder="Tell us a little about your project..."
                required
              />

            </div>

            <button
              type="submit"
              className="button-primary form-submit"
            >
              Send project inquiry

              <ArrowRight size={17} />
            </button>

          </form>

        </div>

      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

     <footer className="footer">
  <div className="container footer-inner">
    <div className="footer-logo-wrapper">
      <Image
        src="/logo.png"
        alt="Code Engine Pvt Ltd"
        width={170}
        height={45}
        className="footer-logo-image"
      />
    </div>

    <p>
      © {new Date().getFullYear()} Code Engine Pvt Ltd
      All rights reserved.
    </p>
  </div>
</footer>

    </main>
  );
}

