import { useEffect, useState } from "react";

interface SaleNotificationProps {
  visible: boolean;
  onClose: () => void;
  commission?: string;
}

const SaleNotification = ({ visible, onClose, commission = "R$94,50" }: SaleNotificationProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 400);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: show ? "translateX(0) scale(1)" : "translateX(120%) scale(0.9)",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "rgba(30, 30, 30, 0.97)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          padding: "14px 18px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          minWidth: "280px",
          maxWidth: "340px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "linear-gradient(135deg, #ff6a00, #e02020)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            flexShrink: 0,
          }}
        >
          🔥
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#fff",
              margin: 0,
              lineHeight: 1.2,
              marginBottom: "3px",
            }}
          >
            Venda Aprovada!
          </p>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              color: "#bbb",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Sua comissão {commission}
          </p>
        </div>

        {/* Timestamp */}
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "11px",
            color: "#666",
            margin: 0,
            alignSelf: "flex-start",
            whiteSpace: "nowrap",
          }}
        >
          agora
        </p>
      </div>
    </div>
  );
};

export default SaleNotification;
