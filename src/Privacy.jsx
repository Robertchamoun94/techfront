import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <main className="legal-page">
      <a href="/" className="back-home">
        <ArrowLeft size={18} />
        Tillbaka till TechFront
      </a>

      <section className="legal-hero">
        <h1>Integritetspolicy</h1>
        <p>
          Denna integritetspolicy beskriver hur TechFront hanterar personuppgifter
          när du använder vår webbplats eller kontaktar oss.
        </p>
      </section>

      <section className="legal-content">
        <h2>1. Personuppgiftsansvarig</h2>
        <p>
          TechFront ansvarar för behandlingen av personuppgifter som samlas in
          via techfront.se eller genom direkt kontakt med oss.
        </p>

        <h2>2. Vilka uppgifter vi samlar in</h2>
        <p>
          Vi kan samla in uppgifter som namn, företagsnamn, e-postadress,
          telefonnummer och annan information som du själv lämnar när du
          kontaktar oss eller beställer en tjänst.
        </p>

        <h2>3. Varför vi behandlar personuppgifter</h2>
        <p>
          Vi behandlar personuppgifter för att kunna hantera förfrågningar,
          leverera våra tjänster, skapa kundkontakt, administrera betalningar
          och fullfölja avtal.
        </p>

        <h2>4. Betalningar</h2>
        <p>
          Betalningar kan hanteras genom externa betalningsleverantörer.
          TechFront lagrar inte fullständiga kortuppgifter.
        </p>

        <h2>5. Delning av uppgifter</h2>
        <p>
          Vi säljer inte personuppgifter till tredje part. Uppgifter kan delas
          med betrodda leverantörer när det krävs för att leverera våra tjänster,
          exempelvis betalningslösningar, hosting, domänhantering eller
          tekniska system.
        </p>

        <h2>6. Lagringstid</h2>
        <p>
          Personuppgifter sparas endast så länge det är nödvändigt för att
          uppfylla syftet med behandlingen, hantera kundrelationen eller följa
          lagkrav.
        </p>

        <h2>7. Dina rättigheter</h2>
        <p>
          Du har rätt att begära information om vilka personuppgifter vi
          behandlar om dig. Du kan även begära rättelse, radering eller
          begränsning av behandling enligt gällande dataskyddslagstiftning.
        </p>

        <h2>8. Cookies</h2>
        <p>
          TechFront kan använda cookies för att förbättra webbplatsens funktion,
          analysera trafik och ge en bättre användarupplevelse. Du kan själv
          hantera cookies i din webbläsare.
        </p>

        <h2>9. Säkerhet</h2>
        <p>
          Vi arbetar för att skydda personuppgifter genom rimliga tekniska och
          organisatoriska säkerhetsåtgärder.
        </p>

        <h2>10. Ändringar</h2>
        <p>
          TechFront kan uppdatera denna integritetspolicy vid behov. Den senaste
          versionen finns alltid publicerad på techfront.se.
        </p>

        <h2>11. Kontakt</h2>
        <p>
          Vid frågor om hur vi hanterar personuppgifter kan du kontakta oss.
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