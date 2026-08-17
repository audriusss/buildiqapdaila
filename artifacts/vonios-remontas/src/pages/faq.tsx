import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";

const faqs = [
  {
    q: "Kiek kainuoja vonios remontas?",
    a: "Tikslią kainą galima pasakyti tik pamačius objektą ir aptarus jūsų viziją. Kaina priklauso nuo daugelio faktorių: senų plytelių lupimo, sienų lyginimo poreikio, plytelių formato, montuojamos santechnikos (pvz., potinkinis WC ar paprastas) ir elektros taškų kiekio. Vidutiniškai kapitalinis standartinės vonios remontas su medžiagomis trunka apie mėnesį ir kainuoja nuo 3500 iki 5000 EUR ir daugiau."
  },
  {
    q: "Kiek laiko trunka vonios remontas?",
    a: "Pilnas vonios kambario remontas nuo nulio dažniausiai trunka apie 3–4 savaites. Svarbu suprasti, kad kai kurie procesai (betono džiūvimas, hidroizoliacijos sluoksniai) reikalauja technologinio laiko, kurio skubinti negalima. Taip pat priklauso nuo plytelių formato — didelio formato plytelės reikalauja ypatingo kruopštumo ruošiant sienas."
  },
  {
    q: "Ar atliekate visus darbus patys, ar samdote subrangovus?",
    a: "Visi vonios remonto darbai — nuo griovimo, santechnikos išvedžiojimo iki gipskartonio montavimo ir plytelių klijavimo — yra atliekami iš vienų rankų. Tai užtikrina geresnę kokybę, greitesnį procesą (nereikia derintis su kitais meistrais) ir mažiau streso užsakovui."
  },
  {
    q: "Ar klijuojate didelio formato plyteles (120x60, 120x120)?",
    a: "Taip, turiu visą reikiamą profesionalią įrangą didelio formato plytelių pjovimui (taip pat ir 45 laipsnių kampu). Šios plytelės sukuria prabangų, vientisą vaizdą, tačiau reikalauja itin kruopštaus sienų paruošimo ir lyginimo, todėl darbai gali trukti šiek tiek ilgiau nei su standartinėmis plytelėmis."
  },
  {
    q: "Ar padedate nupirkti ir atvežti statybines medžiagas (klijus, mišinius, hidroizoliaciją)?",
    a: "Taip. Remonto procesas bus kur kas lengvesnis Jums — aš pats apskaičiuoju kiekius, nuperku ir atvežu visas reikalingas juodąsias statybines medžiagas. Sumokėsite pagal pateiktus kvitus."
  },
  {
    q: "Ką turiu nusipirkti aš?",
    a: "Jums reikės išsirinkti ir nupirkti tik „matomas“ apdailos medžiagas: plyteles, unitazą (ir jo rėmą, jei potinkinis), kriauklę, spintelę, dušo sistemą/maišytuvus, gyvatuką, veidrodį. Galiu pakonsultuoti, kokius gamintojus geriau rinktis, į ką atkreipti dėmesį perkant potinkines sistemas."
  },
  {
    q: "Ar montuojate potinkinius WC ir dušo trapus?",
    a: "Taip, tai populiariausias sprendimas moderniuose vonios kambariuose. Svarbu žinoti, kad dušo trapui būtinas tinkamas nuolydis grindyse, todėl dažniausiai prireikia grindų betonavimo ar ardymo pradiniame etape. Potinkinis WC reikalauja apdailos (gipskartonio karkaso), kuris vėliau apklijuojamas plytelėmis."
  },
  {
    q: "Ar darote dalinį vonios remontą (pvz., tik pakeisti unitazą arba perklijuoti plyteles ant senų)?",
    a: "Aš specializuojuosi į kapitalinį vonios kambarių įrengimą. Dalinio remonto (vieno maišytuvo keitimo ar plytelių klijavimo ant nelygių sienų) dažniausiai neapsiimu, nes neįmanoma garantuoti ilgaamžio ir kokybiško rezultato."
  },
  {
    q: "Kokiame regione dirbate?",
    a: "Pagrindinis regionas — Klaipėda. Taip pat galiu atvykti į objektus Palangoje, Gargžduose, Kretingoje ir kitose aplinkinėse gyvenvietėse."
  },
  {
    q: "Ar būtina vonios hidroizoliacija?",
    a: "Tai vienas svarbiausių etapų. Hidroizoliacija privaloma dušo ir vonios zonose, taip pat rekomenduojama viso vonios kambario grindims su užlaida ant sienų. Taip apsaugosite savo ir kaimynų turtą nuo galimų vandens pratekėjimų."
  },
  {
    q: "Ar galite pasakyti sąmatą iš nuotraukos?",
    a: "Nuotrauka labai padeda įvertinti esamą situaciją (ypač jei reikia griovimo). Pamačius nuotraukas ir išgirdus Jūsų norus (kokios plytelės, kokia santechnika) galiu pasakyti preliminarią rėžių kainą. Tačiau tiksli sąmata sudaroma tik apžiūrėjus objektą gyvai."
  },
  {
    q: "Kada reikia kreiptis norint užsisakyti vonios remontą?",
    a: "Geriems meistrams dažniausiai susidaro eilės. Rekomenduojama susisiekti likus bent 1–3 mėnesiams iki planuojamos darbų pradžios. Taip turėsite pakankamai laiko ramiai išsirinkti plyteles ir santechniką, kurios kartais tenka laukti iš užsienio sandėlių kelias savaites."
  }
];

export default function FAQ() {
  return (
    <Layout>
      <SEO 
        title="Dažniausiai užduodami klausimai (D.U.K.)"
        description="Atsakymai į svarbiausius klausimus apie vonios remontą, kainas, trukmę, medžiagas ir darbo procesą Klaipėdoje."
        path="/faq"
      />

      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Klausimai & Atsakymai</h1>
            <p className="text-xl text-muted-foreground">
              Atvirai ir aiškiai apie vonios remonto procesą, kainas ir reikalavimus.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-24">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div id="susisiekti" className="bg-white p-8 md:p-12 border border-border mt-16 scroll-mt-24">
            <h2 className="text-3xl font-serif mb-4 text-center">Nerandate atsakymo?</h2>
            <p className="text-muted-foreground text-center mb-8">Užpildykite formą ir susisieksiu su jumis asmeniškai.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
