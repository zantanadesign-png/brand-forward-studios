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
  <img
    src="/logo-icon.png"
    alt="Zantana Logo"
    className={className}
  />
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

function Index() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 899px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, []);


  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [activeProjects, setActiveProjects] = useState<Set<string>>(new Set());
  const toggleProject = (name: string) =>
    setActiveProjects((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const cursor = cursorRef.current;
    const label = cursorLabelRef.current;
    if (!cursor || !label) return;

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let cx = mx,
      cy = my;
    let targetEl: HTMLElement | null = null;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = (e.target as HTMLElement)?.closest<HTMLElement>("[data-magnetic]");
      targetEl = t;
      const labelTarget = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor-label]");
      if (labelTarget) {
        label.textContent = labelTarget.getAttribute("data-cursor-label") || "View";
        label.style.opacity = "1";
        label.style.transform = "translate(0%, 0%) scale(1)";
        cursor.style.opacity = "0";
      } else {
        label.style.opacity = "0";
        label.style.transform = "translate(0%, 0%) scale(.6)";
        cursor.style.opacity = "1";
      }
    };
    const tick = () => {
      let tx = mx,
        ty = my;
      if (targetEl) {
        const r = targetEl.getBoundingClientRect();
        const ex = r.left + r.width / 2;
        const ey = r.top + r.height / 2;
        tx = mx + (ex - mx) * 0.3;
        ty = my + (ey - my) * 0.3;
        cursor.classList.add("is-magnetic");
      } else {
        cursor.classList.remove("is-magnetic");
      }
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(25px, 25px)`;
      label.style.left = `${mx + 20}px`;
      label.style.top = `${my + 20}px`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (i: number) =>
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const tickerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      if (!drag.current.down && el) {
        el.scrollLeft += 0.6;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

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
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (el.scrollLeft < 0) el.scrollLeft += half;
  };
  const onUp = () => {
    drag.current.down = false;
    tickerRef.current?.classList.remove("dragging");
  };

  const [problemProgress, setProblemProgress] = useState(0);
  const problemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile) {
      setProblemProgress(1);
      return;
    }
    const handleScroll = () => {
      const el = problemRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      // Calculate progress from 0 (top of section enters) to 1 (bottom of section leaves)
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setProblemProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        :root { --blue: #1041D7; --black: #000; --white: #fff; --p: 40px; --pv: 40px; --g: 40px; }

        /* Section-scoped themes */
        [data-theme="light"] { --bg: #fff; --text: #000; --surface: #f2f2f2; --muted: #333; background: #fff; color: #000; }
        [data-theme="dark"] { --bg: #000; --text: #fff; --surface: #1a1a1a; --muted: #aaa; background: #000; color: #fff; }
        [data-theme="blue"] { --bg: #1041D7; --text: #fff; --surface: rgba(255,255,255,0.1); --muted: rgba(255,255,255,0.8); background: #1041D7; color: #fff; }

        .z-root *, .z-root *::before, .z-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .z-root { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 500; line-height: 23px; overflow-x: clip; min-height: 100vh; letter-spacing: 0.3px; }

        .z-cursor, .z-cursor-label { display: none; }
        @media (hover: hover) and (pointer: fine) {
          .z-cursor { display: block; position: fixed; top: 0; left: 0; width: 12px; height: 12px; border-radius: 2px; background: #fff; mix-blend-mode: difference; pointer-events: none; z-index: 9999; transition: width .2s, height .2s, opacity .2s; will-change: transform; }
          .z-cursor.is-magnetic { width: 36px; height: 36px; }
          .z-cursor-label { display: block; position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998; background: #000; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px; border-radius: 4px; opacity: 0; transform: translate(0%, 0%) scale(.6); transition: opacity .2s, transform .2s; }
        }

        /* Typography */
        .z-root h1 { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; line-height: 1; letter-spacing: -1px; font-size: 90px; }
        .z-root h2 { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; line-height: 1; letter-spacing: -1px; font-size: 75px; }
        .z-root p { font-size: 18px; font-weight: 500; line-height: 23px; }
        .z-section-sub { font-size: 18px; font-weight: 600; letter-spacing: 0.3px; text-transform: uppercase; color: var(--blue); margin-bottom: 16px; }

        /* Section base — 40px lateral, 45px vertical */
        .z-section { padding: var(--pv) var(--p); display: flex; flex-direction: column; gap: var(--g); }


        /* Navbar */
        .z-root nav { display: flex; justify-content: space-between; align-items: center; padding: 24px var(--p); opacity: 0; transform: translateY(-12px); animation: zNavIn .6s ease 3.1s forwards; }
        .nav-logo { font-weight: 800; font-size: 20px; letter-spacing: -0.5px; display: flex; align-items: center; }
        .nav-logo img { width: 50px; height: 28px; object-fit: contain; object-position: left center; }
        .nav-links { display: flex; gap: 24px; list-style: none; align-items: center; }
        .nav-links a { text-decoration: none; font-size: 18px; font-weight: 600; letter-spacing: 0.3px; text-transform: uppercase; color: var(--text); transition: color .2s, gap .2s; display: inline-flex; align-items: center; gap: 0; position: relative; cursor: pointer; }
        .nav-links a::before { content: ''; width: 0; height: 6px; border-radius: 2px; background: var(--blue); opacity: 0; transition: opacity .2s, width .2s; }
        .nav-links a:hover { color: var(--blue); gap: 8px; }
        .nav-links a:hover::before { opacity: 1; width: 6px; }

        @keyframes zNavIn { to { opacity: 1; transform: translateY(0); } }
        @keyframes zHeroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Hero viewport wrapper */
        .hero-viewport { height: 100vh; display: flex; flex-direction: column; overflow: hidden; }

        /* Hero */
        .hero { flex: 1; padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; gap: 20px; padding-bottom: 40px; box-sizing: border-box; }
        .hero-available { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 500; letter-spacing: 0.3px; text-transform: uppercase; color: var(--blue); opacity: 0; animation: zHeroIn .6s ease 2.4s forwards; }
        .hero-dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; flex-shrink: 0; animation: z-pulse 2s ease-in-out infinite; }
        @keyframes z-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.6; transform:scale(1.3); } }
        .hero h1 { font-size: 90px; opacity: 0; animation: zHeroIn .7s ease 2.5s forwards; }
        .hero-h1-mobile { display: none; }
        .hero-h1-desktop { display: inline; }
        .hero-sub { font-size: 18px; line-height: 23px; color: #000; max-width: 600px; opacity: 0; animation: zHeroIn .6s ease 2.8s forwards; }
        .btn-black, .btn-blue, .btn-white, .btn-white-outline, .btn-form-submit, .btn-form-reset { display: inline-flex; align-items: center; gap: 0; font-weight: 600; font-size: 18px; letter-spacing: 0.3px; text-transform: uppercase; padding: 10px 15px; border-radius: 4px; text-decoration: none; cursor: pointer; transition: background .18s, border-color .18s, color .18s, gap .2s; border: 1px solid transparent; position: relative; align-self: flex-start; }
        .btn-black::before, .btn-blue::before, .btn-white::before, .btn-white-outline::before, .btn-form-submit::before, .btn-form-reset::before { content: ''; width: 0; height: 6px; border-radius: 2px; opacity: 0; transition: opacity .2s, width .2s; }
        .btn-black:hover, .btn-blue:hover, .btn-white:hover, .btn-white-outline:hover, .btn-form-submit:hover, .btn-form-reset:hover { gap: 8px; }
        .btn-black:hover::before, .btn-blue:hover::before, .btn-white:hover::before, .btn-white-outline:hover::before, .btn-form-submit:hover::before, .btn-form-reset:hover::before { opacity: 1; width: 6px; }

        .btn-black { background: var(--text); color: #fff; border-color: var(--text); }
        .btn-black::before { background: #fff; }
        .btn-black:hover { background: var(--blue); border-color: var(--blue); color: #fff; }
        .btn-black:hover::before { background: #fff; }
        .btn-black.no-anim, .btn-blue.no-anim { opacity: 1; animation: none; }

        .btn-blue { background: var(--blue); color: #fff; border-color: var(--blue); opacity: 0; animation: zHeroIn .6s ease 3.0s forwards; }
        .btn-blue::before { background: #fff; }
        .btn-blue:hover { background: #000; border-color: #000; color: #fff; }
        .btn-blue:hover::before { background: #fff; }
        .nav-links .btn-blue { color: #fff; }
        .nav-links .btn-blue:hover { color: #fff; }

        /* Ticker */
        .ticker-wrapper { overflow: hidden; padding: 20px 0; cursor: grab; user-select: none; margin-left: calc(var(--p) * -1); margin-right: calc(var(--p) * -1); width: calc(100% + (var(--p) * 2)); }
        .ticker-wrapper.dragging { cursor: grabbing; }
        .ticker-track { display: flex; gap: 16px; width: max-content; }
        .ticker-item { width: 400px; height: 260px; border-radius: 5px; overflow: hidden; flex-shrink: 0; pointer-events: none; }
        .ticker-item img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* Reveal system */
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity .8s ease, transform .8s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .reveal-content { opacity: 0; transform: translateY(20px); transition: opacity .8s ease .2s, transform .8s ease .2s; }
        .reveal.is-visible .reveal-content { opacity: 1; transform: translateY(0); }

        /* Problem Section (Scrollytelling) */
        .problem-section { height: 600vh; position: relative; padding: 0; }
        .problem-sticky { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--blue); color: #fff; padding: var(--p); overflow: hidden; }
        .problem-texts { display: flex; flex-direction: column; gap: 15px; text-align: center; justify-content: center; align-items: center; width: 100%; height: 100%; }
        .problem-item { opacity: 0; transform: translateY(30px); transition: all .8s cubic-bezier(0.16, 1, 0.3, 1); }
        .problem-item.is-active { opacity: 1; transform: translateY(0); }
        .problem-section h2 { font-size: 75px; text-transform: uppercase; }

        /* Mobile/Desktop visibility for problem section */
        .problem-mobile { display: none; }
        .problem-desktop { display: block; }

        @media (max-width: 899px) {
          .problem-section { height: auto !important; position: relative; padding: 40px 20px 20px 20px !important; background: #1041D7 !important; }
          .problem-sticky { position: static !important; height: auto !important; background: transparent !important; color: #fff !important; padding: 0 !important; }
          .problem-desktop { display: none !important; }
          .problem-mobile { display: flex !important; flex-direction: column; gap: 40px !important; text-align: left; }
          .problem-mobile h2 { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; font-size: 30px !important; line-height: 1; color: #fff !important; margin: 0 !important; padding: 0 !important; }
          .problem-mobile-text { font-family: 'Inter', sans-serif; font-size: 18px !important; font-weight: 500; line-height: 23px; color: #fff !important; margin: 0 !important; padding: 0 !important; letter-spacing: 0.3px; }
          .problem-mobile-text .uppercase-part { text-transform: uppercase; }
          .footer-cta { font-size: 38px; }
          .z-footer { padding: 20px; }
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-blue-box { padding: 20px !important; min-height: auto; width: 100%; box-sizing: border-box; }
          .footer-links { align-items: flex-start; }
          .footer-right { align-items: center; justify-content: center; width: 100%; }
          .footer-wordmark { justify-content: center; align-items: center; width: 100%; }
          .footer-wordmark img { object-position: center bottom; max-width: 100%; width: 100%; }
          .mobile-hidden { display: none !important; }
        }

        /* Solve Section */
        .solve-section { padding-top: 80px; }
        .solve-title-col { text-align: center; width: 100%; margin-bottom: 0; }

        /* Section title block */
        .section-title { font-size: 75px; }
        .section-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; margin-bottom: 0; width: 100%; }
        .section-subtitle { max-width: 50%; text-align: right; font-size: 18px; font-weight: 500; text-transform: uppercase; line-height: 1.4; color: var(--text); padding-top: 0; }
        @media (max-width: 899px) {
          .section-header { flex-direction: column; gap: 16px; align-items: flex-start; }
          .section-subtitle { display: none; }
        }
        .phases { display: flex; flex-direction: column; gap: 20px; }
        .projects { display: flex; flex-direction: column; gap: 20px; }
        .see-all-wrap { display: flex; justify-content: center; padding: 0 var(--p) var(--pv); }

        .phase-card { display: flex; flex-direction: column; gap: 20px; }
        .phase-card-top { background: var(--blue); color: #fff; padding: 20px; flex: 1; display: flex; flex-direction: column; gap: 20px; border-radius: 5px; }
        .phase-label { font-size: 18px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 0px; }
        .phase-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .phase-list li { font-size: 18px; font-weight: 500; display: flex; align-items: center; gap: 10px; }
        .phase-list li::before { content: '↗'; font-weight: 700; }
        .phase-card-bottom { background: #000; color: #fff; padding: 20px; display: flex; flex-direction: column; gap: 24px; justify-content: center; border-radius: 5px; }
        .phase-card-bottom .tagline { font-weight: 500; font-size: 18px; text-transform: uppercase; line-height: 23px; color: #fff; }
        .phase-card-bottom p { font-size: 18px; font-weight: 500; line-height: 23px; color: #fff; }

        .project-card { background: var(--surface); border-radius: 5px; overflow: hidden; cursor: pointer; transition: background .25s; }
        .project-card:hover, .project-card.is-active { background: var(--blue); }
        .project-card:hover .project-info, .project-card.is-active .project-info { background: var(--blue); }
        .project-card:hover .project-name, .project-card:hover .project-type, .project-card.is-active .project-name, .project-card.is-active .project-type { color: #fff; }
        .project-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
        .project-info { padding: 20px; transition: background .25s; }
        .project-name { font-weight: 600; font-size: 18px; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 2px; transition: color .25s; }
        .project-type { font-size: 18px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.8; transition: color .25s, opacity .25s; }

        /* Process */
        .process-steps-col { display: flex; flex-direction: column; gap: 20px; }
        .process-step { background: var(--blue); border-radius: 5px; padding: 20px; color: #fff; display: flex; flex-direction: column; gap: 20px; justify-content: center; }
        .process-name { font-weight: 600; font-size: 18px; text-transform: uppercase; letter-spacing: 2px; color: #fff; }
        .process-step p { font-size: 18px; font-weight: 500; line-height: 23px; color: #fff; }

        /* Pricing */
        .pricing-section { }
        .pricing-grid { display: flex; flex-direction: column; gap: 20px; }
        .price-card { background: var(--blue); border-radius: 5px; color: #fff; overflow: hidden; }
        .price-card-header { padding: 20px; border-bottom: 2px solid #fff; }
        .plan-name { font-size: 18px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; }
        .price-card-body { padding: 20px; }
        .price-amount { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; font-size: 60px; line-height: 1; margin-bottom: 20px; }
        .price-delivery { font-size: 18px; font-weight: 700; margin-bottom: 20px; }
        .price-label { font-size: 18px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
        .price-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 18px; font-weight: 500; line-height: 23px; }
        .price-features li.add-on { opacity: .6; }
        .check { width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 3px; }
        .check svg { width: 18px; height: 18px; }
        .btn-white { background: #fff; color: var(--blue); border-color: #fff; }
        .btn-white::before { background: var(--blue); }
        .btn-white:hover { background: #000; border-color: #000; color: #fff; }
        .btn-white:hover::before { background: #fff; }

        /* FAQ */
        .faq-section { padding-top: 80px; }
        .faq-list { display: flex; flex-direction: column; gap: 20px; }
        .faq-item { background: var(--surface); border-radius: 5px; overflow: hidden; transition: background .2s; }
        .faq-item.open { background: var(--blue); }
        .faq-question { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 20px; text-align: left; }
        .faq-question span.faq-q-text { font-size: 18px; font-weight: 600; letter-spacing: .5px; text-transform: uppercase; line-height: 23px; flex: 1; color: var(--text); transition: color .2s; }
        .faq-item.open .faq-question span.faq-q-text { color: #fff; }
        .faq-icon { width: 20px; height: 20px; flex-shrink: 0; position: relative; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .faq-icon::before, .faq-icon::after { content: ''; position: absolute; background: var(--text); transition: transform .25s, opacity .25s, background .2s; }
        .faq-icon::before { width: 14px; height: 2px; }
        .faq-icon::after { width: 2px; height: 14px; }
        .faq-item.open .faq-icon::before, .faq-item.open .faq-icon::after { background: #fff; }
        .faq-item.open .faq-icon::after { opacity: 0; transform: rotate(90deg); }
        .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; padding: 0 20px; }
        .faq-answer > div { overflow: hidden; min-height: 0; }
        .faq-answer p { font-size: 18px; font-weight: 500; line-height: 23px; padding-bottom: 20px; color: var(--text); transition: color .2s; }
        .faq-item.open .faq-answer { grid-template-rows: 1fr; }
        .faq-item.open .faq-answer p { color: #fff; }

        /* About */
        .about-section { padding-top: 80px; padding-bottom: 80px; }
        .about-inner { max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
        .about-photo { width: 300px; border-radius: 5px; display: block; aspect-ratio: 3/4; object-fit: cover; object-position: top; filter: grayscale(100%); }
        .about-headline { font-weight: 500; font-size: 18px; line-height: 23px; text-transform: uppercase; letter-spacing: .3px; }
        .about-body { font-size: 18px; font-weight: 500; line-height: 23px; }
        .btn-white-outline { background: #fff; color: #000; border-color: #fff; align-self: center; }
        .btn-white-outline::before { background: #000; }
        .btn-white-outline:hover { background: var(--blue); border-color: var(--blue); color: #fff; }
        .btn-white-outline:hover::before { background: #fff; }

        /* Contact */
        .contact-section { padding-top: 80px; padding-bottom: 80px; }
        .contact-section h2 { color: var(--text); }
        .contact-section .z-section-sub { color: var(--muted); }
        .contact-subtitle { font-size: 18px; line-height: 23px; color: var(--muted); max-width: 600px; }
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .contact-form { background: transparent; border: none; padding: 0; display: flex; flex-direction: column; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 18px; font-weight: 500; letter-spacing: 0.3px; text-transform: none; color: var(--text); }
        .form-group input, .form-group textarea { background: var(--surface); border: none; border-radius: 5px; padding: 14px; font-family: 'Inter', sans-serif; font-size: 18px; color: var(--text); width: 100%; outline: none; resize: none; }
        .form-group input::placeholder, .form-group textarea::placeholder { color: var(--muted); }
        .form-group textarea { min-height: 110px; }
        .btn-form-submit { background: #fff; color: var(--blue); border-color: #fff; width: 100%; justify-content: center; margin-top: 4px; align-self: stretch; }
        .btn-form-submit::before { background: var(--blue); }
        .btn-form-submit:hover { background: #000; border-color: #000; color: #fff; }
        .btn-form-submit:hover::before { background: #fff; }
        .btn-form-submit:disabled { opacity: .6; cursor: not-allowed; }

        .btn-form-reset { background: transparent; color: var(--text); border-color: var(--muted); }
        .btn-form-reset::before { background: var(--text); }
        .btn-form-reset:hover { background: var(--blue); border-color: var(--blue); color: #fff; }
        .btn-form-reset:hover::before { background: #fff; }
        .form-error-msg { background: rgba(255,0,0,.15); color: #fff; font-size: 13px; font-weight: 600; padding: 12px 16px; border-radius: 5px; text-align: center; }
        .form-success { display: flex; flex-direction: column; gap: 8px; animation: formFadeIn .4s ease forwards; }
        .form-success h3 { font-size: 18px; font-weight: 700; color: #fff; letter-spacing: 1px; }
        .form-success p { font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.4; }
        @keyframes formFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* Footer */
        .z-footer { background: var(--bg); padding: 40px; min-height: 100vh; display: flex; flex-direction: column; gap: 40px; }
        .footer-grid { display: grid; grid-template-columns: 60fr 40fr; gap: 40px; align-items: stretch; flex: 1; }
        .footer-blue-box { background: var(--blue); border-radius: 5px; padding: 40px; display: flex; flex-direction: column; justify-content: space-between; min-height: 600px; }
        .footer-cta-top { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        .footer-cta { font-family: 'Anton', sans-serif; font-size: 80px; line-height: 0.9; color: #fff; text-transform: uppercase; margin: 0; }
        .footer-cta-body { font-size: 20px; font-weight: 500; line-height: 1.4; color: #fff; max-width: 480px; margin: 0; }
        .footer-right { display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end; }
        .footer-links { display: flex; flex-direction: row; flex-wrap: wrap; gap: 24px; padding-top: 40px; justify-content: space-between; width: 100%; }
        .footer-links a { text-decoration: none; font-size: 16px; font-weight: 600; letter-spacing: 0.3px; text-transform: uppercase; color: #fff; transition: opacity .2s, gap .2s; display: inline-flex; align-items: center; gap: 0; position: relative; }
        .footer-links a::before { content: ''; width: 0; height: 6px; border-radius: 2px; background: #fff; opacity: 0; transition: opacity .2s, width .2s; }
        .footer-links a:hover { color: #000; gap: 8px; opacity: 1; }
        .footer-links a:hover::before { opacity: 1; width: 6px; background: #000; }
        .footer-wordmark { width: 100%; display: flex; justify-content: flex-end; align-items: flex-end; margin-top: auto; }
        .footer-wordmark img { width: 100%; max-width: 800px; height: auto; display: block; object-fit: contain; object-position: right bottom; }
        .mobile-only-links { display: none; }

        /* Desktop */
        @media (min-width: 900px) {
          .hero h1 { font-size: 90px; max-width: 1100px; line-height: 0.95; }
          .hero-sub { font-size: 18px; }
          .phases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .phase-card { display: flex; flex-direction: column; border-radius: 5px; overflow: hidden; }
          .phase-card-bottom { flex: 1; }
          .projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .project-card img { height: 280px; }
          .process-section { display: grid; grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }
          .process-section .process-title-col { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 80px; align-self: start; }
          .process-steps-col { display: flex; flex-direction: column; gap: 20px; padding-bottom: 60px; }
          .process-step { height: auto; padding: 20px; }
          .pricing-section { display: grid; grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; padding-bottom: 80px; }
          .pricing-title-col { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; align-self: start; }
          .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .faq-section { display: grid; grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }
          .faq-title-col { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; align-self: start; }
          .about-section { display: flex; flex-direction: column; align-items: center; }
          .contact-grid { grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }

          .footer-desc p { font-size: 18px; }
        }

        /* Mobile */
        @media (max-width: 899px) {
          :root { --p: 24px; --pv: 20px !important; --g: 40px !important; }
          .z-section, .z-footer, .problem-sticky { padding-top: 20px !important; padding-bottom: 20px !important; gap: 40px !important; }
          .hero { padding-left: var(--p); padding-right: var(--p); gap: 20px !important; }
          .z-root h1, .hero h1 { font-size: 40px !important; line-height: 1; letter-spacing: 0 !important; }
          .hero-h1-desktop { display: none !important; }
          .hero-h1-mobile { display: inline !important; }
          .hero-sub { font-size: 18px; font-weight: 500; }
          .z-root h2, .section-title { font-size: 30px !important; letter-spacing: 0 !important; }
          .z-root p { font-size: 18px !important; font-weight: 500; font-family: 'Inter', sans-serif !important; line-height: 20px !important; }
          .z-root a { font-size: 18px; font-weight: 600; }
          .footer-cta { font-size: 40px; }
          .price-amount { font-size: 48px; }
          .nav-links { gap: 20px; }
          .z-footer { padding-left: var(--p); padding-right: var(--p); min-height: 0; }
          .footer-grid { grid-template-rows: auto auto; flex: 0 0 auto; }
          .footer-blue-box { padding: 20px !important; min-height: auto; height: auto; width: 100%; box-sizing: border-box; display: block; }
          .footer-blue-box .desktop-only-links { display: none; }
          .footer-cta-top { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
          .footer-right { align-items: flex-start; justify-content: flex-start; width: 100%; gap: 24px; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px; }
          .footer-wordmark { justify-content: center; align-items: center; width: 100%; }
          .footer-wordmark img { object-position: center bottom; max-width: 100%; width: 100%; }
          .mobile-only-links { display: flex !important; flex-direction: column; gap: 16px; align-items: flex-start; padding-top: 0; width: 100%; }
          .mobile-only-links a { color: #000; }
          .mobile-only-links a::before { background: #000; }
          .mobile-only-links a:hover { color: var(--blue); }
          .mobile-only-links a:hover::before { background: var(--blue); width: 6px; opacity: 1; }

          .process-title-col, .solve-title-col { position: static; background: transparent; padding: 0; margin: 0; text-align: left; }
          .process-steps-col, .solve-section .phases { position: relative; z-index: 7; }
          .solve-section, .process-section { gap: 40px !important; }
          .process-step { position: static; }
          .process-steps-col { padding-bottom: 0; }

          .phases > .phase-card { position: static; }
          .solve-section .phases { padding-bottom: 0; }
          .solve-section { padding-top: 20px !important; padding-bottom: 40px !important; background: #1041D7 !important; }
          .solve-section .section-title { color: #fff !important; }
          .solve-section .phase-card-top { color: #fff !important; background: #0b3ac2 !important; }
          .solve-section .phase-card-bottom { color: #fff !important; }
          .solve-section .phase-card-top *, .solve-section .phase-card-bottom * { color: #fff !important; }
          .solve-section .phase-label, .solve-section .phase-list li, .solve-section .tagline, .solve-section .phase-card-bottom p { color: #fff !important; }
          .process-section { padding-top: 20px !important; padding-bottom: 20px !important; }
          .faq-section { padding-top: 40px !important; padding-bottom: 20px !important; }
          .contact-section, .about-section { padding-top: 40px !important; padding-bottom: 40px !important; }
          .pricing-section { padding-top: 20px !important; padding-bottom: 40px !important; }
          .section-header { margin-bottom: 0 !important; }

          /* Visual Brand Projects — bottom padding 20px */
          .visual-brand-section { padding-bottom: 20px !important; }
          .website-projects-section { padding-top: 40px !important; }
        }
      `}</style>

      <div ref={cursorRef} className="z-cursor" aria-hidden />
      <div ref={cursorLabelRef} className="z-cursor-label" aria-hidden>
        View
      </div>
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
            <div className="nav-logo">
              <ZLogo />
            </div>
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
              <span>Brand • Websites</span>
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

        <section ref={problemRef} className="problem-section" data-theme="blue">
          {/* Desktop: scrollytelling */}
          <div className="problem-sticky problem-desktop">
            <div className="problem-texts">
              <h2 className={`problem-item ${problemProgress > 0.15 ? "is-active" : ""}`}>
                Your company grew.
              </h2>
              <h2 className={`problem-item ${problemProgress > 0.35 ? "is-active" : ""}`}>
                Your service got better.
              </h2>
              <h2 className={`problem-item ${problemProgress > 0.55 ? "is-active" : ""}`}>
                Your team has scaled.
              </h2>
              <p className={`problem-item ${problemProgress > 0.70 ? "is-active" : ""}`}>
                But your website and visual identity still don't
                <br />
                reflect the level you operate at today.
              </p>
            </div>
          </div>
          {/* Mobile: static layout */}
          <div className="problem-mobile">
            <h2>Facing this problem?</h2>
            <p className="problem-mobile-text">
              <span className="uppercase-part">
                Your company grew.
                <br />
                Your service got better.
                <br />
                Your team has scaled.
              </span>
              <br />
              But your website and visual identity still don't reflect the level you operate at
              today.
            </p>
          </div>
        </section>

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

        <section className="z-section contact-section reveal" id="contact" data-theme="blue">
          <div className="contact-grid">
            <div className="reveal-title">
              <h2>
                LET'S FIGURE IT OUT
                <br />
                — TOGETHER
              </h2>
            </div>
            <div className="reveal-content">
              <form
                className="contact-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("sending");
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  formData.append("access_key", "ff788bc1-0eed-4d8a-b7db-fd1ad8c08a54");
                  formData.append("subject", `New project inquiry from ${formData.get("name")}`);
                  formData.append("from_name", "Zantana Studio Website");
                  const controller = new AbortController();
                  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout
                  try {
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData,
                      signal: controller.signal,
                    });
                    clearTimeout(timeoutId);
                    const data = await res.json();
                    if (data.success) {
                      setFormStatus("sent");
                      form.reset();
                    } else {
                      setFormStatus("error");
                    }
                  } catch (error) {
                    clearTimeout(timeoutId);
                    if (error.name === 'AbortError') {
                      setFormStatus("error");
                    } else {
                      setFormStatus("error");
                    }
                  }
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

                {formStatus === "sent" ? (
                  <div className="form-success">
                    <h3>MESSAGE SENT!</h3>
                    <p>
                      Thank you for reaching out. I'll get back to you within 24–48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn-form-submit"
                      disabled={formStatus === "sending"}
                    >
                      {formStatus === "sending" ? "Sending..." : "Elevate My Brand"}
                    </button>
                    {formStatus === "error" && (
                      <div className="form-error-msg">Something went wrong. Please try again.</div>
                    )}
                  </>
                )}
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
