import { ArrowLeft } from "lucide-react";

export default function PurchaseTerms() {
  return (
    <main className="legal-page">
      <a href="/" className="back-home">
        <ArrowLeft size={18} />
        Tillbaka till TechFront
      </a>

      <section className="legal-hero">
        <h1>Köpvillkor</h1>

        <p>
          Dessa köpvillkor gäller för köp av tjänster via techfront.se.
        </p>
      </section>

      <section className="legal-content">

        <h2>1. Allmänt</h2>
        <p>
          Genom att genomföra ett köp via TechFront accepterar kunden dessa
          köpvillkor samt våra avtalsvillkor och vår integritetspolicy.
        </p>

        <h2>2. Tjänster</h2>
        <p>
          TechFront erbjuder digitala tjänster inom webbdesign,
          utveckling och support.
        </p>

        <p>
          Tjänsternas innehåll varierar beroende på valt paket eller
          överenskommen offert.
        </p>

        <h2>3. Priser</h2>
        <p>
          Alla priser anges i svenska kronor (SEK).
        </p>

        <p>
          TechFront förbehåller sig rätten att justera priser och
          erbjudanden när som helst.
        </p>

        <h2>4. Betalning</h2>
        <p>
          Betalning sker via de betalningslösningar som erbjuds på
          webbplatsen.
        </p>

        <p>
          Prenumerationstjänster debiteras månadsvis i förskott.
        </p>

        <p>
          Vid utebliven betalning har TechFront rätt att pausa eller
          avsluta tjänsten tills full betalning mottagits.
        </p>

        <h2>5. Leverans</h2>
        <p>
          Leveranstiden varierar beroende på projektets omfattning och
          kundens återkoppling.
        </p>

        <p>
          Normal leveranstid är mellan 5–14 arbetsdagar.
        </p>

        <h2>6. Ångerrätt</h2>
        <p>
          Eftersom TechFront erbjuder digitala och specialanpassade
          tjänster gäller inte ångerrätt efter att arbetet har påbörjats,
          enligt gällande konsumentskyddslagstiftning för digitala tjänster.
        </p>

        <h2>7. Prenumerationer</h2>
        <p>
          Prenumerationer löper månadsvis och kan sägas upp när som helst
          med 30 dagars uppsägningstid.
        </p>

        <p>
          Uppsägning ska ske skriftligen via email.
        </p>

        <h2>8. Ansvar</h2>
        <p>
          Kunden ansvarar för att tillhandahålla korrekt material och
          information som krävs för projektet.
        </p>

        <p>
          TechFront ansvarar inte för förseningar eller problem som orsakas
          av tredje part, webbhotell, domänleverantörer eller utebliven
          kundåterkoppling.
        </p>

        <h2>9. Kontakt</h2>

        <p>
          Vid frågor kring köp eller betalningar kan du kontakta TechFront.
        </p>

        <p>
          <strong>Email:</strong> hellotechfront@hotmail.com
          <br />
          <strong>Webbplats:</strong> techfront.se
        </p>

      </section>
    </main>
  );
}