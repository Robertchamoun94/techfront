import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Menu, ShieldCheck, Sparkles, X } from "lucide-react";
import "./styles.css";

const logoUrl = "/techfront-logo.png";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Paketpriser", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Kontakt", href: "#contact" },
  ];

  const services = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Hemsida + Support",
      price: "299kr",
      period: "/månaden",
      stripeUrl: "https://buy.stripe.com/aFa6oH3Cy94kaApdwT67S03",
      features: [
        "Professionell hemsida",
        "Mobilanpassad",
        "Hjälp med domän & Publicering",
        "Hosting hantering",
        "Mindre uppdateringar",
        "Teknisk support",
        "Säkerhetsuppdateringar",
      ],
      button: "Välj prenumeration",
      highlighted: true,
    },
    {
      icon: <Code2 size={22} />,
      title: "Engångsköp",
      price: "5000kr",
      period: "engångsköp",
      stripeUrl: "https://buy.stripe.com/00w28r1uqa8o23TgJ567S02",
      features: [
        "Komplett hemsida",
        "Mobilanpassad",
        "SEO-Grund",
        "Hjälp med domän & publicering",
      ],
      button: "Köp komplett hemsida",
      highlighted: true,
    },
  ];

  return (
    <main id="top" className="site">
      <div className="background" aria-hidden="true" />
      <Header navItems={navItems} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="mobile-cta" href="#contact" onClick={() => setMobileOpen(false)}>
            Starta projekt
          </a>
        </div>
      )}

      <section className="hero section-shell">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="eyebrow">
            <Sparkles size={16} /> Nästa generationens hemsidor för företag
          </div>

          <h1>
            Premium webbdesign med <span>tech precision</span>.
          </h1>

          <p className="lead">
            TechFront skapar exklusiva, snabba och SEO-optimerade hemsidor för företag som vill se moderna, trovärdiga och professionella ut online.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#contact">
              Boka kostnadsfri analys <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href="#services">
              Se våra paketpriser
            </a>
          </div>

          <div className="stats">
            <Stat value="100%" label="Responsivt" />
            <Stat value="SEO" label="Redo från start" />
            <Stat value="<1s" label="Snabb känsla" />
          </div>
        </motion.div>

        <motion.div className="hero-card-wrap" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }}>
          <div className="hero-glow" />
          <div className="hero-card">
            <div className="logo-stage">
              <img src={logoUrl} alt="TechFront emblem" />
              <div className="code-box">
                <p><b>const</b> brand = <span>"TechFront"</span>;</p>
                <p><b>build</b>("premium", "fast", "seo-ready");</p>
                <p className="comment">// deploy: modern web presence</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="section-shell services-section">
        <div className="section-heading">
          <div>
            <p className="kicker">Paketpriser</p>
            <h2>Välj det paket som passar ditt företag.</h2>
          </div>
          <Layers3 className="heading-icon" size={44} />
        </div>

        <div className="service-grid package-grid">
          {services.map((service) => (
            <article className={`service-card package-card ${service.highlighted ? "highlighted-package" : ""}`} key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <div className="package-price">
                {service.price} <span>{service.period}</span>
              </div>

              <ul className="package-list">
                {service.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <a
                className={service.highlighted ? "primary-btn" : "secondary-btn"}
                href={service.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.button}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-shell process-section">
        <div className="process-panel">
          <div className="process-intro">
            <ShieldCheck size={44} />
            <h2>Strategi först. Design därefter. Resultat alltid.</h2>
          </div>

          <div className="steps">
            <Step title="01. Analys" text="Vi kartlägger målgrupp, positionering och SEO-möjligheter." />
            <Step title="02. Design" text="Vi skapar en premium upplevelse med stark visuell identitet." />
            <Step title="03. Launch" text="Vi lanserar snabbt, tekniskt rent och redo för trafik." />
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
  <p className="kicker">TechFront</p>

  <h2>
    Dags att ge ditt företag en hemsida som känns premium?
  </h2>

  <p>
    Vi skapar moderna hemsidor för företag som vill sticka ut,
    ranka bättre och konvertera fler besökare.
  </p>

  <a
    href="mailto:hellotechfront@hotmail.com"
    className="contact-btn"
  >
    Kontakta TechFront
  </a>

  <div className="contact-details">
    <a
      href="tel:+46700478423"
      className="contact-link"
    >
      +46 70 047 84 23
    </a>

    <a
      href="mailto:hellotechfront@hotmail.com"
      className="contact-link"
    >
      hellotechfront@hotmail.com
    </a>
  </div>
</section>
    </main>
  );
}

function Header({ navItems, mobileOpen, setMobileOpen }) {
  return (
    <header className="header">
      <a href="#top" className="brand" aria-label="TechFront startsida">
        <img src={logoUrl} alt="TechFront logo" />
        <div>
          <strong>TECHFRONT</strong>
          <small>Premium Web Agency</small>
        </div>
      </a>

      <nav className="desktop-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Starta projekt
      </a>

      <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Öppna meny">
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Step({ title, text }) {
  return (
    <article className="step">
      <p>{title}</p>
      <span>{text}</span>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);