import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SaleNotification from "@/components/SaleNotification";
import { playSaleSound } from "@/hooks/useSaleSound";
import presenterImg from "@/assets/presenter.png";
import bgMusic from "@/assets/background.mp3";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [notifVisible, setNotifVisible] = useState(false);
  const [commission, setCommission] = useState("R$120,00");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const randomCommission = () => {
    const val = Math.floor(Math.random() * (180 - 100 + 1)) + 100;
    const cents = Math.floor(Math.random() * 100);
    return `R$${val},${cents.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    audio.play().catch(() => {
      const unlock = () => {
        audio.play().catch(() => {});
        window.removeEventListener("click", unlock);
        window.removeEventListener("touchstart", unlock);
      };
      window.addEventListener("click", unlock);
      window.addEventListener("touchstart", unlock);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    window.fbq?.('track', 'AddToCart', { content_name: 'Ultra Low', value: 6.99, currency: 'BRL' });
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

  const bodyText: React.CSSProperties = {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "clamp(15px, 2.5vw, 18px)",
    fontWeight: 400,
    color: "#bbb",
    textAlign: "center",
    lineHeight: 1.7,
    maxWidth: "620px",
    margin: "0 auto 20px",
  };

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
          padding: "60px 24px 60px",
        }}
      >
        {/* Presenter image */}
        <img
          src={presenterImg}
          alt="Presenter"
          style={{
            width: "min(280px, 75vw)",
            height: "auto",
            objectFit: "contain",
            display: "block",
            marginBottom: "40px",
          }}
        />

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 400,
            color: "#fff",
            textAlign: "center",
            letterSpacing: "0.03em",
            marginBottom: "32px",
            maxWidth: "700px",
          }}
        >
          A verdade é uma só...
        </h1>

        {/* Body paragraphs */}
        <p style={bodyText}>
          Os gurus adoram "ensinar" <strong style={{ color: "#fff" }}>fórmulas recicladas:</strong> clone isso, rode VSL,
          faz funil de x1 no WhatsApp e blá! blá! blá!
        </p>

        <p style={bodyText}>
          <strong style={{ color: "#fff" }}>Sabe qual o Resultado?</strong> Mesma oferta, mesmo funil, mesmo fracasso 🤡
        </p>

        <p style={bodyText}>
          Digo isso, porque eu também cai nesse papinho deles... eu{" "}
          <strong style={{ color: "#fff" }}>também me frustrei</strong> e achei que esse mercado não era pra mim
        </p>

        <p style={bodyText}>
          E após tanto tempo pulando de galho em galho perdendo tempo e dinheiro, eu resolvi andar com minhas próprias pernas
        </p>

        <p style={bodyText}>
          Criei o sistema <strong style={{ color: "#fff" }}>ultralow</strong> — um mecanismo que cria ofertas{" "}
          <strong style={{ color: "#fff" }}>low ticket</strong> únicas
        </p>

        <p style={bodyText}>
          Literalmente é o tipo de coisa que faz você nadar num{" "}
          <strong style={{ color: "#4a9eff" }}>oceano azul</strong> enquanto o resto se afoga no mar vermelho das ofertas clonadas.
        </p>

        {/* Big CTA text */}
        <p
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(22px, 4vw, 36px)",
            fontWeight: 400,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "680px",
            margin: "32px auto 12px",
            letterSpacing: "0.02em",
          }}
        >
          Agora me diz... se eu liberar meu sistema para você (lá ele) e te ensinar por apenas{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationStyle: "solid",
            }}
          >
            R$6,99
          </span>{" "}
          como eu crio e ESCALO ofertas ÚNICAS ultra low tickets black, você aceitaria?
        </p>

        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: "#bbb",
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          Eu sei, parece pegadinha... <strong style={{ color: "#fff" }}>Mas não é!</strong>
        </p>

        {/* Two buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxWidth: "660px",
          }}
        >
          {/* Reject button */}
          <button
            onClick={() => navigate("/final")}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(15px, 2.5vw, 18px)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#aaa",
              background: "transparent",
              border: "1.5px solid #444",
              borderRadius: "12px",
              padding: "18px 28px",
              cursor: "pointer",
              flex: "1 1 220px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#666";
              (e.currentTarget as HTMLButtonElement).style.color = "#ccc";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#444";
              (e.currentTarget as HTMLButtonElement).style.color = "#aaa";
            }}
          >
            Tá de brincadeira né? 😂
          </button>

          {/* CTA button */}
          <button
            onClick={() => { playSaleSound(); setNotifVisible(true); navigate("/final"); }}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(15px, 2.5vw, 18px)",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#fff",
              background: "#111",
              border: "1.5px solid #333",
              borderRadius: "12px",
              padding: "18px 28px",
              cursor: "pointer",
              flex: "1 1 220px",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 20px rgba(255,255,255,0.04)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#1a1a1a";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#555";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#111";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#333";
            }}
          >
            Só se for agora 😈
          </button>
        </div>

      </main>
    </>
  );
};

export default CheckoutPage;
