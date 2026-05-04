import { useEffect, useRef, useState } from "react";
import vals from "../assets/vals.png";

interface TimelineEvent {
  time: string;
  label: string;
  icon: React.ReactNode;
}

const ChurchIcon = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
    <path d="M22 4v4h-3v4h3v2L12 22v20h8v-8h8v8h8V22L26 14v-2h3V8h-3V4h-4z" />
  </svg>
);

const RingsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" width="36" height="36">
    <circle cx="17" cy="28" r="10" />
    <circle cx="31" cy="28" r="10" />
    <path d="M17 10 L17 4 M14 7 L20 7" strokeLinecap="round" />
  </svg>
);

// Pareja bailando vals: silueta clásica entrelazada
const WaltzIcon = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
    {/* cabeza él */}
    <circle cx="29" cy="7" r="3.5" />
    {/* cuerpo él */}
    <path d="M26 11 Q22 16 23 22 L27 22 Q27 17 29 14 Q31 17 31 22 L35 22 Q36 16 32 11 Z" />
    {/* piernas él */}
    <path d="M27 22 Q25 30 24 36 L27 36 Q28 31 29 27 Q30 31 31 36 L34 36 Q33 30 31 22 Z" />
    {/* cabeza ella */}
    <circle cx="19" cy="8" r="3" />
    {/* vestido ella */}
    <path d="M16 12 Q13 16 14 20 L17 20 Q17 16 19 14 Q21 16 21 20 L24 20 Q25 16 22 12 Z" />
    {/* falda ella */}
    <path d="M14 20 Q11 28 10 36 L14 36 Q16 29 19 25 Q22 29 22 36 L26 36 Q25 28 24 20 Z" />
    {/* brazos unidos */}
    <path d="M24 16 Q26 14 28 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* nota musical decorativa */}
    <circle cx="39" cy="12" r="2" />
    <rect x="40.5" y="7" width="1.2" height="5" rx="0.5" />
    <circle cx="43" cy="9" r="1.5" />
    <rect x="44.2" y="4" width="1.2" height="5" rx="0.5" />
  </svg>
);

// Plato con cubiertos: clásico y limpio
const DinnerIcon = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
    {/* plato */}
    <circle cx="24" cy="26" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="26" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
    {/* tenedor izquierda */}
    <rect x="7" y="8" width="1.5" height="10" rx="0.75" />
    <rect x="5.5" y="8" width="1.2" height="7" rx="0.6" />
    <rect x="8.8" y="8" width="1.2" height="7" rx="0.6" />
    <rect x="7" y="15" width="1.5" height="18" rx="0.75" />
    {/* cuchillo derecha */}
    <rect x="39" y="8" width="1.8" height="28" rx="0.9" />
    <path d="M39 8 Q43 12 40.8 18 L39 18 Z" />
  </svg>
);

// Copas de champagne chocando
const ToastIcon = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
    {/* copa izquierda */}
    <path d="M10 6 L10 22 Q10 30 17 30 L17 38 L13 38 L13 40 L21 40 L21 38 L17 38 L17 30 Q24 30 24 22 L24 6 Z" />
    {/* copa derecha */}
    <path d="M38 6 L38 22 Q38 30 31 30 L31 38 L35 38 L35 40 L27 40 L27 38 L31 38 L31 30 Q24 30 24 22 L24 6 Z" />
    {/* burbujas copa izquierda */}
    <circle cx="15" cy="20" r="1" opacity="0.7" />
    <circle cx="17" cy="14" r="1.2" opacity="0.8" />
    <circle cx="13" cy="15" r="0.8" opacity="0.6" />
    {/* burbujas copa derecha */}
    <circle cx="33" cy="20" r="1" opacity="0.7" />
    <circle cx="31" cy="14" r="1.2" opacity="0.8" />
    <circle cx="35" cy="15" r="0.8" opacity="0.6" />
    {/* destellos del choque */}
    <line x1="24" y1="3" x2="24" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="4" x2="22" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="28" y1="4" x2="26" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const CakeIcon = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
    <rect x="10" y="28" width="28" height="12" rx="2" />
    <rect x="14" y="18" width="20" height="10" rx="1" />
    <rect x="18" y="10" width="12" height="8" rx="1" />
    <rect x="23" y="5" width="2" height="5" rx="1" />
    <circle cx="24" cy="4" r="2" fill="#e8c97e" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" width="36" height="36">
    <path d="M24 4l4 12h13l-10 8 4 12-11-8-11 8 4-12L7 16h13z" />
  </svg>
);

const events: TimelineEvent[] = [
  { time: "18:00", label: "Matrimonio Religioso", icon: <ChurchIcon /> },
  { time: "19:30", label: "Recepción", icon: <RingsIcon /> },
  { time: "20:00", label: "Vals de Novios", icon: <div style={{
    width: '36px',
    height: '36px',
    backgroundColor: 'currentColor',
    WebkitMaskImage: `url(${vals})`,
    WebkitMaskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskImage: `url(${vals})`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
  }} /> },
  { time: "21:00", label: "Cena", icon: <DinnerIcon /> },
  { time: "22:00", label: "Brindis e Inicio de Fiesta", icon: <ToastIcon /> },
  { time: "23:30", label: "Torta", icon: <CakeIcon /> },
  { time: "03:00", label: "Final de Celebración", icon: <StarIcon /> },
];

export default function WeddingTimeline() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(events.length).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && idx !== -1) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }, idx * 120);
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      {/* Decorative top ornament */}
      <div style={styles.ornamentTop}>
        <span style={styles.ornamentLine} />
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#c9a84c">
          <path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z" />
        </svg>
        <span style={styles.ornamentLine} />
      </div>

      <p style={styles.subtitle}>Programa del día</p>
      <h2 style={styles.title}>El Gran Día</h2>

      <div style={styles.timelineWrapper}>
        {/* Vertical line */}
        <div style={styles.verticalLine} />

        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          const visible = visibleItems[i];
          return (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              style={{
                ...styles.row,
                flexDirection: isLeft ? "row" : "row-reverse",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : `translateY(${isLeft ? 24 : -24}px)`,
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* Content card */}
              <div style={{ ...styles.card, textAlign: isLeft ? "right" : "left" }}>
                <span style={styles.cardTime}>{event.time}</span>
                <p style={styles.cardLabel}>{event.label}</p>
                {/* Connector arrow */}
                <div
                  style={{
                    ...styles.cardConnector,
                    [isLeft ? "right" : "left"]: -10,
                    borderColor: isLeft
                      ? "transparent transparent transparent #c9a84c33"
                      : "transparent #c9a84c33 transparent transparent",
                  }}
                />
              </div>

              {/* Center dot */}
              <div style={styles.dotWrapper}>
                <div style={styles.dotOuter}>
                  <div style={styles.dotInner} />
                </div>
              </div>

              {/* Icon bubble */}
              <div style={{ ...styles.iconBubble, alignItems: isLeft ? "flex-start" : "flex-end" }}>
                <div style={styles.iconCircle}>
                  <span style={styles.iconColor}>{event.icon}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom ornament */}
      <div style={styles.ornamentTop}>
        <span style={styles.ornamentLine} />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#c9a84c">
          <circle cx="10" cy="10" r="4" />
          <circle cx="10" cy="10" r="8" fill="none" stroke="#c9a84c" strokeWidth="1" />
        </svg>
        <span style={styles.ornamentLine} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500&display=swap');

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8d5a3";
const CREAM = "#fdf8f0";
const DARK = "#2a1f0e";

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: CREAM,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 24px 80px",
    fontFamily: "'Raleway', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  ornamentTop: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    maxWidth: 480,
    margin: "16px 0",
  },
  ornamentLine: {
    flex: 1,
    height: 1,
    background: `linear-gradient(to right, transparent, ${GOLD_LIGHT}, transparent)`,
    display: "block",
  },
  subtitle: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: GOLD,
    margin: "8px 0 4px",
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
    color: DARK,
    margin: "0 0 48px",
    letterSpacing: "0.05em",
    fontStyle: "italic",
  },
  timelineWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 720,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  verticalLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 1,
    background: `linear-gradient(to bottom, transparent, ${GOLD_LIGHT} 8%, ${GOLD_LIGHT} 92%, transparent)`,
    transform: "translateX(-50%)",
    zIndex: 0,
  },
  row: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "relative",
    zIndex: 1,
    marginBottom: 8,
  },
  card: {
    flex: 1,
    background: "#fff",
    border: `1px solid ${GOLD_LIGHT}`,
    borderRadius: 12,
    padding: "14px 20px",
    margin: "8px 16px",
    position: "relative",
    boxShadow: "0 2px 16px rgba(201,168,76,0.08)",
  },
  cardConnector: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 0,
    height: 0,
    borderWidth: 8,
    borderStyle: "solid",
  },
  cardTime: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.35rem",
    fontWeight: 600,
    color: GOLD,
    display: "block",
    letterSpacing: "0.05em",
  },
  cardLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: "0.82rem",
    fontWeight: 400,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: DARK,
    margin: "4px 0 0",
    lineHeight: 1.4,
  },
  dotWrapper: {
    width: 20,
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  dotOuter: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#fff",
    border: `2px solid ${GOLD}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "pulse-dot 3s ease-in-out infinite",
  },
  dotInner: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: GOLD,
  },
  iconBubble: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "0 16px",
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "#fff",
    border: `1.5px solid ${GOLD_LIGHT}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 12px rgba(201,168,76,0.12)",
  },
  iconColor: {
    color: GOLD,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};