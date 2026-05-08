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

function Index() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
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
      const viewT = (e.target as HTMLElement)?.closest<HTMLElement>(".project-card");
      if (viewT) {
        label.style.opacity = "1";
        label.style.transform = "translate(-50%, -50%) scale(1)";
      } else {
        label.style.opacity = "0";
        label.style.transform = "translate(-50%, -50%) scale(.6)";
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
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      label.style.left = `${mx}px`;
      label.style.top = `${my}px`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const toggleFaq = (i: number) => setOpenFaqs(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  const tickerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  // Auto-scroll loop
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
      <style>{`
        :root { --blue: #2B2BFF; --black: #000; --white: #fff; --p: 20px; --g: 20px; }
        .z-root *, .z-root *::before, .z-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .z-root { background: #fff; color: #000; font-family: 'Inter', sans-serif; font-size: 20px; line-height: 1.6; overflow-x: hidden; min-height: 100vh; }
        @media (hover: hover) and (pointer: fine) {
          .z-root, .z-root * { cursor: none !important; }
          .z-cursor { position: fixed; top: 0; left: 0; width: 12px; height: 12px; border-radius: 50%; background: #000; pointer-events: none; z-index: 9999; transition: width .2s, height .2s, background .2s; will-change: transform; }
          .z-cursor.is-magnetic { width: 36px; height: 36px; background: rgba(0,0,0,.25); }
          .z-cursor-label { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998; background: #000; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px; border-radius: 4px; opacity: 0; transform: translate(-50%, -50%) scale(.6); transition: opacity .2s, transform .2s; }
        }
        .z-root p { font-size: 20px; line-height: 1.55; }
        .z-root h1, .z-root h2, .z-root h3, .z-root h4 { font-family: 'Inter', sans-serif; }
        .z-root nav { max-width: 480px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 24px var(--p) 0; }
        .nav-logo { font-weight: 800; font-size: 20px; letter-spacing: -0.5px; }
        .nav-links { display: flex; gap: var(--g); list-style: none; }
        .nav-links a { text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #000; transition: color .2s; display: inline-flex; align-items: center; gap: 6px; position: relative; }
        .nav-links a::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--blue); opacity: 0; transform: scale(0); transition: opacity .2s, transform .2s; }
        .nav-links a:hover { color: var(--blue); }
        .nav-links a:hover::before { opacity: 1; transform: scale(1); }
        .hero { max-width: 480px; margin: 0 auto; padding: 24px var(--p) 40px; min-height: calc(100svh - 80px); display: flex; flex-direction: column; justify-content: flex-end; box-sizing: border-box; }
        .hero-available { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: var(--g); }
        .hero-dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; flex-shrink: 0; animation: z-pulse 2s ease-in-out infinite; }
        @keyframes z-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.6; transform:scale(1.3); } }
         .hero h1 { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 40px; line-height: 1; letter-spacing: -1.5px; margin-bottom: var(--g); }
         .hero-sub { font-size: 20px; line-height: 1.5; color: #333; margin-bottom: 28px; max-width: 460px; }
        .btn-black { display: inline-flex; align-items: center; gap: 8px; background: #000; color: #fff; font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 32px; border-radius: 4px; text-decoration: none; border: 1px solid #000; cursor: pointer; margin-bottom: 44px; transition: background .18s, border-color .18s, color .18s; width: auto; align-self: flex-start; }
        .btn-black::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #fff; opacity: 0; width: 0; transition: opacity .2s, width .2s; }
        .btn-black:hover { background: var(--blue); border-color: var(--blue); }
        .btn-black:hover::before { opacity: 1; width: 6px; }
        .ticker-wrapper { overflow: hidden; width: 100vw; position: relative; left: 50%; margin-left: -50vw; padding: 20px 0; cursor: grab; user-select: none; }
        .ticker-wrapper.dragging { cursor: grabbing; }
        .ticker-track { display: flex; gap: 16px; width: max-content; }
        .ticker-item { width: 280px; height: 180px; border-radius: 4px; overflow: hidden; flex-shrink: 0; pointer-events: none; }
        .ticker-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .section-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; line-height: 1; text-align: left; padding: 30px var(--p); max-width: 480px; margin: 0 auto; }
        .phases, .projects { max-width: 480px; margin: 0 auto; padding: 0 var(--p); display: flex; flex-direction: column; gap: var(--g); }
        .see-all-wrap { max-width: 480px; margin: 0 auto; padding: 30px var(--p) 0; display: flex; justify-content: center; }
        .phase-card { border-radius: 4px; overflow: hidden; }
        .phase-card-top { background: var(--blue); color: #fff; padding: 20px; }
        .phase-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .phase-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .phase-list li { font-size: 14px; display: flex; align-items: center; gap: 10px; }
        .phase-list li::before { content: '→'; font-weight: 700; }
        .phase-card-bottom { background: #000; color: #fff; padding: 20px; }
        .phase-card-bottom .tagline { font-weight: 700; font-size: 14px; line-height: 1.35; margin-bottom: 8px; }
        .phase-card-bottom p { font-size: 14px; line-height: 1.6; }
        .project-card { background: #f2f2f2; border-radius: 4px; overflow: hidden; cursor: pointer; transition: background .25s; }
        .project-card.is-active { background: var(--blue); }
        .project-card.is-active .project-name, .project-card.is-active .project-type { color: #fff; }
        .project-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
        .project-info { padding: 20px; }
        .project-name { font-weight: 700; font-size: 14px; letter-spacing: 0.5px; margin-bottom: 2px; transition: color .25s; }
        .project-type { font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; transition: color .25s; }
        .process-section { max-width: 480px; margin: 0 auto; padding: 0 var(--p); }
        .process-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; line-height: 1; text-align: left; padding: 30px 0; }
        .process-step { padding: var(--g) 0; border-top: 1px solid #000; }
        .process-step:last-child { border-bottom: 1px solid #000; }
        .process-num { font-size: 11px; font-weight: 700; color: var(--blue); letter-spacing: 1px; margin-bottom: 4px; }
        .process-name { font-weight: 700; font-size: 14px; letter-spacing: .3px; margin-bottom: 8px; }
        .process-step p { font-size: 15px; line-height: 1.6; }
        .pricing-section { max-width: 480px; margin: 0 auto; padding: 0 var(--p); }
        .pricing-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; line-height: 1.05; color: var(--blue); padding: 30px 0; }
        .pricing-grid { display: flex; flex-direction: column; gap: var(--g); }
        .price-card { background: var(--blue); border-radius: 4px; color: #fff; overflow: hidden; }
        .price-card-header { padding: 20px; border-bottom: 2px solid rgba(255,255,255,.5); }
        .plan-name { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .price-card-body { padding: 20px; }
        .price-amount { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; line-height: 1; margin-bottom: 6px; }
        .price-delivery { font-size: 13px; font-weight: 700; margin-bottom: var(--g); }
        .price-divider { height: 2px; background: rgba(255,255,255,.5); margin-bottom: var(--g); }
        .price-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: var(--g); }
        .price-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.45; }
        .price-features li.add-on { opacity: .6; }
        .check { width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(255,255,255,.5); display: flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0; margin-top: 1px; }
        .btn-white { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: var(--blue); font-weight: 700; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; padding: 16px 28px; border-radius: 4px; text-align: center; text-decoration: none; border: 1px solid #fff; cursor: pointer; transition: background .18s, color .18s, border-color .18s; align-self: flex-start; }
        .btn-white::before { content: ''; width: 0; height: 6px; border-radius: 50%; background: #fff; opacity: 0; transition: opacity .2s, width .2s; }
        .btn-white:hover { background: #000; color: #fff; border-color: #000; }
        .btn-white:hover::before { opacity: 1; width: 6px; }
        .faq-section { max-width: 480px; margin: 0 auto; padding: 0 var(--p); }
        .faq-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; padding: 30px 0; }
        .faq-list { display: flex; flex-direction: column; gap: var(--g); }
        .faq-item { background: #f2f2f2; border-radius: 4px; overflow: hidden; transition: background .2s; }
        .faq-item.open { background: var(--blue); }
        .faq-question { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 20px; text-align: left; }
        .faq-question span.faq-q-text { font-size: 14px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; line-height: 1.4; flex: 1; color: #000; transition: color .2s; }
        .faq-item.open .faq-question span.faq-q-text { color: #fff; }
        .faq-icon { width: 20px; height: 20px; flex-shrink: 0; position: relative; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .faq-icon::before, .faq-icon::after { content: ''; position: absolute; background: #000; transition: transform .25s, opacity .25s, background .2s; }
        .faq-icon::before { width: 14px; height: 1px; }
        .faq-icon::after { width: 1px; height: 14px; }
        .faq-item.open .faq-icon::before, .faq-item.open .faq-icon::after { background: #fff; }
        .faq-item.open .faq-icon::after { opacity: 0; transform: rotate(90deg); }
         .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; padding: 0 20px; }
         .faq-answer > div { overflow: hidden; min-height: 0; }
         .faq-answer p { font-size: 15px; line-height: 1.6; padding-bottom: 20px; color: #000; transition: color .2s; }
         .faq-item.open .faq-answer { grid-template-rows: 1fr; }
         .faq-item.open .faq-answer p { color: #fff; }
        .about-section { background: #000; margin-top: 30px; padding: 30px var(--p); }
        .about-inner { max-width: 480px; margin: 0 auto; }
        .about-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; line-height: 1; text-align: center; color: #fff; margin-bottom: 28px; }
        .about-photo { width: 100%; border-radius: 4px; display: block; margin-bottom: 28px; aspect-ratio: 4/3; object-fit: cover; object-position: top; filter: grayscale(100%); }
        .about-headline { font-weight: 700; font-size: 16px; line-height: 1.5; text-align: center; text-transform: uppercase; color: #fff; margin-bottom: 20px; letter-spacing: .3px; }
        .about-body { font-size: 16px; color: #fff; line-height: 1.6; text-align: center; margin-bottom: 32px; }
        .btn-white-outline { display: block; background: #fff; color: #000; font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px var(--p); border-radius: 4px; text-align: center; text-decoration: none; border: 1px solid #fff; transition: background .18s, color .18s, border-color .18s; }
        .btn-white-outline:hover { background: var(--blue); color: #fff; border-color: var(--blue); }
        .contact-section { max-width: 480px; margin: 0 auto; padding: 30px var(--p) 0; }
        .contact-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 60px; letter-spacing: -2px; line-height: 1; margin-bottom: 30px; }
        .contact-form { background: var(--blue); border-radius: 4px; padding: var(--p); display: flex; flex-direction: column; gap: 16px; max-width: 460px; margin: 0 auto; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #fff; }
        .form-group input, .form-group textarea { background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.3); border-radius: 4px; padding: 14px; font-family: 'Inter', sans-serif; font-size: 15px; color: #fff; width: 100%; outline: none; resize: none; }
        .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,.4); }
        .form-group input:focus, .form-group textarea:focus { border-color: #fff; }
        .form-group textarea { min-height: 110px; }
        .btn-form-submit { display: block; background: #fff; color: var(--blue); font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px var(--p); border-radius: 4px; text-align: center; border: 1px solid #fff; cursor: pointer; width: 100%; margin-top: 4px; transition: background .18s, color .18s, border-color .18s; }
        .btn-form-submit:hover { background: #000; color: #fff; border-color: #000; }
        .z-footer { padding: 30px 0 40px; }
        .footer-logo-row { overflow: hidden; width: 100%; }
        .footer-logo { font-family: 'Inter', sans-serif; font-weight: 800; font-size: clamp(72px, 20vw, 160px); letter-spacing: -4px; line-height: 1; display: block; padding: 8px var(--p); white-space: nowrap; }
        .footer-links { max-width: 480px; margin: 30px auto 0; padding: 0 var(--p); display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
        .footer-links a { text-decoration: none; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #000; display: flex; align-items: center; gap: 6px; }
        .footer-desc { max-width: 50%; margin: 30px auto 0; padding: 24px var(--p) 0; }
        .footer-desc p { font-size: 13px; font-weight: 700; text-transform: uppercase; text-align: left; letter-spacing: .5px; line-height: 1.65; }

        @media (min-width: 900px) {
          .z-root { --p: 40px; }
          .z-root nav,
          .hero,
          .section-title,
          .phases,
          .projects,
          .process-section,
          .pricing-section,
          .faq-section,
          .about-inner,
          .contact-section,
          .footer-links,
          .footer-desc { max-width: none !important; margin-left: 0; margin-right: 0; padding-left: 40px; padding-right: 40px; }

          .z-root nav { padding-top: 32px; }
          .nav-links { gap: 32px; }
          .nav-links a { font-size: 12px; }

          .hero { padding: 40px var(--p); min-height: calc(100svh - 80px); display: flex; flex-direction: column; justify-content: flex-end; }
          .hero h1 { font-size: 60px; max-width: 1100px; }
          .hero-sub { font-size: 20px; max-width: 540px; }
          .btn-black { margin-bottom: 0; padding: 18px 36px; }

          .section-title, .process-title, .pricing-title, .faq-title, .about-title, .contact-title, .price-amount { font-size: 60px; }
          .section-title { padding: 60px 40px; }
          .process-title, .pricing-title, .faq-title { padding: 60px 0; }

          .phases { display: grid; grid-template-columns: repeat(3, 1fr); align-items: stretch; }
          .phase-card { display: flex; flex-direction: column; }
          .phase-card-bottom { flex: 1; }

          .projects { display: grid; grid-template-columns: repeat(3, 1fr); }
          .project-card img { height: 280px; }

          .see-all-wrap { max-width: none; padding: 30px 40px 0; display: flex; justify-content: center; }

          .process-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
          .process-title { padding: 60px 0 0; position: sticky; top: 40px; }
          .process-steps-col { display: flex; flex-direction: column; padding-top: 60px; }
          .process-step { display: grid; grid-template-columns: 60px 1fr; gap: 24px; align-items: start; padding: 24px 0; }
          .process-num { margin-bottom: 0; font-size: 13px; }
          .process-name { margin-bottom: 6px; font-size: 16px; }
          .process-step p { font-size: 16px; }

          .pricing-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
          .pricing-title { padding: 60px 0 0; position: sticky; top: 40px; }
          .pricing-grid { display: flex; flex-direction: column; gap: var(--g); padding-top: 60px; }
          .price-card { display: flex; flex-direction: column; }
          .price-card-body { flex: 1; display: flex; flex-direction: column; padding: 20px; }
          .price-features { flex: 1; }

          .faq-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
          .faq-title { padding: 60px 0 0; position: sticky; top: 40px; }
          .faq-list { padding-top: 60px; }
          .faq-question { padding: 24px; }
          .faq-answer { padding: 0 24px; }
          .faq-answer p { padding-bottom: 24px; }

          .about-section { padding: 60px 0; }
          .about-inner { max-width: 60% !important; margin: 0 auto !important; padding-left: 0 !important; padding-right: 0 !important; display: flex; flex-direction: column; align-items: center; gap: 28px; }
          .about-title { margin-bottom: 0; }
          .about-photo { width: 450px; max-width: 100%; margin-bottom: 0; aspect-ratio: 3/4; }
          .about-right { display: flex; flex-direction: column; align-items: center; gap: 24px; width: 100%; }
          .about-headline { text-align: center; font-size: 18px; margin-bottom: 0; }
          .about-body { text-align: center; margin-bottom: 0; font-size: 16px; }
          .btn-white-outline { display: inline-block; width: auto; padding: 16px 32px; }

          .contact-section { padding: 60px 40px 0; text-align: center; }
          .contact-title { text-align: center; }
          .contact-form { max-width: 560px; margin: 0 auto; padding: 24px; text-align: left; }

          .footer-logo-row { text-align: center; }
          .footer-logo { text-align: center; }
          .footer-links { flex-direction: row; flex-wrap: wrap; gap: 32px; justify-content: center; align-items: center; }
          .footer-desc { text-align: center; }
          .footer-desc p { text-align: center; }
          .ticker-item { width: 360px; height: 220px; }
        }
      `}</style>

      <div ref={cursorRef} className="z-cursor" aria-hidden />
      <div ref={cursorLabelRef} className="z-cursor-label" aria-hidden>View</div>
      <div className="z-root">
        <nav>
          <div className="nav-logo">(z)</div>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">DM</a></li>
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

        <div
          className="ticker-wrapper"
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

        <h2 className="section-title">HOW I SOLVE<br />YOUR PROBLEMS</h2>
        <div className="phases">
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

        <h2 className="section-title" id="work">WEBSITE<br />PROJECTS</h2>
        <div className="projects">
          {websiteProjects.map((pr) => (
            <div key={pr.name} className={`project-card ${activeProjects.has(pr.name) ? "is-active" : ""}`} onClick={() => toggleProject(pr.name)}>
              <img src={pr.img} alt={pr.name} />
              <div className="project-info">
                <div className="project-name">{pr.name}</div>
                <div className="project-type">{pr.type}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">VISUAL BRAND<br />PROJECTS</h2>
        <div className="projects">
          {brandProjects.map((pr) => (
            <div key={pr.name} className="project-card">
              <img src={pr.img} alt={pr.name} />
              <div className="project-info">
                <div className="project-name">{pr.name}</div>
                <div className="project-type">{pr.type}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="see-all-wrap">
          <a href="#contact" className="btn-black">See all visual ID projects</a>
        </div>

        <section className="process-section">
          <h2 className="process-title">CREATIVE<br />PROCESS</h2>
          <div className="process-steps-col">
            {processSteps.map((s) => (
              <div key={s.num} className="process-step">
                <div className="process-num">{s.num}</div>
                <div>
                  <div className="process-name">{s.name}</div>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <h2 className="pricing-title">PICK THE PLAN<br />THAT FITS.</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-card-header">
                <span className="plan-name">Landing Page</span>
              </div>
              <div className="price-card-body">
                <div className="price-amount">$1000</div>
                <div className="price-delivery">⏱  15 days delivery</div>
                <div className="price-divider" />
                <div className="price-label">What's included</div>
                <ul className="price-features">
                  {["Figma wireframe & visual design","Landing page built in Framer","Fully responsive (mobile + desktop)","Animation & scroll effects","Copywriting assistance","Basic SEO optimization"].map(f => (
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
                <div className="price-delivery">⏱  30 days delivery</div>
                <div className="price-divider" />
                <div className="price-label">What's included</div>
                <ul className="price-features">
                  {["Everything in Landing Page","Up to 8 custom pages","CMS setup & training","Custom imagery & art direction","Brand alignment workshop","Advanced SEO & analytics"].map(f => (
                    <li key={f}><span className="check">✓</span><span>{f}</span></li>
                  ))}
                  <li className="add-on"><span className="check">+</span><span>Visual Identity Add-on available ($1k)</span></li>
                </ul>
                <a href="#contact" className="btn-white">Start Full Website</a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2 className="faq-title">F.A.Q</h2>
          <div className="faq-list">
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

        <section className="about-section">
          <div className="about-inner">
            <h2 className="about-title">MORE ABOUT<br />ZANTANA STUDIO</h2>
            <img className="about-photo" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Ivo, founder of Zantana" />
            <div className="about-right">
              <div className="about-headline">
                HEY! I'M IVO — THE CREATIVE MIND BEHIND ZANTANA, A PASSIONATE ONE-PERSON STUDIO THAT CREATES STANDOUT BRANDS WITH LASTING IMPACT. I BLEND DESIGN, STRATEGY, AND SMART SOLUTIONS TO CREATE UNIQUE DIGITAL EXPERIENCES.
              </div>
              <p className="about-body">
                Building strategic brand identities and high-performing websites that connect deeply with your target audience. Every project is crafted with precision to help your business grow online.
              </p>
              <a href="#contact" className="btn-white-outline">Start a project</a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2 className="contact-title">LET'S BUILD IT<br />— TOGETHER</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" maxLength={100} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="email@company.com" maxLength={255} />
            </div>
            <div className="form-group">
              <label>What is your company name?</label>
              <input type="text" placeholder="Company name" maxLength={100} />
            </div>
            <div className="form-group">
              <label>What services does your company provide?</label>
              <input type="text" placeholder="e.g. SaaS, e-commerce, agency" maxLength={200} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." maxLength={1000} />
            </div>
            <button type="submit" className="btn-form-submit">Start a project</button>
          </form>
        </section>

        <footer className="z-footer">
          <div className="footer-logo-row">
            <div className="footer-logo">zantana</div>
          </div>
          <div className="footer-links">
            <a href="#">Instagram ↗</a>
            <a href="#">Contra ↗</a>
            <a href="#">X ↗</a>
            <a href="#">Email ↗</a>
            <a href="#">WhatsApp ↗</a>
          </div>
          <div className="footer-desc">
            <p>An independent design studio specializing visual identity and web design. I transform ideas into high-impact design and development solutions by combining strategy, aesthetics, and functionality to create memorable and results-driven brand experiences.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
