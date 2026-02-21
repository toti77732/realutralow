import presenterImg from "@/assets/presenter2.png";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import SaleNotification from "@/components/SaleNotification";
import { playSaleSound } from "@/hooks/useSaleSound";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const SitePage = () => {
  const navigate = useNavigate();
  const [notifVisible, setNotifVisible] = useState(false);
  const [commission, setCommission] = useState("R$120,00");

  const randomCommission = () => {
    const val = Math.floor(Math.random() * (180 - 100 + 1)) + 100;
    const cents = Math.floor(Math.random() * 100);
    return `R$${val},${cents.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    // Track ViewContent when user lands on sales page
    window.fbq?.('track', 'ViewContent', { content_name: 'Sales Page' });
  }, []);

  useEffect(() => {
    const fire = () => {
      setCommission(randomCommission());
      playSaleSound();
      setNotifVisible(true);
    };
    const interval = setInterval(fire, 16000);
    const initial = setTimeout(fire, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  const handleCTA = useCallback(() => {
    window.fbq?.('track', 'InitiateCheckout');
    playSaleSound();
    setNotifVisible(true);
    setTimeout(() => navigate("/checkout"), 1200);
  }, [navigate]);

  return (
    <>
      <SaleNotification
        visible={notifVisible}
        onClose={() => setNotifVisible(false)}
        commission={commission}
      />
      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "48px 24px 0",
        }}
      >
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 400,
            color: "#fff",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.35,
            letterSpacing: "0.01em",
          }}
        >
          Veja na prática um dos{" "}
          <span style={{ color: "#e02020", fontWeight: 700 }}>
            únicos métodos
          </span>{" "}
          validados para escalar{" "}
          <strong style={{ color: "#fff", fontWeight: 700 }}>
            ofertas ultra low ticket de R$1,99.
          </strong>
        </p>

        <img
          src={presenterImg}
          alt="Apresentador"
          style={{
            marginTop: "32px",
            width: "clamp(260px, 70vw, 460px)",
            height: "auto",
            display: "block",
            borderRadius: "12px",
          }}
        />

        <div
          style={{
            marginTop: "40px",
            maxWidth: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "64px",
          }}
        >
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(16px, 3.5vw, 22px)",
              fontWeight: 400,
              color: "#ccc",
              textAlign: "center",
              lineHeight: 1.5,
              marginBottom: "36px",
            }}
          >
            O melhor é que com{" "}
            <strong style={{ color: "#fff", fontWeight: 700 }}>apenas R$6,99</strong>{" "}
            <em>(não é click bait)</em> você vai ter acesso ao meu ecossistema que me gerou essas premiações da foto acima
          </p>

          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(18px, 4vw, 26px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            MAS, VAMOS FAZER UM ACORDO? 👇
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              width: "100%",
              marginBottom: "36px",
            }}
          >
            {[
              { emoji: "❌", text: "Esquece VSL de 30 minutos" },
              { emoji: "😢", text: "Clonar ofertas? Isso é pra topo de funil" },
              { emoji: "😐", text: "X1 no whatsapp nem pensar" },
              { emoji: "😂", text: "PLR? kkkkkkkkkkkkkk" },
            ].map((item) => (
              <p
                key={item.text}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(16px, 3.5vw, 21px)",
                  fontWeight: 400,
                  color: "#ddd",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {item.emoji} {item.text}
              </p>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(18px, 4vw, 26px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            ACORDO FEITO? ENTÃO BORA 👇
          </p>

          <button
            onClick={handleCTA}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(16px, 3vw, 20px)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#e02020",
              border: "none",
              borderRadius: "999px",
              padding: "18px 72px",
              cursor: "pointer",
              boxShadow: "0 4px 32px rgba(224,32,32,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 6px 48px rgba(224,32,32,0.6)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 32px rgba(224,32,32,0.35)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            CLIQUE AQUI 🔥
          </button>
        </div>
      </main>
    </>
  );
};

export default SitePage;
