import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 break-words overflow-hidden">
            <section>
              <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground">
                Salh Isso<br />
                Smartpixel Webagentur Inh. Salh Isso<br />
                Grünstr. 18<br />
                58095 Hagen
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <p className="text-muted-foreground break-all">
                Telefon: 023317889100<br />
                E-Mail: info@smartpixel-agentur.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE366314315
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Angaben zur Berufs­haftpflicht­versicherung</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Name und Sitz des Versicherers:</strong><br />
                Hiscox SA, Niederlassung für Deutschland<br />
                Arnulfstraße 31<br />
                80636 München<br />
                Deutschland
              </p>
              <p className="text-muted-foreground">
                <strong>Geltungsraum der Versicherung:</strong><br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Redaktionell verantwortlich</h2>
              <p className="text-muted-foreground">
                Salh Isso<br />
                Grünstr. 18<br />
                58095 Hagen<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 hyphens-auto" lang="de">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 hyphens-auto" lang="de">Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)</h2>
              <p className="text-muted-foreground mb-4">
                Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:
              </p>
              <p className="text-muted-foreground mb-4 break-all">
                E-Mail: info@smartpixel-agentur.de<br />
                Telefon: 023317889100
              </p>
              <p className="text-muted-foreground">
                Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
