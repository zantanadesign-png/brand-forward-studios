import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zantana — Premium Brand & Web Design Studio" },
      {
        name: "description",
        content:
          "Zantana creates strategic websites and visual identities for modern brands looking to elevate perception, credibility, and digital presence.",
      },
      { property: "og:title", content: "Zantana — Premium Brand & Web Design Studio" },
      {
        property: "og:description",
        content: "Zantana creates strategic websites and visual identities for modern brands looking to elevate perception, credibility, and digital presence.",
      },
      { property: "og:image", content: "/google-preview.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

const tickerImages = [
  "/ticker-1.jpg",
  "/ticker-2.jpg",
  "/ticker-3.jpg",
  "/ticker-4.jpg",
  "/ticker-5.jpg",
  "/ticker-6.jpg",
  "/ticker-7.jpg",
  "/ticker-8.jpg",
];

const solveSteps = [
  {
    label: "01 — STRATEGIC DIRECTION",
    items: ["Brand discovery", "Wireframe & structure", "Visual direction systems", "Brand alignment"],
    tagline: "BUILT AROUND CLARITY.",
    description:
      "Every decision starts with positioning, aligning your website and visual identity with how your brand should be perceived.",
  },
  {
    label: "02 — VISUAL EXPERIENCE",
    items: ["Homepage design", "Custom visual direction", "Supporting pages", "Design refinement"],
    tagline: "DESIGN THAT BUILDS PERCEPTION.",
    description:
      "Clean layouts, strong typography, intentional imagery, and refined interactions. Crafted to make your brand feel established, and premium.",
  },
  {
    label: "03 — DEVELOPMENT & LAUNCH",
    items: ["Framer development", "CMS integration", "Responsive optimization", "Launch support"],
    tagline: "FAST. FLEXIBLE. SCALABLE.",
    description:
      "Built in Framer for speed, performance, and easy updates. Allowing your brand to move fast without sacrificing quality.",
  },
];

const websiteProjects = [
  {
    name: "LATE",
    type: "Catering Services",
    img: "/project-website-1.jpg",
    alt: "Premium Custom Web Design and High-Performance Framer Development for Catering Services",
  },
  {
    name: "BLOOM",
    type: "Restaurant & Bar",
    img: "/project-website-2.jpg",
    alt: "Strategic Website Redesign and UI/UX Optimization for Restaurant & Bar Brands",
  },
  {
    name: "ORBIT",
    type: "SaaS Platform",
    img: "/project-website-3.jpg",
    alt: "Conversion-Focused B2B SaaS Website Design and Scalable Web Architecture",
  },
  {
    name: "PULSE",
    type: "Fitness Studio",
    img: "/project-website-4.jpg",
    alt: "Modern Fitness Studio Website Design with Interactive Elements and Smooth Animations",
  },
  {
    name: "VERA",
    type: "Skincare Brand",
    img: "/project-website-5.jpg",
    alt: "E-commerce and Premium Landing Page Web Design for Skincare and Beauty Brands",
  },
  {
    name: "NORTH",
    type: "Travel Agency",
    img: "/project-website-6.jpg",
    alt: "Immersive Web Design and Digital Experience Strategy for Travel Agencies",
  },
];

const brandProjects = [
  {
    name: "SKIP",
    type: "Events Ticketing",
    img: "/project-brand-1.jpg",
    alt: "Elevated Visual Brand Identity and Strategic Positioning for Events Ticketing",
  },
  {
    name: "NOVA",
    type: "Brand Identity",
    img: "/project-brand-2.jpg",
    alt: "Comprehensive Branding, Logo Design, and Visual Direction Strategy",
  },
  {
    name: "FERN",
    type: "Botanical Studio",
    img: "/project-brand-3.jpg",
    alt: "Minimalist Brand Identity and Premium Typography System for Botanical Studio",
  },
];

const processSteps = [
  {
    num: "01",
    name: "01 — DISCOVERY",
    body: "We start by understanding your brand from the inside out, through strategic conversations, brand analysis, and clear alignment on where your business is today and where it wants to go next.",
  },
  {
    num: "02",
    name: "02 — DIRECTION",
    body: "With clarity in place, we define the visual direction of the project, exploring concepts, references, positioning, and the overall creative vision behind the brand experience.",
  },
  {
    num: "03",
    name: "03 — DESIGN",
    body: "Ideas start taking shape through refined layouts, visual systems, early explorations, and presentation rounds focused on building a brand presence that feels clear, elevated, and intentional.",
  },
  {
    num: "04",
    name: "04 — DEVELOPMENT",
    body: "Once the direction is approved, everything is brought to life, whether through a complete visual identity system, a strategic website experience, or both working together seamlessly.",
  },
  {
    num: "05",
    name: "05 — DELIVERY & SUPPORT",
    body: "Final assets, launch preparation, guidance, and ongoing support, ensuring your brand feels consistent, polished, and ready for its next stage of growth.",
  },
];

const faqs = [
  {
    q: "Do I need to have a brand identity before we start?",
    a: "Not at all. I can work with what you have, or we can build your visual identity from scratch as part of the project. Just mention it when you reach out.",
  },
  {
    q: "What's your workflow like?",
    a: "We start with a discovery call, move to concept and wireframes, then design, then development. You'll have clear checkpoints to review and give feedback at every stage.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "I offer unlimited revisions until you're satisfied. My goal is for you to love the result — and I won't stop until we get there together.",
  },
  {
    q: "Can I request more pages in the future?",
    a: "Yes. Post-launch pages and updates are available as add-ons. Just reach out and we'll figure out the best way to grow your site together.",
  },
  {
    q: "What tools do you use?",
    a: "I design in Figma and build in Framer. This combo gives you a fast, animated, fully responsive website with a CMS you can manage yourself.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every project includes 30 days of post-launch support. After that, we can arrange an ongoing maintenance plan if needed.",
  },
];

const ZLogo = ({ className }: { className?: string }) => (
  <div className={className}>
    <img src="/logo-wordmark.png" alt="Zantana logo" className="logo-desktop" />
    <img src="/logo-icon.png" alt="Zantana logo" className="logo-mobile" />
  </div>
);

const ZWordmark = ({ className }: { className?: string }) => (
  <img
    src="/logo-wordmark.png"
    alt="Zantana Wordmark"
    className={className}
  />
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

function ProblemSection() {
  return (
    <section className="z-section" data-theme="blue">
      <div>
        <h2>Facing this problem?</h2>
      </div>
      <div>
        <p style={{ textTransform: 'uppercase', marginBottom: '20px' }}>
          Your company grew.
          <br />
          Your service got better.
          <br />
          Your team has scaled.
        </p>
        <p>
          But your website and visual identity still don't reflect the level you operate at
          today.
        </p>
      </div>
    </section>
  );
}

function Index() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mobileMql = window.matchMedia("(max-width: 899px)");
    const touchMql = window.matchMedia("(pointer: coarse)");

    const handleMobileChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    const handleTouchChange = (e: MediaQueryListEvent | MediaQueryList) => setIsTouchDevice(e.matches);

    handleMobileChange(mobileMql);
    handleTouchChange(touchMql);

    mobileMql.addEventListener("change", handleMobileChange as (e: MediaQueryListEvent) => void);
    touchMql.addEventListener("change", handleTouchChange as (e: MediaQueryListEvent) => void);

    return () => {
      mobileMql.removeEventListener("change", handleMobileChange as (e: MediaQueryListEvent) => void);
      touchMql.removeEventListener("change", handleTouchChange as (e: MediaQueryListEvent) => void);
    };
  }, []);

  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [activeProjects, setActiveProjects] = useState<Set<string>>(new Set());
  const toggleProject = (name: string) =>
    setActiveProjects((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  const toggleFaq = (i: number) =>
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const tickerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    const el = tickerRef.current;
    if (!el) return;
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    drag.current = { down: true, startX: x, scrollLeft: el.scrollLeft, moved: false };
    el.classList.add("dragging");
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drag.current.down) return;
    const el = tickerRef.current;
    if (!el) return;
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    el.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX);
    
    // Infinite loop logic for manual drag
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (el.scrollLeft < 0) el.scrollLeft += half;
  };

  const onUp = () => {
    drag.current.down = false;
    tickerRef.current?.classList.remove("dragging");
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />




      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "name": "Zantana Studio",
                "url": "https://zantanastudio.com",
                "logo": "https://zantanastudio.com/logo-icon.png",
                "description": "Zantana creates strategic websites and visual identities for modern brands looking to elevate perception, credibility, and digital presence.",
                "founder": {
                  "@type": "Person",
                  "name": "Ivo"
                },
                "sameAs": [
                  "https://instagram.com/zantana.co",
                  "https://linkedin.com/in/ivozantana",
                  "https://x.com/zantanastudio"
                ],
                "areaServed": "Worldwide",
                "knowsAbout": [
                  "Premium Web Design",
                  "Brand Identity Design",
                  "Visual Strategy",
                  "Framer Development",
                  "UI/UX Design",
                  "Brand Positioning"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Studio Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Landing Page Design & Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Full Website Design & Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Visual Identity & Branding"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a,
                  },
                })),
              }
            ]
          }),
        }}
      />
      <div className="z-root">
        <div className="hero-viewport" data-theme="light">
          <nav>
            <a href="/" className="nav-logo">
              <ZLogo />
            </a>
            <ul className="nav-links">
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">DM</a>
              </li>
              <li className="mobile-hidden">
                <a href="#contact" className="btn-blue no-anim">
                  Elevate My Brand
                </a>
              </li>
            </ul>
          </nav>

          <section className="hero">
            <div className="hero-available">
              <div className="hero-dot" />
              <span>Available for projects</span>
            </div>
            <h1>
              <span className="hero-h1-desktop">
                We help growing brands
                <br />
                look as valuable as
                <br />
                they actually are
              </span>
              <span className="hero-h1-mobile">
                We help growing
                <br />
                brands look as
                <br />
                valuable as they
                <br />
                actually are
              </span>
            </h1>
            <p className="hero-sub">
              Refresh your visual identity and website with strategic design, clear positioning, and
              standout visual direction, creating a digital presence that feels polished, credible,
              and aligned with the level your brand has already reached.
            </p>
            <a href="#contact" className="btn-blue">
              Elevate My Brand
            </a>
          </section>
        </div>

        <section className="z-section reveal" data-theme="light">
          <div className="reveal-content">
            <div
              className="ticker-wrapper"
              data-cursor-label="Drag"
              ref={tickerRef}
              onMouseDown={onDown}
              onMouseMove={onMove}
              onMouseUp={onUp}
              onMouseLeave={onUp}
              onTouchStart={onDown}
              onTouchMove={onMove}
              onTouchEnd={onUp}
            >
              <div className="ticker-track">
                {[...tickerImages, ...tickerImages].map((src, i) => (
                  <div key={i} className="ticker-item">
                    <img src={src} alt="Premium Web Design and Brand Identity Portfolio Example" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProblemSection />

        <section className="z-section reveal solve-section" data-theme="light">
          <div className="solve-title-col reveal-title">
            <h2 className="section-title">
              HOW I SOLVE
              <br />
              YOUR PROBLEMS
            </h2>
          </div>
          <div className="phases reveal-content">
            {solveSteps.map((s) => (
              <div key={s.label} className="phase-card">
                <div className="phase-card-top">
                  <div className="phase-label">{s.label}</div>
                  <ul className="phase-list">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
                <div className="phase-card-bottom">
                  <div className="tagline">{s.tagline}</div>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section reveal website-projects-section" id="work" data-theme="light">
          <div className="reveal-title section-header">
            <h2 className="section-title">
              WEBSITE
              <br />
              PROJECTS
            </h2>
            <div className="section-subtitle">
              I TURN BOLD IDEAS INTO WEBSITES
              <br />
              YOU'RE PROUD TO SHARE
            </div>
          </div>
          <div className="projects reveal-content">
            {websiteProjects.map((pr) => (
              <div
                key={pr.name}
                data-cursor-label="View"
                className={`project-card ${activeProjects.has(pr.name) ? "is-active" : ""}`}
                onClick={() => toggleProject(pr.name)}
              >
                <img src={pr.img} alt={pr.name} />
                <div className="project-info">
                  <div className="project-name">{pr.name}</div>
                  <div className="project-type">{pr.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section reveal visual-brand-section" data-theme="light">
          <div className="reveal-title section-header">
            <h2 className="section-title">
              VISUAL BRAND
              <br />
              PROJECTS
            </h2>
            <div className="section-subtitle">
              I CREATE ICONIC VISUAL IDENTITIES THAT
              <br />
              DEFINE YOUR BRAND'S UNIQUE ESSENCE
            </div>
          </div>
          <div className="projects reveal-content">
            {brandProjects.map((pr) => (
              <div
                key={pr.name}
                data-cursor-label="View"
                className={`project-card ${activeProjects.has(pr.name) ? "is-active" : ""}`}
                onClick={() => toggleProject(pr.name)}
              >
                <img src={pr.img} alt={pr.alt} />
                <div className="project-info">
                  <div className="project-name">{pr.name}</div>
                  <div className="project-type">{pr.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section process-section reveal" data-theme="light">
          <div className="process-title-col reveal-title">
            <h2>
              CREATIVE
              <br />
              PROCESS
            </h2>
          </div>
          <div className="process-steps-col reveal-content">
            {processSteps.map((s, i) => (
              <div key={s.num} className="process-step">
                <div className="process-header">
                  <div className="process-name">{s.name}</div>
                </div>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section pricing-section reveal" id="pricing" data-theme="light">
          <div className="pricing-title-col reveal-title">
            <h2>
              PICK THE PLAN
              <br />
              THAT FITS
            </h2>
          </div>
          <div className="pricing-grid reveal-content">
            <div className="price-card">
              <div className="price-card-header">
                <span className="plan-name">Landing Page</span>
              </div>
              <div className="price-card-body">
                <div className="price-amount">$1000</div>
                <div className="price-label">What's included</div>
                <ul className="price-features">
                  {[
                    "15 days delivery",
                    "Figma wireframe & visual design",
                    "Landing page built in Framer",
                    "Fully responsive (mobile + desktop)",
                    "Animation & scroll effects",
                    "Copywriting assistance",
                    "Basic SEO optimization",
                  ].map((f) => (
                    <li key={f}>
                      <span className="check">
                        <CheckIcon />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                  <li className="add-on">
                    <span className="check">
                      <PlusIcon />
                    </span>
                    <span>Visual Identity Add-on available ($1k)</span>
                  </li>
                </ul>
                <a href="#contact" className="btn-white">
                  Start Landing Page
                </a>
              </div>
            </div>

            <div className="price-card">
              <div className="price-card-header">
                <span className="plan-name">Multipage</span>
              </div>
              <div className="price-card-body">
                <div className="price-amount">$2500</div>
                <div className="price-label">What's included</div>
                <ul className="price-features">
                  {[
                    "30 days delivery",
                    "Everything in Landing Page",
                    "Up to 8 custom pages",
                    "CMS setup & training",
                    "Custom imagery & art direction",
                    "Brand alignment workshop",
                    "Advanced SEO & analytics",
                  ].map((f) => (
                    <li key={f}>
                      <span className="check">
                        <CheckIcon />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                  <li className="add-on">
                    <span className="check">
                      <PlusIcon />
                    </span>
                    <span>Visual Identity Add-on available ($1k)</span>
                  </li>
                </ul>
                <a href="#contact" className="btn-white">
                  Start Multipage
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="z-section contact-section" id="contact" data-theme="blue">
          <div className="contact-grid">
            <div>
              <h2>
                LET'S FIGURE IT OUT
                <br />
                — TOGETHER
              </h2>
            </div>
            <div>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted! (API temporarily disabled for testing)");
                  e.currentTarget.reset();
                }}
              >
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="email@company.com" required />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input name="company" type="text" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="btn-form-submit">
                  Elevate My Brand
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="z-section about-section reveal" data-theme="dark">
          <div className="about-inner reveal-title">
            <h2>
              MORE ABOUT
              <br />
              ZANTANA STUDIO
            </h2>
            <img
              className="about-photo"
              src="/about-photo.jpg"
              alt="Ivo, founder of Zantana"
            />
            <div className="about-headline">
              I’m Ivo — founder of Zantana, a studio focused on building elevated brand identities
              and strategic digital experiences for modern businesses.
            </div>
            <p className="about-body">
              My approach combines visual direction, positioning, and clarity to create brands that
              not only look premium, but feel aligned with the level they’ve already reached. Every
              project is crafted with intention, balancing aesthetics, perception, and functionality
              to help brands build trust, stand out online, and grow with confidence.
            </p>
            <a href="#contact" className="btn-white-outline">
              Start a project
            </a>
          </div>
        </section>

        <section className="z-section faq-section reveal" data-theme="light">
          <div className="faq-title-col reveal-title">
            <h2>
              Frequently
              <br />
              asked questions
            </h2>
          </div>
          <div className="faq-list reveal-content">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaqs.has(i) ? "open" : ""}`}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="z-footer" data-theme="light">
          <div className="footer-grid">
            {/* Left: Blue CTA Box */}
            <div className="footer-blue-box">
              <div className="footer-cta-top">
                <h2 className="footer-cta">
                  Ready to create a brand that feels impossible to ignore?
                </h2>
                <p className="footer-cta-body">
                  Let’s explore how your brand could look, feel, and perform with the right strategic
                  direction behind it, combining visual identity, digital experience, and intentional
                  design to create a presence people instantly trust, remember, and connect with.
                </p>
                <a href="#contact" className="btn-white">
                  Start Your Brand Upgrade
                </a>
              </div>

              <div className="footer-links desktop-only-links">
                {[
                  ["INSTAGRAM ↗", "https://instagram.com/zantana.co"],
                  ["LINKEDIN ↗", "https://linkedin.com/in/ivozantana"],
                  ["CONTRA ↗", "https://contra.com/zantanastudio"],
                  ["X ↗", "https://x.com/zantanastudio"],
                  ["EMAIL ↗", "mailto:zantanadesign@gmail.com"],
                  ["WHATSAPP ↗", "https://wa.link/l9pzfv"],
                ].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Wordmark */}
            <div className="footer-right">
              <div className="footer-links mobile-only-links">
                {[
                  ["INSTAGRAM ↗", "https://instagram.com/zantana.co"],
                  ["LINKEDIN ↗", "https://linkedin.com/in/ivozantana"],
                  ["CONTRA ↗", "https://contra.com/zantanastudio"],
                  ["X ↗", "https://x.com/zantanastudio"],
                  ["EMAIL ↗", "mailto:zantanadesign@gmail.com"],
                  ["WHATSAPP ↗", "https://wa.link/l9pzfv"],
                ].map(([label, href]) => (
                  <a key={`mob-${label}`} href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ))}
              </div>
              <div className="footer-wordmark">
                <ZWordmark />
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
