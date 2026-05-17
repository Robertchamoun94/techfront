import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      left: "20px",
      right: "20px",
      zIndex: 9999,
      background: "rgba(10, 15, 25, 0.96)",
      color: "#fff",
      padding: "20px",
      borderRadius: "18px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      border: "1px solid rgba(255,255,255,0.12)",
      maxWidth: "720px",
      margin: "0 auto",
      fontFamily: "inherit"
    }}>
      <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>
        Vi använder cookies
      </h3>

      <p style={{
        margin: "0 0 16px",
        fontSize: "14px",
        lineHeight: "1.6",
        color: "rgba(255,255,255,0.78)"
      }}>
        Vi använder nödvändiga cookies för att webbplatsen ska fungera och kan använda analyscookies för att förbättra upplevelsen. Du kan acceptera eller neka cookies.
      </p>

      <div style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
      }}>
        <button
          onClick={acceptCookies}
          style={{
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "#fff",
            border: "none",
            padding: "11px 18px",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Acceptera
        </button>

        <button
          onClick={rejectCookies}
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
            padding: "11px 18px",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Neka
        </button>

        <a
          href="/integritetspolicy"
          style={{
            color: "rgba(255,255,255,0.75)",
            padding: "11px 4px",
            fontSize: "14px",
            textDecoration: "underline"
          }}
        >
          Läs mer
        </a>
      </div>
    </div>
  );
}