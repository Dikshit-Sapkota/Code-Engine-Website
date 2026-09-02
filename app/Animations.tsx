
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animations() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      /* --------------------------------
         HERO
      -------------------------------- */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero h1",
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.55"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".terminal",
          {
            x: 50,
            opacity: 0,
            scale: 0.97,
            duration: 1,
          },
          "-=0.75"
        );

      /* --------------------------------
         TERMINAL
      -------------------------------- */

      gsap.from(".terminal-success", {
        opacity: 0,
        y: 8,
        duration: 0.6,
        delay: 1.8,
        ease: "power2.out",
      });

      gsap.to(".terminal", {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* --------------------------------
         SECTION HEADERS
      -------------------------------- */

      gsap.utils.toArray<HTMLElement>(".section-header").forEach(
        (header) => {
          gsap.from(header, {
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              once: true,
            },
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      );

      /* --------------------------------
         SERVICES
      -------------------------------- */

      gsap.utils
        .toArray<HTMLElement>(".service-card")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
            y: 45,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.06,
            ease: "power3.out",
          });
        });

      /* --------------------------------
         STACK
      -------------------------------- */

      gsap.utils
        .toArray<HTMLElement>(".stack-card")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
            y: 40,
            opacity: 0,
            duration: 0.75,
            delay: index * 0.12,
            ease: "power3.out",
          });
        });

      /* --------------------------------
         PROCESS
      -------------------------------- */

      gsap.utils
        .toArray<HTMLElement>(".process-card")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
            y: 35,
            opacity: 0,
            scale: 0.97,
            duration: 0.65,
            delay: index * 0.08,
            ease: "power3.out",
          });
        });

      /* --------------------------------
         ABOUT
      -------------------------------- */

      gsap.from(".about-grid > div:first-child", {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
          once: true,
        },
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".about-info-item", {
        scrollTrigger: {
          trigger: ".about-info",
          start: "top 85%",
          once: true,
        },
        x: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
      });

      /* --------------------------------
         CONTACT
      -------------------------------- */

      gsap.from(".contact-section .container > div:first-child", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
          once: true,
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          once: true,
        },
        x: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      /* --------------------------------
         FOOTER
      -------------------------------- */

      gsap.from(".footer", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
          once: true,
        },
        opacity: 0,
        duration: 0.8,
      });

      /* --------------------------------
         BUTTON MICRO INTERACTIONS
      -------------------------------- */

      gsap.utils
        .toArray<HTMLElement>(
          ".button-primary, .button-secondary, .nav-button"
        )
        .forEach((button) => {
          button.addEventListener("mouseenter", () => {
            gsap.to(button, {
              y: -2,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          button.addEventListener("mouseleave", () => {
            gsap.to(button, {
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root} />;
}

