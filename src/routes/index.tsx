import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "(z) — WEBSITES BUILT" },
      {
        name: "description",
        content:
          "Zantana Studio — strategic websites and visual identity. Live in weeks, not months.",
      },
      { property: "og:title", content: "(z) — WEBSITES BUILT" },
      {
        property: "og:description",
        content:
          "Strategic websites and visual identity. Live in weeks, not months.",
      },
    ],
    links: [
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
  "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=400&q=80",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=400&q=80",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
];

const phases = [
  {
    label: "Phase 1: Art Direction",
    items: ["Wireframe workshop", "Visual direction concepts", "Design approval", "Brand alignment"],
    tagline: "CLEAR DESIGN. BUILT TO CONVERT.",
    body: "I design strategic websites that explain your value, earn trust, and scale with your product.",
  },
  {
    label: "Phase 2: Design",
    items: ["Homepage design", "Custom imagery", "Additional pages", "Design refinements"],
    tagline: "ONLINE IN WEEKS, NOT MONTHS.",
    body: "You don't need a 3-month sprint. I deliver fast, strategic sites. Live and working in weeks.",
  },
  {
    label: "Phase 3: Development",
    items: ["Platform build", "CMS setup", "CMS training", "Launch"],
    tagline: "GET A SITE THAT WORKS DAY ONE.",
    body: "No dev handoffs, no broken parts. I design, build, and deliver sites that work from day one.",
  },
];

const websiteProjects = [
  { name: "LATE", type: "Catering Services", img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" },
  { name: "BLOOM", type: "Restaurant & Bar", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { name: "ORBIT", type: "SaaS Platform", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { name: "PULSE", type: "Fitness Studio", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" },
  { name: "VERA", type: "Skincare Brand", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
  { name: "NORTH", type: "Travel Agency", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80" },
];

const brandProjects = [
  { name: "SKIP", type: "Events Ticketing", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { name: "NOVA", type: "Brand Identity", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" },
  { name: "FERN", type: "Botanical Studio", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80" },
];

const processSteps = [
  { num: "01", name: "DISCOVERY", body: "We dig deep into your brand, goals, and audience. Every great site starts with the right questions — and the honesty to answer them." },
  { num: "02", name: "CONCEPT", body: "Ideas take shape. I craft visual directions based on brand values and business goals, and together, we refine them into a concept that feels right — and true to you." },
  { num: "03", name: "DESIGN", body: "With the concept locked in, the magic happens. I bring everything to life with bold visuals, refined typography, color, layout, and user experience thinking." },
  { num: "04", name: "DEVELOPMENT", body: "I transform designs into high-performing, fully responsive websites — built in Framer for seamless performance. Revisions? As many as it takes." },
  { num: "05", name: "DELIVERY & SUPPORT", body: "You get everything you need: final files, documentation, and post-launch support to ensure things run smoothly — and keep evolving." },
];

const faqs = [
  { q: "Do I need to have a brand identity before we start?", a: "Not at all. I can work with what you have, or we can build your visual identity from scratch as part of the project. Just mention it when you reach out." },
  { q: "What's your workflow like?", a: "We start with a discovery call, move to concept and wireframes, then design, then development. You'll have clear checkpoints to review and give feedback at every stage." },
  { q: "What if I'm not happy with the design?", a: "I offer unlimited revisions until you're satisfied. My goal is for you to love the result — and I won't stop until we get there together." },
  { q: "Can I request more pages in the future?", a: "Yes. Post-launch pages and updates are available as add-ons. Just reach out and we'll figure out the best way to grow your site together." },
  { q: "What tools do you use?", a: "I design in Figma and build in Framer. This combo gives you a fast, animated, fully responsive website with a CMS you can manage yourself." },
  { q: "Do you offer post-launch support?", a: "Yes. Every project includes 30 days of post-launch support. After that, we can arrange an ongoing maintenance plan if needed." },
];

const ZLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Zantana logo">
    <text x="0" y="24" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5">(z)</text>
  </svg>
);

const ZWordmark = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Zantana wordmark" preserveAspectRatio="xMidYMid meet">
    <text x="300" y="100" textAnchor="middle" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="120" letterSpacing="-6">zantana</text>
  </svg>
);

function Index() {
  const [isDark, setIsDark] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [activeProjects, setActiveProjects] = useState<Set<string>>(new Set());
  const toggleProject = (name: string) => setActiveProjects(prev => {
    const next = new Set(prev);
    if (next.has(name)) next.delete(name); else next.add(name);
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

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    let targetEl: HTMLElement | null = null;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
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
      let tx = mx, ty = my;
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
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // Scroll reveal observer (reversible)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
          else entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleFaq = (i: number) => setOpenFaqs(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
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

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        :root { --blue: #2B2BFF; --black: #000; --white: #fff; --p: 40px; --pv: 60px; --g: 40px; --bg: #fff; --text: #000; --surface: #f2f2f2; --muted: #333; }
        .z-root.dark { --bg: #000; --text: #fff; --surface: #1a1a1a; --muted: #aaa; }
        .z-root *, .z-root *::before, .z-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .z-root { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; font-size: 18px; line-height: 1.6; overflow-x: clip; min-height: 100vh; transition: background .5s ease, color .5s ease; }
        .z-root section, .z-root .section-bg { transition: background .5s ease, color .5s ease; }

        @media (hover: hover) and (pointer: fine) {
          .z-cursor { position: fixed; top: 0; left: 0; width: 12px; height: 12px; border-radius: 50%; background: #fff; mix-blend-mode: difference; pointer-events: none; z-index: 9999; transition: width .2s, height .2s, opacity .2s; will-change: transform; }
          .z-cursor.is-magnetic { width: 36px; height: 36px; }
          .z-cursor-label { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998; background: #000; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px; border-radius: 4px; opacity: 0; transform: translate(0%, 0%) scale(.6); transition: opacity .2s, transform .2s; }
        }

        /* Typography */
        .z-root h1 { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; line-height: 1; letter-spacing: -1px; }
        .z-root h2 { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; line-height: 1; letter-spacing: -1px; font-size: 75px; }
        .z-root p { font-size: 18px; line-height: 1.55; }
        .z-section-sub { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--blue); margin-bottom: 16px; }

        /* Section base — 40px lateral, 60px vertical */
        .z-section { padding: var(--pv) var(--p); display: flex; flex-direction: column; gap: var(--g); }

        /* Reveal animations */
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in-view { opacity: 1; transform: translateY(0); }
        .reveal-title { transition-delay: 0s; }
        .reveal-content { transition-delay: .25s; }

        /* Navbar */
        .z-root nav { display: flex; justify-content: space-between; align-items: center; padding: 24px var(--p); opacity: 0; transform: translateY(-12px); animation: zNavIn .6s ease 3.1s forwards; }
        .nav-logo { font-weight: 800; font-size: 20px; letter-spacing: -0.5px; display: flex; align-items: center; }
        .nav-logo svg { width: 50px; height: 28px; }
        .nav-links { display: flex; gap: 24px; list-style: none; align-items: center; }
        .nav-links a, .theme-toggle { text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text); transition: color .2s; display: inline-flex; align-items: center; gap: 6px; position: relative; cursor: pointer; }
        .theme-toggle { background: none; border: none; padding: 0; font-family: 'Inter', sans-serif; }
        .nav-links a::before, .theme-toggle::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--blue); opacity: 0; transform: scale(0); transition: opacity .2s, transform .2s; }
        .nav-links a:hover, .theme-toggle:hover { color: var(--blue); }
        .nav-links a:hover::before, .theme-toggle:hover::before { opacity: 1; transform: scale(1); }

        @keyframes zNavIn { to { opacity: 1; transform: translateY(0); } }
        @keyframes zHeroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Hero viewport wrapper */
        .hero-viewport { height: 100vh; display: flex; flex-direction: column; overflow: hidden; }

        /* Hero */
        .hero { flex: 1; padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; gap: 30px; padding-bottom: 40px; box-sizing: border-box; }
        .hero-available { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0; animation: zHeroIn .6s ease 2.4s forwards; }
        .hero-dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; flex-shrink: 0; animation: z-pulse 2s ease-in-out infinite; }
        @keyframes z-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.6; transform:scale(1.3); } }
        .hero h1 { font-size: 90px; opacity: 0; animation: zHeroIn .7s ease 2.5s forwards; }
        .hero-sub { font-size: 20px; line-height: 1.5; color: var(--muted); max-width: 600px; opacity: 0; animation: zHeroIn .6s ease 2.8s forwards; }
        .btn-black { display: inline-flex; align-items: center; gap: 8px; background: var(--text); color: var(--bg); font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 32px; border-radius: 4px; text-decoration: none; border: 1px solid var(--text); cursor: pointer; transition: background .18s, border-color .18s, color .18s; align-self: flex-start; opacity: 0; animation: zHeroIn .6s ease 3.0s forwards; }
        .btn-black::before { content: ''; height: 6px; border-radius: 50%; background: var(--bg); opacity: 0; width: 0; transition: opacity .2s, width .2s; }
        .btn-black:hover { background: var(--blue); border-color: var(--blue); color: #fff; }
        .btn-black:hover::before { opacity: 1; width: 6px; background: #fff; }
        .btn-black.no-anim { opacity: 1; animation: none; }

        /* Ticker */
        .ticker-wrapper { overflow: hidden; padding: 20px 0; cursor: grab; user-select: none; margin-left: calc(var(--p) * -1); margin-right: calc(var(--p) * -1); width: calc(100% + (var(--p) * 2)); }
        .ticker-wrapper.dragging { cursor: grabbing; }
        .ticker-track { display: flex; gap: 16px; width: max-content; }
        .ticker-item { width: 400px; height: 260px; border-radius: 5px; overflow: hidden; flex-shrink: 0; pointer-events: none; }
        .ticker-item img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* Section title block */
        .section-title { font-size: 75px; }
        .phases { display: flex; flex-direction: column; gap: 20px; }
        .projects { display: flex; flex-direction: column; gap: 20px; }
        .see-all-wrap { display: flex; justify-content: center; padding: 0 var(--p) var(--pv); }

        .phase-card { border-radius: 5px; overflow: hidden; }
        .phase-card-top { background: var(--blue); color: #fff; padding: 20px; }
        .phase-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .phase-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .phase-list li { font-size: 14px; display: flex; align-items: center; gap: 10px; }
        .phase-list li::before { content: '→'; font-weight: 700; }
        .phase-card-bottom { background: var(--text); color: var(--bg); padding: 20px; }
        .phase-card-bottom .tagline { font-weight: 700; font-size: 14px; line-height: 1.35; margin-bottom: 8px; }
        .phase-card-bottom p { font-size: 14px; line-height: 1.6; }

        .project-card { background: var(--surface); border-radius: 5px; overflow: hidden; cursor: pointer; transition: background .25s; }
        .project-card:hover, .project-card.is-active { background: var(--blue); }
        .project-card:hover .project-info, .project-card.is-active .project-info { background: var(--blue); }
        .project-card:hover .project-name, .project-card:hover .project-type, .project-card.is-active .project-name, .project-card.is-active .project-type { color: #fff; }
        .project-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
        .project-info { padding: 20px; transition: background .25s; }
        .project-name { font-weight: 700; font-size: 14px; letter-spacing: 0.5px; margin-bottom: 2px; transition: color .25s; }
        .project-type { font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; transition: color .25s; }

        /* Process */
        .process-steps-col { display: flex; flex-direction: column; gap: 20px; }
        .process-step { height: 200px; background: var(--blue); border-radius: 5px; padding: 20px; color: #fff; display: flex; flex-direction: column; justify-content: space-between; }
        .process-step-top { display: flex; justify-content: flex-end; align-items: flex-start; }
        .process-step-bottom { display: flex; flex-direction: column; gap: 8px; }
        .process-num { font-size: 12px; font-weight: 700; color: #fff; letter-spacing: 2px; }
        .process-name { font-weight: 700; font-size: 18px; letter-spacing: .3px; color: #fff; margin-bottom: 4px; }
        .process-step p { font-size: 14px; line-height: 1.65; color: #fff; }

        /* Pricing */
        .pricing-grid { display: flex; flex-direction: column; gap: 20px; }
        .price-card { background: var(--blue); border-radius: 5px; color: #fff; overflow: hidden; }
        .price-card-header { padding: 20px; border-bottom: 2px solid rgba(255,255,255,.5); }
        .plan-name { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .price-card-body { padding: 20px; }
        .price-amount { font-family: 'Anton', sans-serif; font-weight: 400; text-transform: uppercase; font-size: 60px; line-height: 1; margin-bottom: 6px; }
        .price-delivery { font-size: 13px; font-weight: 700; margin-bottom: 20px; }
        .price-divider { height: 2px; background: rgba(255,255,255,.5); margin-bottom: 20px; }
        .price-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
        .price-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.45; }
        .price-features li.add-on { opacity: .6; }
        .check { width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(255,255,255,.5); display: flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0; margin-top: 1px; }
        .btn-white { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: var(--blue); font-weight: 700; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; padding: 16px 28px; border-radius: 5px; text-decoration: none; border: 1px solid #fff; cursor: pointer; transition: background .18s, color .18s, border-color .18s; align-self: flex-start; }
        .btn-white::before { content: ''; width: 0; height: 6px; border-radius: 50%; background: #fff; opacity: 0; transition: opacity .2s, width .2s; }
        .btn-white:hover { background: #000; color: #fff; border-color: #000; }
        .btn-white:hover::before { opacity: 1; width: 6px; }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item { background: var(--surface); border-radius: 5px; overflow: hidden; transition: background .2s; }
        .faq-item.open { background: var(--blue); }
        .faq-question { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 20px; text-align: left; }
        .faq-question span.faq-q-text { font-size: 14px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; line-height: 1.4; flex: 1; color: var(--text); transition: color .2s; }
        .faq-item.open .faq-question span.faq-q-text { color: #fff; }
        .faq-icon { width: 20px; height: 20px; flex-shrink: 0; position: relative; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .faq-icon::before, .faq-icon::after { content: ''; position: absolute; background: var(--text); transition: transform .25s, opacity .25s, background .2s; }
        .faq-icon::before { width: 14px; height: 1px; }
        .faq-icon::after { width: 1px; height: 14px; }
        .faq-item.open .faq-icon::before, .faq-item.open .faq-icon::after { background: #fff; }
        .faq-item.open .faq-icon::after { opacity: 0; transform: rotate(90deg); }
        .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; padding: 0 20px; }
        .faq-answer > div { overflow: hidden; min-height: 0; }
        .faq-answer p { font-size: 15px; line-height: 1.6; padding-bottom: 20px; color: var(--text); transition: color .2s; }
        .faq-item.open .faq-answer { grid-template-rows: 1fr; }
        .faq-item.open .faq-answer p { color: #fff; }

        /* About */
        .about-section { background: var(--text); color: var(--bg); }
        .about-inner { max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
        .about-photo { width: 300px; border-radius: 5px; display: block; aspect-ratio: 3/4; object-fit: cover; object-position: top; filter: grayscale(100%); }
        .about-headline { font-weight: 700; font-size: 16px; line-height: 1.5; text-transform: uppercase; color: var(--bg); letter-spacing: .3px; }
        .about-body { font-size: 16px; color: var(--bg); line-height: 1.6; }
        .btn-white-outline { display: inline-flex; align-items: center; gap: 8px; background: var(--bg); color: var(--text); font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 32px; border-radius: 5px; text-decoration: none; border: 1px solid var(--bg); transition: background .18s, color .18s, border-color .18s; align-self: center; }
        .btn-white-outline::before { content: ''; width: 0; height: 6px; border-radius: 50%; background: var(--text); opacity: 0; transition: opacity .2s, width .2s, background .18s; }
        .btn-white-outline:hover { background: var(--blue); color: #fff; border-color: var(--blue); }
        .btn-white-outline:hover::before { opacity: 1; width: 6px; background: #fff; }

        /* Contact */
        .contact-section { background: #0047FF; color: #fff; }
        .contact-section h2 { color: #fff; }
        .contact-section .z-section-sub { color: rgba(255,255,255,.7); }
        .contact-subtitle { font-size: 18px; line-height: 1.5; color: rgba(255,255,255,.8); max-width: 600px; }
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .contact-form { background: transparent; border: none; padding: 0; display: flex; flex-direction: column; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #fff; }
        .form-group input, .form-group textarea { background: rgba(255,255,255,.12); border: none; border-radius: 5px; padding: 14px; font-family: 'Inter', sans-serif; font-size: 15px; color: #fff; width: 100%; outline: none; resize: none; }
        .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,.4); }
        .form-group textarea { min-height: 110px; }
        .btn-form-submit { display: flex; justify-content: center; align-items: center; gap: 8px; background: #fff; color: var(--blue); font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 24px; border-radius: 5px; border: 1px solid #fff; cursor: pointer; width: 100%; margin-top: 4px; transition: background .18s, color .18s, border-color .18s; }
        .btn-form-submit::before { content: ''; width: 0; height: 6px; border-radius: 50%; background: var(--blue); opacity: 0; transition: opacity .2s, width .2s, background .18s; }
        .btn-form-submit:hover { background: #000; color: #fff; border-color: #000; }
        .btn-form-submit:hover::before { opacity: 1; width: 6px; background: #fff; }
        .btn-form-submit:disabled { opacity: .6; cursor: not-allowed; }
        .form-success { background: rgba(255,255,255,.1); border-radius: 5px; padding: 60px 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; text-align: center; animation: formFadeIn .5s ease; }
        .form-success-icon { width: 64px; height: 64px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; }
        .form-success-icon svg { width: 28px; height: 28px; }
        .form-success h3 { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 24px; color: #fff; }
        .form-success p { font-size: 15px; color: rgba(255,255,255,.85); line-height: 1.6; max-width: 340px; }
        .form-success .btn-form-reset { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #fff; font-weight: 700; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; padding: 12px 24px; border-radius: 5px; border: 1px solid rgba(255,255,255,.4); cursor: pointer; }
        .form-error-msg { background: rgba(255,0,0,.15); color: #fff; font-size: 13px; font-weight: 600; padding: 12px 16px; border-radius: 5px; text-align: center; }
        @keyframes formFadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Footer */
        .z-footer { background: var(--bg); padding: 40px; }
        .footer-blue-box { background: var(--blue); border-radius: 5px; padding: 40px; display: flex; flex-direction: column; gap: 40px; align-items: center; }
        .footer-logo-row { width: 100%; text-align: center; }
        .footer-logo-row svg { width: 100%; max-width: 1200px; height: auto; color: #fff; margin: 0 auto; display: block; }
        .footer-desc { width: 100%; max-width: 50%; margin: 0 auto; text-align: center; }
        .footer-desc p { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; line-height: 1.6; color: #fff; }
        .footer-links { display: flex; flex-direction: column; gap: 24px; align-items: center; }
        .footer-links a { text-decoration: none; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #fff; transition: color .2s; display: inline-flex; align-items: center; gap: 6px; position: relative; }
        .footer-links a::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #000; opacity: 0; transform: scale(0); transition: opacity .2s, transform .2s; }
        .footer-links a:hover { color: #000; }
        .footer-links a:hover::before { opacity: 1; transform: scale(1); }

        /* Desktop */
        @media (min-width: 900px) {
          .hero h1 { font-size: 90px; max-width: 1100px; line-height: 0.95; }
          .hero-sub { font-size: 22px; }
          .phases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; }
          .phase-card { display: flex; flex-direction: column; }
          .phase-card-bottom { flex: 1; }
          .projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .project-card img { height: 280px; }
          .process-section { display: grid; grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }
          .process-section .process-title-col { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 80px; align-self: start; }
          .process-steps-col { display: flex; flex-direction: column; gap: 20px; }
          .process-step { height: 220px; padding: 20px; }
          .process-name { font-size: 20px; }
          .process-step p { font-size: 15px; }
          .pricing-section { display: grid; grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }
          .pricing-title-col { position: sticky; top: 40px; display: flex; flex-direction: column; gap: 16px; align-self: start; }
          .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .faq-section { display: grid; grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }
          .faq-title-col { position: sticky; top: 40px; display: flex; flex-direction: column; gap: 16px; align-self: start; }
          .about-section { display: flex; flex-direction: column; align-items: center; }
          .contact-grid { grid-template-columns: 2fr 3fr; gap: 60px; align-items: start; }
          .footer-links { flex-direction: row; flex-wrap: wrap; gap: 32px; justify-content: center; }
          .footer-desc p { font-size: 16px; }

        }

        /* Mobile */
        @media (max-width: 899px) {
          :root { --p: 24px; --pv: 48px; --g: 32px; }
          .hero { padding: 24px; padding-bottom: 40px; gap: 30px; }
          .hero h1 { font-size: 48px; line-height: 1; }
          .hero-sub { font-size: 18px; }
          .z-root h2, .section-title { font-size: 44px; }
          .price-amount { font-size: 48px; }
        }
      `}</style>

      <div ref={cursorRef} className="z-cursor" aria-hidden />
      <div ref={cursorLabelRef} className="z-cursor-label" aria-hidden>View</div>
      <div className={`z-root ${isDark ? "dark" : ""}`}>
        <div className="hero-viewport">
          <nav>
            <div className="nav-logo"><ZLogo /></div>
            <ul className="nav-links">
              <li><a href="#work">Work</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">DM</a></li>
              <li><button className="theme-toggle" onClick={() => setIsDark(prev => !prev)}>{isDark ? "Light" : "Dark"}</button></li>
            </ul>
          </nav>

          <section className="hero">
            <div className="hero-available">
              <span className="hero-dot" />
              <span>Available for new projects</span>
            </div>
            <h1>WEBSITES BUILT</h1>
            <p className="hero-sub">
              Whether you're raising, launching, or scaling — we ship sites fast, so you can seize the moment.
            </p>
            <a href="#contact" className="btn-black">Start a project</a>
          </section>
        </div>

        <section className="z-section reveal">
          <div className="reveal-title">
            <h2>FEATURED VISUALS</h2>
          </div>
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
                  <div key={i} className="ticker-item"><img src={src} alt="" /></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="z-section reveal">
          <div className="reveal-title">
            <h2 className="section-title">HOW I SOLVE<br />YOUR PROBLEMS</h2>
          </div>
          <div className="phases reveal-content">
            {phases.map((p) => (
              <div key={p.label} className="phase-card">
                <div className="phase-card-top">
                  <div className="phase-label">{p.label}</div>
                  <ul className="phase-list">{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
                <div className="phase-card-bottom">
                  <div className="tagline">{p.tagline}</div>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section reveal" id="work">
          <div className="reveal-title">
            <h2 className="section-title">WEBSITE<br />PROJECTS</h2>
          </div>
          <div className="projects reveal-content">
            {websiteProjects.map((pr) => (
              <div key={pr.name} data-cursor-label="View" className={`project-card ${activeProjects.has(pr.name) ? "is-active" : ""}`} onClick={() => toggleProject(pr.name)}>
                <img src={pr.img} alt={pr.name} />
                <div className="project-info">
                  <div className="project-name">{pr.name}</div>
                  <div className="project-type">{pr.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section reveal">
          <div className="reveal-title">
            <h2 className="section-title">VISUAL BRAND<br />PROJECTS</h2>
          </div>
          <div className="projects reveal-content">
            {brandProjects.map((pr) => (
              <div key={pr.name} data-cursor-label="View" className={`project-card ${activeProjects.has(pr.name) ? "is-active" : ""}`} onClick={() => toggleProject(pr.name)}>
                <img src={pr.img} alt={pr.name} />
                <div className="project-info">
                  <div className="project-name">{pr.name}</div>
                  <div className="project-type">{pr.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section process-section reveal">
          <div className="process-title-col reveal-title">
            <h2>CREATIVE<br />PROCESS</h2>
          </div>
          <div className="process-steps-col reveal-content">
            {processSteps.map((s, i) => (
              <div
                key={s.num}
                className="process-step"
              >
                <div className="process-step-top">
                  <span className="process-num">{s.num}</span>
                </div>
                <div className="process-step-bottom">
                  <div className="process-name">{s.name}</div>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section pricing-section reveal" id="pricing">
          <div className="pricing-title-col reveal-title">
            <h2>PICK THE PLAN<br />THAT FITS.</h2>
          </div>
          <div className="pricing-grid reveal-content">
            <div className="price-card">
              <div className="price-card-header">
                <span className="plan-name">Landing Page</span>
              </div>
              <div className="price-card-body">
                <div className="price-amount">$1000</div>
                <div className="price-delivery">15 days delivery</div>
                <div className="price-divider" />
                <div className="price-label">What's included</div>
                <ul className="price-features">
                  {["Figma wireframe & visual design", "Landing page built in Framer", "Fully responsive (mobile + desktop)", "Animation & scroll effects", "Copywriting assistance", "Basic SEO optimization"].map(f => (
                    <li key={f}><span className="check">✓</span><span>{f}</span></li>
                  ))}
                  <li className="add-on"><span className="check">+</span><span>Visual Identity Add-on available ($1k)</span></li>
                </ul>
                <a href="#contact" className="btn-white">Start with Landing Page</a>
              </div>
            </div>

            <div className="price-card">
              <div className="price-card-header">
                <span className="plan-name">Full Website</span>
              </div>
              <div className="price-card-body">
                <div className="price-amount">$2800</div>
                <div className="price-delivery">30 days delivery</div>
                <div className="price-divider" />
                <div className="price-label">What's included</div>
                <ul className="price-features">
                  {["Everything in Landing Page", "Up to 8 custom pages", "CMS setup & training", "Custom imagery & art direction", "Brand alignment workshop", "Advanced SEO & analytics"].map(f => (
                    <li key={f}><span className="check">✓</span><span>{f}</span></li>
                  ))}
                  <li className="add-on"><span className="check">+</span><span>Visual Identity Add-on available ($1k)</span></li>
                </ul>
                <a href="#contact" className="btn-white">Start Full Website</a>
              </div>
            </div>
          </div>
        </section>

        <section className="z-section faq-section reveal">
          <div className="faq-title-col reveal-title">
            <h2>F.A.Q</h2>
          </div>
          <div className="faq-list reveal-content">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaqs.has(i) ? "open" : ""}`}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-icon" />
                </button>
                <div className="faq-answer"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </section>

        <section className="z-section about-section reveal">
          <div className="about-inner reveal-title">
            <h2>MORE ABOUT<br />ZANTANA STUDIO</h2>
            <img className="about-photo" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Ivo, founder of Zantana" />
            <div className="about-headline">
              HEY! I'M IVO — THE CREATIVE MIND BEHIND ZANTANA, A PASSIONATE ONE-PERSON STUDIO THAT CREATES STANDOUT BRANDS WITH LASTING IMPACT.
            </div>
            <p className="about-body">
              Building strategic brand identities and high-performing websites that connect deeply with your target audience. Every project is crafted with precision to help your business grow online.
            </p>
            <a href="#contact" className="btn-white-outline">Start a project</a>
          </div>
        </section>

        <section className="z-section contact-section reveal" id="contact">
          <div className="contact-grid">
            <div className="reveal-title">
              <h2>LET'S FIGURE IT OUT<br />— TOGETHER.</h2>
              <p className="contact-subtitle" style={{ marginTop: 16 }}>
                On our call, I'll help you map the next step — no pressure, just clarity.
              </p>
            </div>
            <div className="reveal-content">
              {formStatus === 'sent' ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3>MESSAGE SENT!</h3>
                  <p>Thank you for reaching out. I'll review your project details and get back to you within 24–48 hours.</p>
                  <button className="btn-form-reset" onClick={() => setFormStatus('idle')}>Send another message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('sending');
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  formData.append('access_key', 'ff788bc1-0eed-4d8a-b7db-fd1ad8c08a54');
                  formData.append('subject', `New project inquiry from ${formData.get('name')}`);
                  formData.append('from_name', 'Zantana Studio Website');
                  try {
                    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
                    const data = await res.json();
                    if (data.success) { setFormStatus('sent'); form.reset(); } else { setFormStatus('error'); }
                  } catch { setFormStatus('error'); }
                }}>
                  <div className="form-group"><label>Name</label><input name="name" type="text" placeholder="Your name" maxLength={100} required /></div>
                  <div className="form-group"><label>Email</label><input name="email" type="email" placeholder="email@company.com" maxLength={255} required /></div>
                  <div className="form-group"><label>What is your company name?</label><input name="company" type="text" placeholder="Company name" maxLength={100} /></div>
                  <div className="form-group"><label>What services does your company provide?</label><input name="services" type="text" placeholder="e.g. SaaS, e-commerce, agency" maxLength={200} /></div>
                  <div className="form-group"><label>Message</label><textarea name="message" placeholder="Tell me about your project..." maxLength={1000} /></div>
                  {formStatus === 'error' && <div className="form-error-msg">Something went wrong. Please try again or email directly at zantanadesign@gmail.com</div>}
                  <button type="submit" className="btn-form-submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending...' : 'Start a project'}</button>
                </form>
              )}
            </div>
          </div>
        </section>

        <footer className="z-footer">
          <div className="footer-blue-box">
            <div className="footer-logo-row">
              <ZWordmark />
            </div>
            <div className="footer-desc">
              <p>
                An independent design studio specializing in visual identity and web design.
                I transform ideas into high-impact design and development solutions by
                combining strategy, aesthetics, and functionality to create memorable
                and results-driven brand experiences.
              </p>
            </div>
            <div className="footer-links">
              {['INSTAGRAM ↗', 'LINKEDIN ↗', 'CONTRA ↗', 'X ↗', 'EMAIL ↗', 'WHATSAPP ↗'].map((label, i) => (
                <a
                  key={label}
                  href={[
                    'https://instagram.com/zantana.co',
                    'https://linkedin.com/in/ivozantana',
                    'https://contra.com/zantanastudio',
                    'https://x.com/zantanastudio',
                    'mailto:zantanadesign@gmail.com',
                    'https://wa.link/l9pzfv'
                  ][i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
