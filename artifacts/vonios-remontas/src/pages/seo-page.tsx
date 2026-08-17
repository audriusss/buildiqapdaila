import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { ArrowLeft, Phone } from "lucide-react";

interface SeoPageProps {
  title: string;
  h1: string;
  description: string;
  content: React.ReactNode;
  slug: string;
}

export default function SeoPage({ title, h1, description, content, slug }: SeoPageProps) {
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        path={`/${slug}`}
      />

      <article className="pt-32 pb-24 bg-background min-h-[80vh]">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground mb-10 group transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Grįžti į pagrindinį
          </Link>

          {/* Page header */}
          <div className="mb-14">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">{h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-16
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-li:text-muted-foreground
            prose-strong:text-foreground prose-strong:font-medium
            prose-ol:text-muted-foreground">
            {content}
          </div>

          {/* CTA block */}
          <div className="border border-white/8 bg-[#111111] p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-serif mb-3">Reikalinga konsultacija?</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md">
              Susisiekite dėl nemokamos konsultacijos ir preliminarios sąmatos Jūsų objektui Klaipėdos regione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37067496909"
                className="inline-flex items-center justify-center gap-2 px-6 h-11 border border-white/15 text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                +370 674 96909
              </a>
              <Link
                href="/#susisiekti"
                className="inline-flex items-center justify-center px-6 h-11 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Gauti pasiūlymą
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

// ── SEO pages data ──────────────────────────────────────────────────────────
export const seoPagesData: Record<string, Omit<SeoPageProps, "slug">> = {
  "vonios-remontas-klaipeda": {
    title: "Vonios remontas Klaipėda",
    h1: "Profesionalus vonios remontas Klaipėdoje",
    description: "Pilnas vonios kambario įrengimas nuo A iki Z. Visi darbai iš vienų rankų. Kokybės garantija ir ilgametė patirtis.",
    content: (
      <>
        <p>Vonios kambarys – tai ramybės ir atsipalaidavimo oazė Jūsų namuose. Profesionalus <strong>vonios remontas Klaipėdoje</strong> reikalauja specifinių žinių ir patirties, kadangi tai pati drėgniausia ir sudėtingiausia patalpa visame būste.</p>
        <h2>Visi darbai iš vienų rankų</h2>
        <p>Pasirinkę mano paslaugas, Jums nereikės ieškoti atskirų meistrų santechnikai, elektrai ir apdailai. Atlieku visus darbus kompleksiškai:</p>
        <ul>
          <li>Senos apdailos ir santechnikos demontavimas, šiukšlių išvežimas.</li>
          <li>Vandentiekio ir kanalizacijos vamzdynų keitimas, potinkinių sistemų montavimas.</li>
          <li>Elektros instaliacijos atnaujinimas, šildomų grindų įrengimas.</li>
          <li>Sienų lyginimas, hidroizoliacijos įrengimas.</li>
          <li>Plytelių klijavimas (įskaitant didelio formato plyteles).</li>
          <li>Galutinis santechnikos prietaisų ir baldų montavimas.</li>
        </ul>
        <p>Dirbu tvarkingai, laikydamasis technologinių reikalavimų, todėl rezultatas džiugins ilgus metus.</p>
      </>
    ),
  },
  "plyteliu-klijavimas-klaipeda": {
    title: "Plytelių klijavimas Klaipėda",
    h1: "Kokybiškas plytelių klijavimas Klaipėdoje",
    description: "Visų tipų ir formatų plytelių klijavimas. Tikslūs 45 laipsnių kampai, idealus lygumas ir ilgaamžiškumas.",
    content: (
      <>
        <p>Plytelių klijavimas – tai apdailos etapas, reikalaujantis ypatingo kruopštumo ir tikslumo. Būtent nuo šio darbo kokybės priklauso galutinis vonios kambario estetinio vaizdo įspūdis.</p>
        <h2>Profesionalus požiūris į detales</h2>
        <p>Klijuoju keramines, akmens masės ir mozaikos plyteles. Naudoju tik profesionalią įrangą, todėl užtikrinu nepriekaištingą plytelių pjovimą ir suleidimą:</p>
        <ul>
          <li><strong>Plytelių pjovimas 45° kampu</strong> – išorinių kampų formavimui nenaudojami jokie plastikiniai ar metaliniai kampukai, tik tikslus plytelių suleidimas (gerontavimas).</li>
          <li>Tikslus plytelių išdėstymo planavimas, siekiant išvengti neestetiškų siaurų pjūvių matomose vietose.</li>
          <li>Didelio formato plytelių (iki 120×60 cm ar net 120×120 cm) montavimas.</li>
          <li>Aukščiausios kokybės klijų ir glaistų parinkimas pagal plytelių tipą ir pagrindą.</li>
        </ul>
      </>
    ),
  },
  "santechnikos-darbai-klaipeda": {
    title: "Santechnikos darbai Klaipėdoje",
    h1: "Vonios santechnikos darbai",
    description: "Vamzdynų keitimas, potinkinių sistemų, dušo trapų, maišytuvų ir kitos santechnikos montavimas vonios kambaryje.",
    content: (
      <>
        <p>Patikima santechnika – tai vonios kambario ilgaamžiškumo pagrindas. Net ir pati brangiausia apdaila neteks prasmės, jei už sienos esantys vamzdžiai bus sumontuoti nekokybiškai.</p>
        <h2>Ką apima vonios santechnikos darbai?</h2>
        <p>Vykdant kapitalinį vonios remontą, dažniausiai reikalingas pilnas vamzdynų atnaujinimas:</p>
        <ul>
          <li>Vandentiekio ir kanalizacijos taškų pernešimas pagal naują projektą.</li>
          <li>Potinkinio WC rėmo montavimas.</li>
          <li>Dušo trapo ar latako įrengimas formuojant nuolydį.</li>
          <li>Potinkinių dušo ir praustuvo maišytuvų sistemų įrengimas.</li>
          <li>Kriauklių, unitazų, bide, vonių pajungimas baigiamajame etape.</li>
        </ul>
        <p>Naudoju tik laiko patikrintas vamzdynų sistemas (pvz., daugiasluoksnius ar presuojamus vamzdžius), garantuojančias apsaugą nuo pratekėjimo.</p>
      </>
    ),
  },
  "vonios-remonto-kaina": {
    title: "Vonios remonto kaina",
    h1: "Kiek kainuoja vonios remontas?",
    description: "Sužinokite, nuo ko priklauso vonios remonto sąmata ir kaip teisingai suplanuoti biudžetą.",
    content: (
      <>
        <p>Vienas dažniausių klientų klausimų – kiek kainuos vonios remontas? Nors kiekvienas objektas individualus, galima išskirti pagrindinius kainą lemiančius veiksnius.</p>
        <h2>Kas sudaro remonto sąmatą?</h2>
        <p>Galutinė kaina susideda iš trijų pagrindinių dalių:</p>
        <ol>
          <li><strong>Darbo užmokestis:</strong> Priklauso nuo darbų apimties. Ar reikės griauti senas sienas? Ar teks iš naujo betonuoti grindis dušo trapui? Ar sienos labai kreivos ir reikalauja storo tinko sluoksnio?</li>
          <li><strong>Juodosios statybinės medžiagos:</strong> Vamzdžiai, laidai, tinkas, gipskartonis, hidroizoliacija, plytelių klijai, silikonai. Tai dažniausiai sudaro apie 20–30% visos sumos.</li>
          <li><strong>Apdailos medžiagos ir santechnika:</strong> Plytelės, unitazas, dušo kabina, spintelė, maišytuvai. Tai dalis, kurią kontroliuojate Jūs. Kaina gali skirtis kartais, priklausomai nuo pasirinktų gamintojų.</li>
        </ol>
        <p>Vidutiniškai kapitalinis standartinės vonios remontas uostamiestyje (su darbais ir juodomis medžiagomis) prasideda nuo 3500 eurų. Norint tikslios sąmatos, būtina objekto apžiūra.</p>
      </>
    ),
  },
  "didelio-formato-plyteliu-klijavimas": {
    title: "Didelio formato plytelių klijavimas",
    h1: "Didelio formato plytelių montavimas",
    description: "120×60, 120×120 ir kitų didelių formatų plytelių klijavimas vonios kambariuose.",
    content: (
      <>
        <p>Didelio formato plytelės (120×60 cm, 120×120 cm ar dar didesnės) – tai modernios prabangos standartas. Jos kuria vientisą, erdvų vaizdą, mažiau matomų siūlių, todėl vonios kambarys atrodo kur kas estetiškiau ir jį lengviau prižiūrėti.</p>
        <h2>Svarbiausi niuansai klijuojant dideles plyteles</h2>
        <p>Šių plytelių montavimas iš esmės skiriasi nuo standartinių (pvz., 60×60 cm) plytelių:</p>
        <ul>
          <li><strong>Idealus sienų lygumas:</strong> Klijuojant dideles plyteles, sienos turi būti išlygintos milimetro tikslumu, kitaip išryškės nelygumai kampuose.</li>
          <li><strong>Specialūs klijai:</strong> Naudojami aukštos elastingumo klasės (S1 arba S2) klijai, kadangi didelės plokštės labiau reaguoja į temperatūros svyravimus ir pastato judėjimą.</li>
          <li><strong>Įranga:</strong> Reikalingos specialios pjaustymo staklės, transportavimo pritraukėjai. Turiu visą reikiamą įrangą darbui su dideliais formatais.</li>
        </ul>
      </>
    ),
  },
  "vonios-griovimo-darbai": {
    title: "Vonios griovimo darbai Klaipėda",
    h1: "Vonios griovimo ir paruošimo darbai",
    description: "Saugus ir greitas senos vonios demontavimas, plytelių lupimas ir šiukšlių išvežimas.",
    content: (
      <>
        <p>Kiekvienas kapitalinis remontas prasideda nuo griovimo. Tinkamas patalpos paruošimas lemia tolimesnių darbų greitį ir kokybę.</p>
        <h2>Ką apima griovimo etapas?</h2>
        <p>Sename daugiabutyje griovimo darbai gali būti gana purvini ir triukšmingi, tačiau aš stengiuosi šį procesą atlikti kuo greičiau ir švariau:</p>
        <ul>
          <li>Senos santechnikos (vonių, kriauklių, unitazų) atjungimas ir išnešimas.</li>
          <li>Senų plytelių lupimas nuo sienų ir grindų. Dažnai tenka šalinti ir seną, atšokusį tinką.</li>
          <li>Priekinės vonios sienelės (jei mūrinė) ar kitų pertvarų griovimas pagal naują projektą.</li>
          <li>Šiukšlių krovimas į maišus ir išvežimas į statybinių atliekų aikštelę.</li>
        </ul>
        <p>Palieku patalpą visiškai švarią ir paruoštą sekančiam etapui – naujų sistemų vedžiojimui.</p>
      </>
    ),
  },
  "vonios-hidroizoliacija": {
    title: "Vonios hidroizoliacija",
    h1: "Patikima vonios hidroizoliacija",
    description: "Taisyklingas hidroizoliacijos įrengimas vonios kambariuose ir dušo zonose, apsaugant nuo drėgmės.",
    content: (
      <>
        <p>Vonios kambarys yra drėgniausia vieta namuose. Kokybiška hidroizoliacija – tai jūsų ramybės garantas, apsaugantis nuo pelėsio atsiradimo ir kaimynų užliejimo pavojaus.</p>
        <h2>Kaip taisyklingai įrengiama hidroizoliacija?</h2>
        <p>Hidroizoliacija tai ne tiesiog mėlyno skysčio užtepimas ant sienos. Tai sistema:</p>
        <ul>
          <li>Paviršiaus gruntavimas giluminiu gruntu.</li>
          <li>Vidiniai sienų ir grindų kampai klijuojami specialia elastinga hidroizoliacine juosta.</li>
          <li>Vamzdžių išvadai sandarinami specialiais manžetais.</li>
          <li>Teptinė hidroizoliacija tepama mažiausiai dviem sluoksniais.</li>
        </ul>
        <p><strong>Būtinosios zonos:</strong> Grindys visame vonios kambaryje (su užlaida ant sienų), ir sienos dušo ar vonios kabinos zonoje (iki pat lubų).</p>
      </>
    ),
  },
  "potinkinio-wc-montavimas": {
    title: "Potinkinio WC montavimas",
    h1: "Potinkinio WC (rėmo) montavimas",
    description: "Saugus ir tvirtas pakabinamų unitazų sistemų montavimas. Apdaila ir pajungimas.",
    content: (
      <>
        <p>Pakabinamas, potinkinis unitazas tapo standartu šiuolaikiniame vonios kambaryje. Jis užima mažiau vietos, vizualiai padidina erdvę ir itin palengvina grindų valymą.</p>
        <h2>Montavimo procesas</h2>
        <p>Potinkinio rėmo montavimas reikalauja patirties, nes vėliau sistema paslepiama po plytelėmis, o priėjimas lieka tik per nuleidimo mygtuko angą:</p>
        <ul>
          <li>Tvirtas rėmo ankeravimas prie kapitalinės sienos ir grindų. Rėmas turi atlaikyti didelę apkrovą (iki 400 kg).</li>
          <li>Kanalizacijos nuolydžių ir vandentiekio pajungimo užtikrinimas.</li>
          <li>Karkaso apsiuvimas drėgmei atspariu gipskartoniu (dažniausiai dviem sluoksniais dėl tvirtumo).</li>
          <li>Apdaila plytelėmis ir nuleidimo mygtuko bei paties puodo sumontavimas.</li>
        </ul>
      </>
    ),
  },
  "duso-trapo-montavimas": {
    title: "Dušo trapo montavimas",
    h1: "Linijinio dušo trapo (latako) įrengimas",
    description: "Taisyklingas dušo latakų montavimas formuojant nuolydį plytelėmis. Walk-in dušo sprendimai.",
    content: (
      <>
        <p>„Walk-in" tipo dušas be padėklo, su į grindis įleistu linijiniu trapu, suteikia vonios kambariui prabangos ir modernumo. Tačiau techniškai tai vienas sudėtingesnių mazgų vonioje.</p>
        <h2>Dušo trapo įrengimo niuansai</h2>
        <p>Svarbiausia – užtikrinti tinkamą vandens nutekėjimą ir absoliutų sandarumą:</p>
        <ul>
          <li><strong>Aukščio planavimas:</strong> Trapo sumontavimui reikia apie 7–10 cm gylio grindyse. Senos statybos butuose tai dažnai reiškia senų grindų ardymą ar net kanalizacijos stovo pertvarkymą.</li>
          <li><strong>Nuolydžio formavimas:</strong> Betonuojant grindis suformuojamas reikiamas nuolydis (apie 1–2 cm į metrą) link trapo.</li>
          <li><strong>Sandarumas:</strong> Trapo flanšas itin atidžiai padengiamas hidroizoliacija naudojant sandarinimo manžetus.</li>
          <li><strong>Plytelių pjovimas:</strong> Plytelės turi būti meistriškai supjaustytos pagal suformuotus nuolydžius (vokų sistema, jei trapas ne per visą plotį).</li>
        </ul>
      </>
    ),
  },
  "grindu-betonavimas-klaipeda": {
    title: "Grindų betonavimas vonioje",
    h1: "Grindų betonavimas ir lyginimas",
    description: "Senų vonios grindų lyginimas, betonavimas formuojant nuolydžius dušui Klaipėdoje.",
    content: (
      <>
        <p>Lygus ir tvirtas pagrindas – būtina sąlyga ilgalaikiam plytelių išsilaikymui. Vykdant kapitalinį vonios remontą senos statybos namuose, dažnai tenka iš pagrindų atnaujinti grindis.</p>
        <h2>Kada reikalingas grindų betonavimas?</h2>
        <p>Grindų lyginimo ar betonavimo darbai atliekami šiais atvejais:</p>
        <ul>
          <li>Keičiant senus kanalizacijos vamzdžius, kurie slepiami grindyse.</li>
          <li>Įrenginėjant elektrinį ar vandeninį grindinį šildymą (kabelis arba kilimėlis įleisiamas į išlyginamąjį sluoksnį).</li>
          <li>Formuojant nuolydžius linijiniam dušo trapui.</li>
          <li>Išlyginant didelius grindų aukščių skirtumus tarp vonios ir koridoriaus.</li>
        </ul>
        <p>Naudoju greitai džiūstančius, stiprius išlyginamuosius mišinius, todėl nereikia laukti savaičių, kol bus galima tęsti darbus.</p>
      </>
    ),
  },
};
