import { useNavigate } from "react-router-dom";
import ultraLowHero from "@/assets/ultra-low-hero.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px 40px",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 55% at 50% 48%, hsl(43 60% 20% / 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main composition image */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ultraLowHero}
          alt="Ultra Low"
          style={{
            width: "min(100vw, 820px)",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* CTA Button */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          marginTop: "clamp(20px, 5vw, 36px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Glow ring behind button */}
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            borderRadius: "999px",
            background:
              "radial-gradient(ellipse at center, hsl(43 70% 30% / 0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <button
          onClick={() => navigate("/site")}
          style={{
            position: "relative",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(11px, 3.5vw, 13px)",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "hsl(0 0% 85%)",
            background:
              "linear-gradient(135deg, hsl(30 30% 9%) 0%, hsl(30 25% 13%) 100%)",
            border: "1px solid hsl(43 60% 35% / 0.5)",
            borderRadius: "999px",
            padding: "clamp(14px, 4vw, 17px) clamp(32px, 10vw, 60px)",
            cursor: "pointer",
            boxShadow:
              "0 0 0 4px hsl(43 40% 12% / 0.35), inset 0 1px 0 hsl(43 80% 50% / 0.08)",
            transition: "all 0.3s ease",
            outline: "none",
            width: "min(320px, 90vw)",
            textAlign: "center",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.boxShadow =
              "0 0 0 4px hsl(43 40% 20% / 0.5), 0 0 40px hsl(43 80% 40% / 0.35), inset 0 1px 0 hsl(43 80% 50% / 0.15)";
            el.style.borderColor = "hsl(43 70% 50% / 0.7)";
            el.style.color = "hsl(43 90% 72%)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.boxShadow =
              "0 0 0 4px hsl(43 40% 12% / 0.35), inset 0 1px 0 hsl(43 80% 50% / 0.08)";
            el.style.borderColor = "hsl(43 60% 35% / 0.5)";
            el.style.color = "hsl(0 0% 85%)";
          }}
        >
          ENTRAR NO SITE &nbsp;→
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
