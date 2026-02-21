import { useState, useEffect } from "react";
import presenter3 from "@/assets/presenter3.png";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const faqs = [
  {
    question: "O que exatamente é o ultralow?",
    answer:
      "O ultralow é um método para criar ofertas low ticket únicas, pensado para gerar vendas constantes sem precisar clonar o que todo mundo já faz.",
  },
  {
    question: "Precisa clonar ofertas?",
    answer:
      "Não. O ultralow ensina exatamente o oposto: como criar ofertas únicas que se destacam no mercado.",
  },
  {
    question: "Preciso investir em alguma ferramenta de IA?",
    answer:
      "Não é necessário. O método funciona com ferramentas gratuitas e acessíveis.",
  },
  {
    question: "Funciona pra quem nunca vendeu nada online?",
    answer:
      "Sim! O ultralow foi pensado justamente para quem está começando e quer resultados reais sem depender de experiência prévia.",
  },
  {
    question: "Posso aplicar mesmo com pouco tempo livre?",
    answer:
      "Sim. O método é direto ao ponto e pode ser aplicado em poucas horas por semana.",
  },
  {
    question: "E se eu não tiver resultado?",
    answer:
      "O método vem com garantia. Se você aplicar e não tiver resultado, devolvemos o seu investimento.",
  },
  {
    question: "Será que vende mesmo?",
    answer:
      "Sim. Ofertas low ticket têm um dos maiores volumes de venda do mercado digital — e o ultralow ensina como aproveitar isso.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        border: "1.5px solid #333",
        borderRadius: "12px",
        padding: "20px 24px",
        cursor: "pointer",
        background: "#111",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 2.5vw, 17px)",
            color: "#fff",
          }}
        >
          {question}
        </span>
        <span
          style={{
            color: "#fff",
            fontSize: "20px",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          &#8964;
        </span>
      </div>
      {open && (
        <p
          style={{
            marginTop: "14px",
            fontFamily: "sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            color: "#aaa",
            lineHeight: 1.6,
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
};

const FinalPage = () => {
  useEffect(() => {
    window.fbq?.('track', 'Lead', { content_name: 'Ultra Low Final Page' });
  }, []);

  const handlePurchaseClick = () => {
    window.fbq?.('track', 'Purchase', { content_name: 'Ultra Low', value: 6.99, currency: 'BRL' });
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "60px 24px",
      }}
    >
      <p
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 400,
          color: "#fff",
          textAlign: "center",
          letterSpacing: "0.03em",
          lineHeight: 1.3,
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        Copiar o que já funciona é a maneira mais segura de garantir que{" "}
        <span style={{ color: "#ff3333" }}>você falhe</span> junto com a multidão
      </p>
      <img
        src={presenter3}
        alt="Apresentador"
        style={{
          marginTop: "40px",
          maxWidth: "420px",
          width: "100%",
          borderRadius: "12px",
        }}
      />

      {/* FAQ Section */}
      <div style={{ width: "100%", maxWidth: "760px", marginTop: "60px" }}>
        <h2
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px, 4vw, 36px)",
            color: "#fff",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Dúvidas Frequentes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="https://pay.lowify.com.br/checkout.php?product_id=sbFHAu"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        onClick={handlePurchaseClick}
      >
        <button
          style={{
            marginTop: "48px",
            marginBottom: "40px",
            background: "#e02020",
            color: "#fff",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(20px, 3.5vw, 30px)",
            letterSpacing: "0.08em",
            border: "none",
            borderRadius: "12px",
            padding: "20px 48px",
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(224,32,32,0.5)",
            animation: "pulse 1.8s infinite",
          }}
        >
          🔥 ATIVAR O ULTRA LOW
        </button>
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(224,32,32,0.5); }
          50% { transform: scale(1.04); box-shadow: 0 0 50px rgba(224,32,32,0.8); }
        }
      `}</style>
    </main>
  );
};

export default FinalPage;
