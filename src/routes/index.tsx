import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "(z) — Websites Built to Move Brands Forward" },
      {
        name: "description",
        content:
          "Zantana Studio — strategic websites and visual identity built to move brands forward. Live in weeks, not months.",
      },
      { property: "og:title", content: "(z) — Websites Built to Move Brands Forward" },
      {
        property: "og:description",
        content:
          "Strategic websites and visual identity built to move brands forward. Live in weeks, not months.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap",
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
];

const brandProjects = [
  { name: "SKIP", type: "Events Ticketing", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { name: "NOVA", type: "Brand Identity", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" },
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 });

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    const el = tickerRef.current;
    if (!el) return;
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    drag.current = { down: true, startX: x, scrollLeft: el.scrollLeft };
    el.classList.add("dragging");
  };
  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drag.current.down) return;
    const el = tickerRef.current;
    if (!el) return;
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    el.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX);
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
        .z-root { background: #fff; color: #000; font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.6; overflow-x: hidden; min-height: 100vh; }
        .z-root nav { max-width: 480px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 24px var(--p) 0; }
        .nav-logo { font-weight: 700; font-size: 20px; letter-spacing: -0.5px; }
        .nav-links { display: flex; gap: var(--g); list-style: none; }
        .nav-links a { text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #000; }
        .hero { max-width: 480px; margin: 0 auto; padding: 44px var(--p) 0; }
        .hero-available { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: var(--g); }
        .hero-dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; flex-shrink: 0; animation: z-pulse 2s ease-in-out infinite; }
        @keyframes z-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.6; transform:scale(1.3); } }
        .hero h1 { font-family: 'Bebas Neue', sans-serif; font-weight: 400; font-size: 56px; line-height: .95; letter-spacing: 1px; margin-bottom: var(--g); }
        .hero-sub { font-size: 16px; line-height: 1.65; color: #333; margin-bottom: 28px; max-width: 340px; }
        .btn-black { display: inline-block; background: #000; color: #fff; font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 32px; border-radius: 4px; text-decoration: none; border: 1px solid #000; cursor: pointer; margin-bottom: 44px; transition: background .18s, border-color .18s; width: auto; align-self: flex-start; }
        .btn-black:hover { background: var(--blue); border-color: var(--blue); }
        .ticker-wrapper { overflow-x: auto; overflow-y: hidden; width: 100vw; position: relative; left: 50%; margin-left: -50vw; padding: 20px 0; cursor: grab; user-select: none; scrollbar-width: none; }
        .ticker-wrapper::-webkit-scrollbar { display: none; }
        .ticker-wrapper.dragging { cursor: grabbing; }
        .ticker-track { display: flex; gap: 16px; width: max-content; animation: ticker-scroll 40s linear infinite; }
        .ticker-wrapper.dragging .ticker-track,
        .ticker-wrapper:hover .ticker-track { animation-play-state: paused; }
        @keyframes ticker-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ticker-item { width: 280px; height: 180px; border-radius: 4px; overflow: hidden; flex-shrink: 0; pointer-events: none; }
        .ticker-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .section-title { font-family: 'Bebas Neue', sans-serif; font-size: 50px; letter-spacing: 1px; line-height: 1; text-align: left; padding: 30px var(--p); max-width: 480px; margin: 0 auto; }
        .phases, .projects { max-width: 480px; margin: 0 auto; padding: 0 var(--p); display: flex; flex-direction: column; gap: var(--g); }
        .phase-card { border-radius: 4px; overflow: hidden; border: 1px solid #000; }
        .phase-card-top { background: var(--blue); color: #fff; padding: 20px; }
        .phase-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .phase-card-top ol { padding-left: 16px; }
        .phase-card-top ol li { font-size: 14px; margin-bottom: 4px; }
        .phase-card-bottom { background: #000; color: #fff; padding: 20px; }
        .phase-card-bottom .tagline { font-weight: 700; font-size: 14px; line-height: 1.35; margin-bottom: 8px; }
        .phase-card-bottom p { font-size: 13px; line-height: 1.7; }
        .project-card { border: 1px solid #000; border-radius: 4px; overflow: hidden; }
        .project-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
        .project-info { padding: 20px; }
        .project-name { font-weight: 700; font-size: 14px; letter-spacing: 0.5px; margin-bottom: 2px; }
        .project-type { font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; }
        .cta-banner { max-width: 480px; margin: 30px auto 0; padding: 0 var(--p); }
        .cta-banner-inner { border: 1px solid #000; border-radius: 4px; overflow: hidden; }
        .cta-banner-inner img { width: 100%; height: 150px; object-fit: cover; display: block; }
        .cta-body { padding: var(--p); display: flex; justify-content: space-between; align-items: center; gap: 12px; border-top: 1px solid #000; }
        .cta-text { font-weight: 700; font-size: 14px; line-height: 1.4; flex: 1; }
        .cta-arrow { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #000; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; cursor: pointer; transition: background .18s, color .18s; text-decoration: none; color: #000; }
        .cta-arrow:hover { background: #000; color: #fff; }
        .process-section { max-width: 480px; margin: 0 auto; padding: 0 var(--p); }
        .process-title { font-family: 'Bebas Neue', sans-serif; font-size: 50px; letter-spacing: 1px; line-height: 1; text-align: left; padding: 30px 0; }
        .process-step { padding: var(--g) 0; border-top: 1px solid #000; }
        .process-step:last-child { border-bottom: 1px solid #000; }
        .process-num { font-size: 11px; font-weight: 700; color: var(--blue); letter-spacing: 1px; margin-bottom: 4px; }
        .process-name { font-weight: 700; font-size: 14px; letter-spacing: .3px; margin-bottom: 8px; }
        .process-step p { font-size: 13px; line-height: 1.7; }
        .pricing-section { max-width: 480px; margin: 0 auto; padding: 0 var(--p); }
        .pricing-title { font-family: 'Bebas Neue', sans-serif; font-size: 46px; letter-spacing: 1px; line-height: 1.05; color: var(--blue); padding: 30px 0; }
        .pricing-grid { display: flex; flex-direction: column; gap: var(--g); }
        .price-card { background: var(--blue); border-radius: 4px; color: #fff; overflow: hidden; border: 1px solid var(--blue); }
        .price-card-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid rgba(255,255,255,.3); }
        .plan-name { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .plan-icon { width: 26px; height: 26px; border-radius: 50%; border: 1px solid rgba(255,255,255,.5); display: flex; align-items: center; justify-content: center; font-size: 13px; }
        .price-card-body { padding: 20px; }
        .price-amount { font-family: 'Bebas Neue', sans-serif; font-size: 72px; letter-spacing: -1px; line-height: 1; margin-bottom: 6px; }
        .price-delivery { font-size: 12px; font-weight: 700; margin-bottom: var(--g); }
        .price-divider { height: 1px; background: rgba(255,255,255,.3); margin-bottom: var(--g); }
        .price-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: var(--g); }
        .price-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; line-height: 1.45; }
        .price-features li.add-on { opacity: .6; }
        .check { width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(255,255,255,.5); display: flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0; margin-top: 1px; }
        .btn-white { display: inline-block; background: #fff; color: var(--blue); font-weight: 700; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; padding: 16px 28px; border-radius: 4px; text-align: center; text-decoration: none; border: 1px solid #fff; cursor: pointer; transition: background .18s, color .18s, border-color .18s; align-self: flex-start; }
        .btn-white:hover { background: #000; color: #fff; border-color: #000; }
        .faq-section { max-width: 480px; margin: 0 auto; padding: 0 var(--p); }
        .faq-title { font-family: 'Bebas Neue', sans-serif; font-size: 50px; letter-spacing: 2px; padding: 30px 0; }
        .faq-list { display: flex; flex-direction: column; gap: var(--g); }
        .faq-item { background: #f2f2f2; border-radius: 4px; overflow: hidden; transition: background .2s; }
        .faq-item.open { background: var(--blue); }
        .faq-question { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 20px; text-align: left; }
        .faq-question span { font-size: 13px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; line-height: 1.4; flex: 1; color: #000; transition: color .2s; }
        .faq-item.open .faq-question span { color: #fff; }
        .faq-icon { width: 20px; height: 20px; flex-shrink: 0; position: relative; display: flex; align-items: center; justify-content: center; }
        .faq-icon::before, .faq-icon::after { content: ''; position: absolute; background: #000; transition: transform .25s, opacity .25s, background .2s; }
        .faq-icon::before { width: 14px; height: 1px; }
        .faq-icon::after { width: 1px; height: 14px; }
        .faq-item.open .faq-icon::before, .faq-item.open .faq-icon::after { background: #fff; }
        .faq-item.open .faq-icon::after { opacity: 0; transform: rotate(90deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height .3s ease; padding: 0 20px; }
        .faq-answer p { font-size: 13px; line-height: 1.7; padding-bottom: 20px; color: #000; transition: color .2s; }
        .faq-item.open .faq-answer { max-height: 400px; }
        .faq-item.open .faq-answer p { color: #fff; }
        .about-section { background: #000; margin-top: 30px; padding: 30px var(--p); }
        .about-inner { max-width: 480px; margin: 0 auto; }
        .about-title { font-family: 'Bebas Neue', sans-serif; font-size: 50px; letter-spacing: 1px; line-height: 1; text-align: center; color: #fff; margin-bottom: 28px; }
        .about-photo { width: 100%; border-radius: 4px; display: block; margin-bottom: 28px; aspect-ratio: 4/3; object-fit: cover; object-position: top; filter: grayscale(100%); border: 1px solid rgba(255,255,255,.2); }
        .about-headline { font-weight: 700; font-size: 16px; line-height: 1.5; text-align: center; text-transform: uppercase; color: #fff; margin-bottom: 20px; letter-spacing: .3px; }
        .about-body { font-size: 14px; color: #fff; line-height: 1.75; text-align: center; margin-bottom: 32px; }
        .btn-white-outline { display: block; background: #fff; color: #000; font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px var(--p); border-radius: 4px; text-align: center; text-decoration: none; border: 1px solid #fff; transition: background .18s, color .18s, border-color .18s; }
        .btn-white-outline:hover { background: var(--blue); color: #fff; border-color: var(--blue); }
        .contact-section { max-width: 480px; margin: 0 auto; padding: 30px var(--p) 0; }
        .contact-title { font-weight: 700; font-size: 44px; letter-spacing: -1.5px; line-height: 1; margin-bottom: 30px; }
        .contact-form { background: var(--blue); border-radius: 4px; padding: var(--p); display: flex; flex-direction: column; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #fff; }
        .form-group input, .form-group textarea { background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.3); border-radius: 4px; padding: 14px var(--p); font-family: 'DM Sans', sans-serif; font-size: 14px; color: #fff; width: 100%; outline: none; resize: none; }
        .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,.4); }
        .form-group input:focus, .form-group textarea:focus { border-color: #fff; }
        .form-group textarea { min-height: 110px; }
        .btn-form-submit { display: block; background: #fff; color: var(--blue); font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px var(--p); border-radius: 4px; text-align: center; border: 1px solid #fff; cursor: pointer; width: 100%; margin-top: 4px; transition: background .18s, color .18s, border-color .18s; }
        .btn-form-submit:hover { background: #000; color: #fff; border-color: #000; }
        .z-footer { padding: 30px 0 40px; }
        .footer-logo-row { overflow: hidden; width: 100%; }
        .footer-logo { font-weight: 700; font-size: clamp(72px, 20vw, 160px); letter-spacing: -4px; line-height: 1; display: block; padding: 8px var(--p); white-space: nowrap; }
        .footer-links { max-width: 480px; margin: 30px auto 0; padding: 0 var(--p); display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
        .footer-links a { text-decoration: none; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #000; display: flex; align-items: center; gap: 6px; }
        .footer-desc { max-width: 480px; margin: 30px auto 0; padding: 24px var(--p) 0; }
        .footer-desc p { font-size: 12px; font-weight: 700; text-transform: uppercase; text-align: left; letter-spacing: .5px; line-height: 1.75; }

        @media (min-width: 900px) {
          .z-root { --p: 40px; }
          .z-root nav,
          .hero,
          .section-title,
          .phases,
          .projects,
          .cta-banner,
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

          .hero { padding-top: 80px; min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 60px; }
          .hero h1 { font-size: 140px; letter-spacing: 2px; max-width: 1100px; }
          .hero-sub { font-size: 18px; max-width: 540px; }
          .btn-black { margin-bottom: 0; padding: 18px 36px; }

          .section-title { font-size: 110px; letter-spacing: 2px; padding: 60px 40px; }
          .process-title, .pricing-title, .faq-title { font-size: 110px; padding: 60px 0; }
          .about-title { font-size: 96px; text-align: center; }
          .contact-title { font-size: 88px; letter-spacing: -3px; }

          .phases { display: grid; grid-template-columns: repeat(3, 1fr); align-items: stretch; }
          .phase-card { display: flex; flex-direction: column; }
          .phase-card-top, .phase-card-bottom { padding: 20px; }
          .phase-card-bottom { flex: 1; }

          .projects { display: grid; grid-template-columns: repeat(2, 1fr); }
          .project-card img { height: 360px; }
          .project-info { padding: 20px; }

          .see-all-wrap { max-width: none; padding: 30px 40px 0; display: flex; justify-content: flex-start; }

          .process-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
          .process-title { padding: 60px 0 0; position: sticky; top: 40px; }
          .process-steps-col { display: flex; flex-direction: column; padding-top: 60px; }
          .process-step { display: grid; grid-template-columns: 60px 1fr; gap: 24px; align-items: start; padding: 24px 0; }
          .process-num { margin-bottom: 0; font-size: 13px; }
          .process-name { margin-bottom: 6px; font-size: 16px; }
          .process-step p { font-size: 15px; }

          .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); align-items: stretch; }
          .price-card { display: flex; flex-direction: column; }
          .price-card-body { flex: 1; display: flex; flex-direction: column; padding: 20px; }
          .price-features { flex: 1; }
          .price-amount { font-size: 96px; }
          .btn-white { padding: 16px 28px; }

          .faq-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
          .faq-title { padding: 60px 0 0; position: sticky; top: 40px; }
          .faq-list { padding-top: 60px; }
          .faq-question { padding: 24px; }
          .faq-question span { font-size: 14px; }
          .faq-answer { padding: 0 24px; }
          .faq-answer p { padding-bottom: 24px; }

          .about-section { padding: 60px 0; }
          .about-inner { max-width: 60% !important; margin: 0 auto !important; padding-left: 0 !important; padding-right: 0 !important; display: flex; flex-direction: column; align-items: center; gap: 28px; }
          .about-title { margin-bottom: 0; }
          .about-photo { width: 100%; margin-bottom: 0; aspect-ratio: 16/10; }
          .about-right { display: flex; flex-direction: column; align-items: center; gap: 24px; width: 100%; }
          .about-headline { text-align: center; font-size: 18px; margin-bottom: 0; }
          .about-body { text-align: center; margin-bottom: 0; font-size: 15px; }
          .btn-white-outline { display: inline-block; width: auto; padding: 16px 32px; }

          .contact-section { max-width: 560px !important; margin: 0 auto !important; padding-left: 40px !important; padding-right: 40px !important; }
          .contact-form { padding: 24px; display: flex; flex-direction: column; gap: 16px; }
          .btn-form-submit { width: 100%; padding: 16px 20px; }

          .footer-logo-row { text-align: center; }
          .footer-logo { text-align: center; }
          .footer-links { flex-direction: row; flex-wrap: wrap; gap: 32px; justify-content: center; align-items: center; }
          .footer-desc { text-align: center; }
          .footer-desc p { text-align: center; }
          .ticker-item { width: 360px; height: 220px; }
        }
      `}</style>

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
          <h1>WEBSITES BUILT TO MOVE BRANDS FORWARD</h1>
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
                <ol>{p.items.map((it) => <li key={it}>{it}</li>)}</ol>
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
            <div key={pr.name} className="project-card">
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

        <div className="cta-banner">
          <div className="cta-banner-inner">
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80" alt="" />
            <div className="cta-body">
              <div className="cta-text">
                Need a brand identity?<br />Click here to explore visual identity solutions.
              </div>
              <a href="#contact" className="cta-arrow">→</a>
            </div>
          </div>
        </div>

        <section className="process-section">
          <h2 className="process-title">CREATIVE<br />PROCESS</h2>
          {processSteps.map((s) => (
            <div key={s.num} className="process-step">
              <div className="process-num">{s.num}</div>
              <div className="process-name">{s.name}</div>
              <p>{s.body}</p>
            </div>
          ))}
        </section>

        <section className="pricing-section" id="pricing">
          <h2 className="pricing-title">PICK THE PLAN<br />THAT FITS.</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-card-header">
                <span className="plan-name">Landing Page</span>
                <span className="plan-icon">→</span>
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
                <span className="plan-icon">→</span>
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
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon" />
                </button>
                <div className="faq-answer"><p>{f.a}</p></div>
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
