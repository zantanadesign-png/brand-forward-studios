import { useEffect, useRef, useState } from "react";

interface ProblemSectionProps {
  isMobile: boolean;
  isTouchDevice: boolean;
}

export default function ProblemSection({ isMobile, isTouchDevice }: ProblemSectionProps) {
  const [progress, setProgress] = useState(isMobile || isTouchDevice ? 1 : 0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile || isTouchDevice) {
      setProgress(1);
      return;
    }

    let ticking = false;
    let lastProgress = -1;
    let observer: IntersectionObserver | null = null;
    let isVisible = false;

    const update = () => {
      const el = ref.current;
      if (!el || !isVisible) return;

      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const th = rect.height;
      let p = Math.max(0, Math.min(1, -rect.top / (th - wh)));
      p = Math.round(p * 100) / 100;

      if (p !== lastProgress) {
        setProgress(p);
        lastProgress = p;
      }
    };

    const onScroll = () => {
      if (!ticking && isVisible) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible) update();
      },
      { rootMargin: "20% 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [isMobile, isTouchDevice]);

  return (
    <section ref={ref} className="problem-section" data-theme="blue">
      <div className="problem-sticky problem-desktop">
        <div className="problem-texts">
          <h2 className={`problem-item ${progress > 0.15 ? "is-active" : ""}`}>
            Your company grew.
          </h2>
          <h2 className={`problem-item ${progress > 0.35 ? "is-active" : ""}`}>
            Your service got better.
          </h2>
          <h2 className={`problem-item ${progress > 0.55 ? "is-active" : ""}`}>
            Your team has scaled.
          </h2>
          <p className={`problem-item ${progress > 0.70 ? "is-active" : ""}`}>
            But your website and visual identity still don't
            <br />
            reflect the level you operate at today.
          </p>
        </div>
      </div>
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
  );
}
