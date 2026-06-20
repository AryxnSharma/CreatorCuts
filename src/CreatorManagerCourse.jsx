import React, { useEffect, useRef, useState } from "react";
import { Scissors, Zap, Clock, TrendingUp, CheckCircle2, ArrowRight, Play, Twitch, Youtube, Instagram, Menu, X, Star } from "lucide-react";

/* ---------- Reveal-on-scroll wrapper (PhonePe-style staggered fade/rise) ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ to, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration, started]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
}

const PLANS = [
  {
    name: "Spark",
    tag: "For streamers just starting their clip game",
    price: "6,999",
    period: "/month",
    clips: "15 edited clips / month",
    features: [
      "Posted to 1 platform of your choice",
      "48-hour turnaround per batch",
      "Cinematic captions & sound design",
      "Monthly performance recap",
    ],
    highlight: false,
  },
  {
    name: "Surge",
    tag: "For streamers ready to scale their reach",
    price: "14,999",
    period: "/month",
    clips: "35 edited clips / month",
    features: [
      "Posted to 3 platforms (YT Shorts, Reels, TikTok)",
      "24-hour turnaround per batch",
      "Custom thumbnail design",
      "Trend-matched hooks & pacing",
      "Bi-weekly strategy check-in",
    ],
    highlight: true,
  },
  {
    name: "Apex",
    tag: "For full-time streamers building a brand",
    price: "29,999",
    period: "/month",
    clips: "60+ edited clips / month",
    features: [
      "Posted to all major platforms",
      "12-hour priority turnaround",
      "Dedicated personal editor",
      "Channel art & thumbnail suite",
      "Monthly 1:1 strategy call",
      "Detailed analytics dashboard",
    ],
    highlight: false,
  },
];

export default function CreatorCutsSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      "--bg": "#0A0A0F",
      "--bg-soft": "#121218",
      "--card": "#16161E",
      "--violet": "#7C3AFF",
      "--violet-light": "#A78BFA",
      "--magenta": "#D946C9",
      "--silver": "#C7C7D1",
      "--text": "#F4F4F8",
      "--text-dim": "#8E8E9C",
      fontFamily: "'Inter', -apple-system, sans-serif",
      background: "var(--bg)",
      color: "var(--text)",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .display { font-family: 'Anton', 'Inter', sans-serif; letter-spacing: 0.01em; text-transform: uppercase; }
        body { background: #0A0A0F; }
        ::selection { background: #7C3AFF; color: white; }
        .cc-link { color: var(--text-dim); text-decoration: none; font-weight: 500; font-size: 14.5px; transition: color .25s; }
        .cc-link:hover { color: var(--text); }
        .cc-btn-primary {
          background: linear-gradient(135deg, #7C3AFF, #D946C9);
          color: white; border: none; padding: 14px 28px; border-radius: 999px;
          font-weight: 700; font-size: 15px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: transform .25s cubic-bezier(.16,1,.3,1), box-shadow .25s;
          box-shadow: 0 8px 24px -8px rgba(124,58,255,0.6);
        }
        .cc-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 32px -8px rgba(124,58,255,0.8); }
        .cc-btn-ghost {
          background: rgba(255,255,255,0.04); color: var(--text); border: 1px solid rgba(255,255,255,0.12);
          padding: 13px 26px; border-radius: 999px; font-weight: 600; font-size: 15px; cursor: pointer;
          transition: all .25s;
        }
        .cc-btn-ghost:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.25); }
        .float { animation: floaty 5s ease-in-out infinite; }
        @keyframes floaty { 0%,100%{ transform: translateY(0px);} 50%{ transform: translateY(-14px);} }
        @keyframes drift { 0%{ transform: translate(0,0);} 50%{ transform: translate(20px,-30px);} 100%{ transform: translate(0,0);} }
        .glow1 { animation: drift 12s ease-in-out infinite; }
        .glow2 { animation: drift 16s ease-in-out infinite reverse; }
        .pricing-card { transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s, border-color .35s; }
        .pricing-card:hover { transform: translateY(-10px); border-color: rgba(124,58,255,0.5) !important; box-shadow: 0 24px 60px -20px rgba(124,58,255,0.45); }
        .feat-card { transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s; }
        .feat-card:hover { transform: translateY(-6px); border-color: rgba(124,58,255,0.4) !important; }
        .step-num { -webkit-text-stroke: 1.5px rgba(124,58,255,0.5); color: transparent; }
        @media (max-width: 860px) {
          .cc-nav-links { display: none !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 13vw !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "14px 6vw" : "22px 6vw",
        background: scrolled ? "rgba(10,10,15,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all .35s cubic-bezier(.16,1,.3,1)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ position: "relative", width: 30, height: 30 }}>
            <svg viewBox="0 0 100 100" width="30" height="30">
              <path d="M70 20 A30 30 0 1 0 70 80 L50 50 Z" fill="url(#g1)" />
              <path d="M30 20 A30 30 0 1 1 30 80 L50 50 Z" fill="#C7C7D1" />
              <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A78BFA" /><stop offset="100%" stopColor="#7C3AFF" />
              </linearGradient></defs>
            </svg>
          </div>
          <span className="display" style={{ fontSize: 18, letterSpacing: "0.04em" }}>CREATOR<span style={{ color: "var(--violet-light)" }}>CUTS</span></span>
        </div>
        <div className="cc-nav-links" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <a className="cc-link" href="#how">How it works</a>
          <a className="cc-link" href="#plans">Plans</a>
          <a className="cc-link" href="#faq">FAQ</a>
          <button className="cc-btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Get started <ArrowRight size={15} /></button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "white" }}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", padding: "168px 6vw 100px", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <div className="glow1" style={{ position: "absolute", top: "-10%", right: "-8%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,255,0.35), transparent 70%)", filter: "blur(40px)" }} />
        <div className="glow2" style={{ position: "absolute", bottom: "-15%", left: "-8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,70,201,0.25), transparent 70%)", filter: "blur(40px)" }} />

        <Reveal>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,255,0.1)", border: "1px solid rgba(124,58,255,0.3)", padding: "7px 16px", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "var(--violet-light)", marginBottom: 28, width: "fit-content" }}>
            <Scissors size={14} /> Now onboarding streamers for July
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="display hero-title" style={{ fontSize: "clamp(48px, 7.2vw, 108px)", lineHeight: 0.96, maxWidth: 1100, position: "relative" }}>
            WE CUT YOUR <span style={{ color: "var(--violet-light)", position: "relative", display: "inline-block" }}>STREAMS</span><br />
            INTO <span style={{
              background: "linear-gradient(135deg, #7C3AFF, #D946C9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>VIRAL MOMENTS</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p style={{ fontSize: 19, color: "var(--text-dim)", maxWidth: 560, marginTop: 26, lineHeight: 1.6 }}>
            A done-for-you clipping service for streamers. We watch every stream, cut the moments that matter, and post them — so you can focus on going live, not editing footage.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div style={{ display: "flex", gap: 16, marginTop: 38, flexWrap: "wrap" }}>
            <a href="#plans"><button className="cc-btn-primary">See plans &amp; pricing <ArrowRight size={16} /></button></a>
            <button className="cc-btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Play size={15} /> Watch our work</button>
          </div>
        </Reveal>

        <Reveal delay={460}>
          <div style={{ display: "flex", gap: 48, marginTop: 76, flexWrap: "wrap" }}>
            <div>
              <div className="display" style={{ fontSize: 34, color: "var(--violet-light)" }}><Counter to={2400000} />+</div>
              <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>Views generated for creators</div>
            </div>
            <div>
              <div className="display" style={{ fontSize: 34, color: "var(--violet-light)" }}><Counter to={48} suffix="hr" /></div>
              <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>Max turnaround, Spark plan</div>
            </div>
            <div>
              <div className="display" style={{ fontSize: 34, color: "var(--violet-light)" }}><Counter to={120} suffix="+" /></div>
              <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>Clips delivered monthly</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "100px 6vw", background: "var(--bg-soft)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--violet-light)", letterSpacing: "0.12em", marginBottom: 12 }}>HOW IT WORKS</div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 48px)", maxWidth: 700, marginBottom: 56 }}>FROM RAW STREAM TO POSTED CLIP</h2>
        </Reveal>
        <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { n: "01", t: "You stream", d: "Go live like always on Twitch, Kick or YouTube. That's the only job left for you.", i: <Twitch size={22} /> },
            { n: "02", t: "We watch & cut", d: "Our editors review every VOD and cut the highlights worth posting.", i: <Scissors size={22} /> },
            { n: "03", t: "We polish", d: "Captions, sound design, pacing and a thumbnail — built for the scroll.", i: <Zap size={22} /> },
            { n: "04", t: "We post", d: "Clips go out across your chosen platforms, on schedule, every time.", i: <TrendingUp size={22} /> },
          ].map((s, i) => (
            <Reveal delay={i * 110} key={s.n}>
              <div className="feat-card" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "28px 22px", height: "100%" }}>
                <div className="step-num display" style={{ fontSize: 40, marginBottom: 14 }}>{s.n}</div>
                <div style={{ color: "var(--violet-light)", marginBottom: 14 }}>{s.i}</div>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.6 }}>{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="plans" style={{ padding: "110px 6vw" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--violet-light)", letterSpacing: "0.12em", marginBottom: 12 }}>PLANS &amp; PRICING</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 52px)", marginBottom: 16 }}>PICK YOUR CUT</h2>
            <p style={{ color: "var(--text-dim)", maxWidth: 520, margin: "0 auto", fontSize: 16 }}>Simple monthly plans. No contracts, no per-clip haggling — cancel or upgrade whenever your stream grows.</p>
          </div>
        </Reveal>

        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 60, alignItems: "stretch" }}>
          {PLANS.map((p, i) => (
            <Reveal delay={i * 130} key={p.name}>
              <div className="pricing-card" style={{
                position: "relative", height: "100%",
                background: p.highlight ? "linear-gradient(180deg, rgba(124,58,255,0.14), var(--card) 40%)" : "var(--card)",
                border: p.highlight ? "1.5px solid rgba(124,58,255,0.6)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 22, padding: "34px 28px", display: "flex", flexDirection: "column",
              }}>
                {p.highlight && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #7C3AFF, #D946C9)", padding: "6px 16px", borderRadius: 999, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}>
                    <Star size={12} fill="white" /> MOST POPULAR
                  </div>
                )}
                <div className="display" style={{ fontSize: 24, marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 13.5, color: "var(--text-dim)", marginBottom: 24, minHeight: 36 }}>{p.tag}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 17, color: "var(--text-dim)" }}>₹</span>
                  <span className="display" style={{ fontSize: 42 }}>{p.price}</span>
                  <span style={{ fontSize: 14, color: "var(--text-dim)" }}>{p.period}</span>
                </div>
                <div style={{ fontSize: 14, color: "var(--violet-light)", fontWeight: 600, marginBottom: 26 }}>{p.clips}</div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 22 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 30, flex: 1 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text)", alignItems: "flex-start" }}>
                      <CheckCircle2 size={17} style={{ color: "var(--violet-light)", flexShrink: 0, marginTop: 1 }} /> {f}
                    </div>
                  ))}
                </div>
                <button className={p.highlight ? "cc-btn-primary" : "cc-btn-ghost"} style={{ width: "100%", justifyContent: "center" }}>
                  Choose {p.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={420}>
          <p style={{ textAlign: "center", color: "var(--text-dim)", fontSize: 13.5, marginTop: 32 }}>Need a custom volume or multi-streamer deal? <a href="#" style={{ color: "var(--violet-light)" }}>Talk to us →</a></p>
        </Reveal>
      </section>

      {/* PLATFORMS STRIP */}
      <section style={{ padding: "50px 6vw", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-soft)" }}>
        <Reveal>
          <div style={{ display: "flex", gap: 56, justifyContent: "center", flexWrap: "wrap", alignItems: "center", color: "var(--text-dim)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}><Twitch size={20} /> Twitch</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}><Youtube size={20} /> YouTube Shorts</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}><Instagram size={20} /> Instagram Reels</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}><Zap size={20} /> Kick</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}><Clock size={20} /> TikTok</div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "110px 6vw", maxWidth: 820, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--violet-light)", letterSpacing: "0.12em", marginBottom: 12 }}>FAQ</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 42px)", marginBottom: 50 }}>QUESTIONS, ANSWERED</h2>
        </Reveal>
        {[
          { q: "Do I need to send you footage?", a: "No — give us access to your VODs and we handle the rest. Nothing extra for you to upload or organize." },
          { q: "Can I change plans later?", a: "Yes, upgrade or downgrade anytime. Your new plan kicks in from the next billing cycle." },
          { q: "Who picks the moments to clip?", a: "Our editors review full VODs and select clips based on what performs — you can also flag timestamps yourself." },
          { q: "What if I stream less in a given month?", a: "Unused clip credits roll over for one month, so a quiet week doesn't cost you." },
        ].map((f, i) => (
          <Reveal delay={i * 90} key={f.q}>
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "22px 0" }}>
              <div style={{ fontWeight: 700, fontSize: 16.5, marginBottom: 8 }}>{f.q}</div>
              <div style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.6 }}>{f.a}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "110px 6vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="float" style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,255,0.25), transparent 70%)", filter: "blur(50px)" }} />
        <Reveal>
          <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 64px)", position: "relative" }}>READY TO GET CUT?</h2>
          <p style={{ color: "var(--text-dim)", marginTop: 18, fontSize: 17, maxWidth: 460, margin: "18px auto 0" }}>Join the streamers letting Creator Cuts turn their streams into their next thousand subscribers.</p>
          <div style={{ marginTop: 34 }}>
            <button className="cc-btn-primary" style={{ fontSize: 16, padding: "16px 34px" }}>Start your free consult <ArrowRight size={17} /></button>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 6vw", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <span className="display" style={{ fontSize: 15 }}>CREATOR<span style={{ color: "var(--violet-light)" }}>CUTS</span></span>
        <span style={{ fontSize: 13, color: "var(--text-dim)" }}>© 2026 Creator Cuts. All streams, sharpened.</span>
      </footer>
    </div>
  );
}
